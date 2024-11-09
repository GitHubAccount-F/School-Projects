import React, { Component } from 'react';
import { QuarterPicker } from './QuarterPicker';
import { ClassPicker } from './ClassPicker';

interface AppState {
  quarter: string | undefined;  // quarter whose classes are being picked OR
                                // undefined if still picking quarter
}

// Top-level application that lets the user pick a quarter and then pick
// classes within that quarter.
export class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {quarter: undefined};
  }



  render() {
    if (this.state.quarter === undefined) {

      // Let's talk about callbacks here...
      return <QuarterPicker onPick={(qtr: string) => this.setQuarter(qtr)}/>;
    } else {
      return <ClassPicker quarter={this.state.quarter}
                          onBack={() => this.back()}/>;
    }
  }

  setQuarter(qtr: string) {
    this.setState({quarter: qtr});
  }

  back() {
    this.setState({quarter: undefined});
  }
}
