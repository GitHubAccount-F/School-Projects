# Section 8 Demos - React

In this directory, there are 6 demos. The goal of these demos is
to progressively show how a React application can get more complicated
and interact with the `Map` components you will be using for HW8.

To run the demos, you will first need to do `npm install` in this directory.
Then, run `npm start` to run a demo.

With `src`, there are six directories, each for one demo. Each directory
contains its version of `App.tsx`.

To run a specific demo, change the import in `src/index.tsx` to use
the `App` from that demo's directory. For example, `import App from './1-react-boilerplate/App'`
runs the first demo.

**Note: Demos 4 - 7 draw lines on the map. To run these, you will need
to uncomment lines 49 - 74 in `Map.tsx` which provides the code necessary
to draw three lines on the map. These lines must be commented to run demos
1 and 2.**