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

import {Component} from 'react';
import "./App.css"

interface AppState {
    requestResult: string;
}

class App extends Component<{}, AppState> {

    constructor(props: {}) {
        super(props);
        // You don't need to store the string result of a request in
        // state, but we're using for this example so we can display
        // the string on the page.
        this.state = {
            requestResult: "NO REQUEST RESULT"
        };
    }

    makeRequestLong = async () => {  // <- Syntax for making async arrow functions.
        try {
            // Note that we need the "http://" here for browser security reasons.
            // If you remove it, we'll get an error complaining about not having it.
            let responsePromise = fetch("http://localhost:4567/hello-someone?person=React");

            // responsePromise is a Promise<Response>. We can get the value out of the promise by waiting
            // until the promise resolves:
            let response = await responsePromise;

            // Now that we have a response, we should check the status code, make sure it's OK=200:
            if (!response.ok) {
                alert("The status is wrong! Expected: 200, Was: " + response.status);
                return; // Don't keep trying to execute if the response is bad.
            }

            // Now we can request to get the data out of the response. We know that this
            // particular endpoint just returns text, so we'll use the .text() function
            // to ask for a promise that will give us the text from inside the response.
            // In your actual project, you'll probably use response.json() instead.
            let textPromise = response.text();

            // The text() function actually returns a Promise<string>, so we need to wait for
            // it to resolve before we can have the string.
            let text = await textPromise;

            // Now that we have the string, let's stick it in state so it'll be displayed
            // to the user.
            this.setState({
                requestResult: text
            });
        } catch (e) {
            // If an error/exception happens (such as if the fetch URL is wrong or the
            // server is offline), then we'll end up here. Probably best to show a message to the
            // user.
            alert("There was an error contacting the server.");
            console.log(e);  // Logging the error can be nice for debugging.
        }
        // Note that the above is a _very_ long-winded way of doing this. The equivalent statement
        // without all the extra unnecessary variables is shown in makeRequest below: this is how
        // you'll usually see it written, without all the intermediate variables.
    };

    makeRequest = async () => {
        // This does the exact same thing as makeRequestLong(), in the exact same way.
        // It's just written using a much shorter syntax with less unnecessary variables.
        // The following is basically exactly the structure of what you're going to what to
        // use in HW9 to make a request: you can model your code off of this.
        // Make sure you understand how it works, so you can modify it to do what you want!
        try {
            let response = await fetch("http://localhost:4567/hello-someone?person=React");
            if (!response.ok) {
                alert("The status is wrong! Expected: 200, Was: " + response.status);
                return; // Don't keep trying to execute if the response is bad.
            }
            let text = await response.text();
            this.setState({
                requestResult: text
            });
        } catch (e) {
            alert("There was an error contacting the server.");
            console.log(e);
        }
    };

    printRangeToConsole = async () => {
        try {
            let response = await fetch("http://localhost:4567/range?start=1&end=10");
            if (!response.ok) {
                alert("The status is wrong! Expected: 200, Was: " + response.status);
                return; // Don't keep trying to execute if the response is bad.
            }
            // response.json() expects that the server returned a JSON string and will
            // convert it to a JS object for you.
            // If the response doesn't contain valid JSON, it'll throw an exception
            // We know that the /range endpoint returns an ArrayList converted to JSON, which
            // will show up inside JS as an array. So the 'object' variable will contain an array.
            // We can cast this to the appropriate TypeScript type.
            let object = (await response.json()) as number[];
            //
            console.log(object);
            // Let's just print them all out.
            for (let value of object) {
                console.log(value);
            }
            //
            // Might be nice to display a short message:
            this.setState({
                requestResult: "Check the console for the printed out array elements."
            })
        } catch (e) {
            alert("There was an error contacting the server.");
            console.log(e);
        }
    };

    render() {
        // Change which callback is assigned to the onClick in the button to try
        // out the different demos.
        return (
            <div className="App">
                <p>{this.state.requestResult}</p>
                <button onClick={this.makeRequestLong}>Make a Request</button>
            </div>
        );
    }
}

export default App;
