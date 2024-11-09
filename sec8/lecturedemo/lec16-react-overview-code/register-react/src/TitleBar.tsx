import React, { Component } from 'react';

interface TitleBarProps {
  name: string;
}

export class TitleBar extends Component<TitleBarProps, {}> {
  render() {
    return (
        <div className="title">
          <p>{this.props.name}</p>
        </div>);
  }
}
