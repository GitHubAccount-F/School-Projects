import React, {Component} from "react";

interface ButtonGroupProps {
    onColorChange: (newColor: string) => void  // Called by ButtonGroup when a new color is selected.
}

class ButtonGroup extends Component<ButtonGroupProps, {}> {

    onRedClick = () => {
        this.props.onColorChange("red");
    };

    onBlueClick = () => {
        this.props.onColorChange("blue");
    };

    onGreenClick = () => {
        this.props.onColorChange("green");
    };

    render() {
        return (
            <div>
                <button onClick={this.onRedClick}>Red</button>
                <button onClick={this.onBlueClick}>Blue</button>
                <button onClick={this.onGreenClick}>Green</button>
            </div>
        )
    }
}

export default ButtonGroup;