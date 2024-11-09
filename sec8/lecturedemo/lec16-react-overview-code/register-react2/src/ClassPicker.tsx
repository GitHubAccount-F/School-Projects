import React, { Component } from 'react';
import { CLASSES } from './classes';

interface ClassPickerProps {
  quarter: string;    // quarter whose classes are being picked
  onBack: () => any;  // called when the user wants to pick a new quarter
}

interface ClassPickerState {
  classes: Array<string>;  // list of classes currently chosen
}

// UI that allows the user to choose classes within a quarter. Displays the
// number of credits for those classes.
export class ClassPicker extends Component<ClassPickerProps, ClassPickerState> {
  constructor(props: ClassPickerProps) {
    super(props);
    this.state = {classes: []};
  }

  render() {
    const allClasses = CLASSES.get(this.props.quarter)!;

    let choices : any[] = [];
    for (let i = 0; i < allClasses.length; i++) {
      const name = allClasses[i];
      const checked = this.state.classes.indexOf(name) >= 0;
      choices.push(
          <div className="form-check">
            <input className="form-check-input" type="checkbox"
                   value={allClasses[i]} checked={checked}
                   onChange={evt => this.onChange(evt)} />
            <label className="form-check-label">{name}</label>
          </div>);
    }

    return (
        <div>
          <div>
            <button type="button" className="btn btn-link"
                    onClick={() => this.props.onBack()}>
              Back
            </button>
          </div>
          <p>Choose your classes:</p>
          <div className="choices">
            {choices}
          </div>
          <p>You've registered for: {this.state.classes.join(", ")}</p>
        </div>);
  }

  onChange(evt: any) {
    // NOTE: We cannot directly mutate this.state.classes!
    //       We need to make a copy to pass to setState.
    const cls = evt.target.value as string;  // class name
    const index = this.state.classes.indexOf(cls);
    if (evt.target.checked) {
      if (index < 0) {
        this.setState({classes: this.state.classes.concat(cls)});
      }
    } else {
      if (index >= 0) {
        const before = this.state.classes.slice(0, index);
        const after = this.state.classes.slice(index+1);
        this.setState({classes: before.concat(after)});
      }
    }
  }

}
