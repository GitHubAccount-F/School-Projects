## Section Demo Code - Index

### Table of Contents
- Spark Java
- fetch
- Anonymous Inner Classes
- Gson

### Spark Java
See `src/main/java/sparkDemo` for the code and comments. Demonstrates the following:

- Simple plaintext response to a request.
- Reading from a query string.
- Properly communicating errors.
- Using Gson to create and send JSON strings on a simple object (`List`)
- Using Gson to create and send JSON strings for complex objects (`RangeInfo`)

To start the `SparkServer` and test it out for yourself, run the `runSpark` gradle task. (It's under the "demo" drop-down in the gradle window in IntelliJ.)

### fetch
See `src/main/react/src/App.tsx` for the code and comments. Demonstrates the following:

- Using fetch to send requests to a server.
- Checking the "status code" of a response to make sure the server isn't indicating an error. (See the Spark Java demo for an example of how to "report an error" from the server to the client using status codes)
- Use Promises and `async/await` to get the data out of a response.
- Deal with errors during the fetch or with the response.

To run the React application and test it our yourself, run `npm install` (first time only), then `npm start` from the `src/main/react` directory. Remember, the fetch demo makes requests to the Spark Java server, so you probably want that demo running as well. (See above.)

### Anonymous Inner Classes
See `src/main/java/anonInnerClassDemo` for code. Demonstrates the following:

- Using regular classes to extend `Comparator` (Version 1 from the slides.)
- Using inner classes to extend `Comparator` (Version 2 from the slides.)
- Using anonymous inner classes to extend `Comparator` (Version 3 from the slides.)

See the slides for more info. This demo project contains working versions of all the code from the slides. Use the `runStringSortClasses`, `runStringSortInnerClasses` and `runStringSortAnonymousInnerClasses` gradle tasks to run these different versions. (They're under the "demo" drop-down in the gradle window in IntelliJ.)

### Gson
See `src/main/java/gsonDemo` for code and comments. Demonstrates the following:

- Using Gson to convert a complex object to a JSON string. 

Uses the example from slides. Use the `runGson` gradle task to run this demo. (It's under the "demo" drop-down in the gradle window in IntelliJ.)
