/*
 * Copyright (C) 2020 Hal Perkins.  All rights reserved.  Permission is
 * hereby granted to students registered for University of Washington
 * CSE 331 for use solely during Winter Quarter 2021 for purposes of
 * the course.  No other use, copying, distribution, or modification
 * is permitted without prior written consent. Copyrights for
 * third-party components of this work must be honored.  Instructors
 * interested in reusing these course materials should contact the
 * author.
 */

package sparkDemo;

import com.google.gson.Gson;
import spark.Request;
import spark.Response;
import spark.Route;
import spark.Spark;

import java.util.ArrayList;
import java.util.List;

/**
 * This is the main class that runs the server, it includes a main method
 * that sets up the server and allows it to accept requests.
 */
public class SparkServer {

    public static void main(String[] args) {
        CORSFilter corsFilter = new CORSFilter();
        corsFilter.apply();
        // The above two lines help set up some settings that allow the
        // React application to make requests to the Spark server, even though it
        // comes from a different server.
        // Normally, this isn't allowed by browsers for security reasons. In this case,
        // it's the desired behavior.

        // This tells Spark how to respond to a "GET" request being made to the server's
        // "/hello-world" endpoint. Each time a request is made, the Route's handle
        // method is called, and the return value is sent back to whatever made the request.
        Spark.get("/hello-world", new Route() {
            @Override
            public Object handle(Request request, Response response) throws Exception {
                // As a first example, let's just return a static string.
                return "Hello, Spark!";
            }
        });

        // Let's move on to something a little more complex. How do we get input from the
        // client? By using something called a query string! It looks like this:
        // /some-endpoint?key1=value1&key2=value2
        // Basically, after the endpoint there's a '?', following by a list of key/value
        // pairs, with an '&' between each pair.
        // This is a super common way for clients to send information about a request to a
        // server.
        // For example, search something on Google and you'll see google.com/search?q=YOUR-SEARCH
        Spark.get("/hello-someone", new Route() {
            @Override
            public Object handle(Request request, Response response) throws Exception {
                // In spark, you can get a value of a query string by calling
                // request.queryParams with the key of the item you're looking for.
                // For this example, requests should look like:
                //          "/hello-someone?person=Andrew"
                // for example.
                // If there is no "person=" in the request, queryParams returns null.
                String personName = request.queryParams("person");
                return "Hello, " + personName + "!";
            }
        });

        // What if we wanted Spark to return an error if the "person" query parameter
        // is missing, instead of just saying "Hello, null!"? We can change the "status code"
        // of the response and cause it to stop immediately.
        // In HTTP (what the internet uses to send requests and responses), every response has
        // a status code. 200 means that everything is fine. 404 means that the file being requested
        // was not found (remember "404 NOT FOUND?"). 400 means bad request, and 500 means "internal
        // server error". (There are many more that you can search for, but those are common ones.)
        // Let's make it so that if the "person" parameter is missing, we send back a response
        // with status 400 - Bad Request.
        Spark.get("/hello-someone-with-error", new Route() {
            @Override
            public Object handle(Request request, Response response) throws Exception {
                String personName = request.queryParams("person");
                if(personName == null) {
                    // halt tells Spark we want to stop the current request
                    // and send back just the status code we provide.
                    Spark.halt(400);
                }
                // The default response status is 200 - OK, so we don't need to set it here.
                return "Hello, " + personName + "!";
            }
        });

        // Let's return something more complex than just a string, though. What
        // if we have a whole data-structure or object that we want to send back?
        // Let's create and return an ArrayList, first turning it into JSON so
        // when we have a React server (eventually), the JS can understand the response.
        //
        // Let's have a "/range?start=NUMBER&end=NUMBER" that returns a list of all the numbers
        // between "start" and "end."
        Spark.get("/range", new Route() {
            @Override
            public Object handle(Request request, Response response) throws Exception {
                String startString = request.queryParams("start");
                String endString = request.queryParams("end");
                if(startString == null || endString == null) {
                    // You can also have a message in "halt" that is displayed in the page.
                    Spark.halt(400, "must have start and end");
                }
                // Convert to numbers:
                int start = 0;
                int end = 0;
                try {
                    start = Integer.parseInt(startString);
                    end = Integer.parseInt(endString);
                } catch(NumberFormatException nfe) {
                    // Integer.valueOf will throw a NumberFormatException
                    // if startString or endString can't be converted to integers.
                    // Let's catch that so it doesn't bubble up to Spark: in the case that
                    // start and end aren't numbers, the client sent us a bad request,
                    // so let's tell them:
                    Spark.halt(400, "start and end must be numbers");
                }
                // Now let's create our list.
                List<Integer> range = new ArrayList<>();
                for(int i = start; i <= end; i++) {
                    range.add(i);
                }
                // Let's get a Gson object so we can convert our ArrayList to a JSON String
                // before we send it back.
                // Gson is Google's library for dealing with JSON. It'll take any Java Object
                // and convert it to a JSON string that represents the data inside that object.
                Gson gson = new Gson();
                String jsonResponse = gson.toJson(range);
                return jsonResponse;
            }
        });

        // Let's create a more interesting object that holds a whole bunch of
        // data about a range of numbers, and return that using Gson to turn it into a
        // JSON string first.
        Spark.get("/range-info", new Route() {
            @Override
            public Object handle(Request request, Response response) throws Exception {
                String startString = request.queryParams("start");
                String endString = request.queryParams("end");
                if(startString == null || endString == null) {
                    Spark.halt(400, "must have start and end");
                }
                // Convert to numbers:
                int start = 0;
                int end = 0;
                try {
                    start = Integer.parseInt(startString);
                    end = Integer.parseInt(endString);
                } catch(NumberFormatException nfe) {
                    Spark.halt(400, "start and end must be numbers");
                }
                //
                // Here, the RangeInfo object has a whole bunch of internal
                // fields that contain extra info about the range of numbers.
                RangeInfo rangeInfo = new RangeInfo(start, end);
                Gson gson = new Gson();
                return gson.toJson(rangeInfo);
            }
        });
    }

}
