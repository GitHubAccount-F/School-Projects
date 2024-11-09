import React, { Component } from 'react';
import { TitleBar } from './TitleBar';
import { EditPane } from './EditPane';



export class App extends Component {
  render() {
    return (
        <div>
          <TitleBar name={"My App"}/>
          <EditPane rows={8} />
        </div>);
  }
}
