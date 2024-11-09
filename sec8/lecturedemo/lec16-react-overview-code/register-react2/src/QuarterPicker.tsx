import React, { Component } from 'react';
import { QUARTERS } from './classes';

interface QuarterPickerProps {
  onPick: (qtr: string) => any;  // called when a quarter is picked
}

// Displays UI that allows the user to choose a quarter.
export class QuarterPicker extends Component<QuarterPickerProps, {}> {
  render() {
    let buttons: any[] = [];
    for (let i = 0; i < QUARTERS.length; i++) {
      buttons.push(
          <div>
            <button type="button" className="btn btn-dark"
                    onClick={evt => this.props.onPick(QUARTERS[i])}>
              {QUARTERS[i]}
            </button>
          </div>);
    }

    return <div>{buttons}</div>;  // all buttons added as children
  }
}
