import { Component } from 'react';
import React from 'react';

class App extends Component<{}, {}> {

  render() {
    // React will call render whenever it wants to put this component on the webpage
    // We return what HTML should be displayed for this component
    // Then, React will take that HTMl and insert it into the proper part of the webpage
    return (
      <p>Hello World</p>
    );
  }

}

export default App;
