import React, {Component} from "react"

interface ColorTitleProps {
    color: string  // The color that should be displayed.
}

class ColorTitle extends Component<ColorTitleProps, {}> {

    constructor(props: ColorTitleProps) {
        super(props);
    }

    render() {
        return (
            <h1 id="app-title" style={{color: this.props.color}}>Your favorite color is {this.props.color}!</h1>
        );
    }

}

export default ColorTitle;