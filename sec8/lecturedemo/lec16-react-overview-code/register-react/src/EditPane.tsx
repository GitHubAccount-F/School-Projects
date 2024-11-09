import React, { Component } from "react";

interface EditPaneProps {
  rows: number;
}

export class EditPane extends Component<EditPaneProps, {}> {
  render() {
    return (
      <div className="form-group">
        <textarea
          className="form-control"
          rows={this.props.rows}
          value={"Type something here..."}
        />
      </div>
    );
  }
}



// import React, { Component } from "react";

// interface EditPaneProps {
//   rows: number;
// }




// interface EditPaneState {
//   textValue: string;
// }



// export class EditPane extends Component<EditPaneProps, EditPaneState> {



//   constructor(props: EditPaneProps) {
//     super(props);
//     this.state = {
//       textValue: "Type something here...",
//     };
//   }



//   textChange(event: any) {
//     this.setState({
//       textValue: event.target.value,
//     });
//   }



//   render() {
//     return (
//       <div className="form-group">
//         <textarea
//           className="form-control"
//           rows={this.props.rows}
//           onChange={(event) => this.textChange(event)}
//           value={this.state.textValue}
//         />
//         <div>{this.state.textValue.length}</div>
//       </div>
//     );
//   }
// }
