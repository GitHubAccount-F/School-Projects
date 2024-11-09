/*
 * Copyright (C) 2022 Hal Perkins.  All rights reserved.  Permission is
 * hereby granted to students registered for University of Washington
 * CSE 331 for use solely during Spring Quarter 2021 for purposes of
 * the course.  No other use, copying, distribution, or modification
 * is permitted without prior written consent. Copyrights for
 * third-party components of this work must be honored.  Instructors
 * interested in reusing these course materials should contact the
 * author.
 */

import React, { Component } from "react";
import Map from "../Map";
import { ColoredEdge } from "../types";

// Allows us to write CSS styles inside App2.css, any any styles will apply to all components inside <App2 />
import "../App.css";
import ColorTitle from "./ColorTitle";

interface AppState {
    lines: ColoredEdge[];
    color: string
}



class App extends Component<{}, AppState> {
    // <- {} means no props.

    constructor(props: any) {
        super(props);

        let x1: number = 200;
        const y1: number = 500;
        const x2: number = 2400;
        const y2: number = 500;
        const x3: number = 2400;
        const y3: number = 1200;
        const x4: number = 200;
        const y4: number = 1200;
        const color_: string = "blue";
        const tempLines = [{ x1:x1, y1:y1, x2:x2, y2:y2, color:color_, key: "0" },
            { x1:x2, y1:y2, x2:x3, y2:y3, color:color_, key: "1" },
            { x1:x3, y1:y3, x2:x4, y2:y4, color:color_, key: "2"}];
        this.state = {
            color: color_,
            lines: tempLines
        };
    }




    onRedClick = () => {
        this.updateColor("red")
    };

    onBlueClick = () => {
        this.updateColor("blue")
    };

    onGreenClick = () => {
        this.updateColor("green")

    };

    updateColor(color_:string) {
        const tempLines = this.state.lines;
        for(let i in tempLines){
            tempLines[i].color = color_
        }
        let newState = {
            color: color_,
            lines: tempLines
        };
        this.setState(newState);
    }


    render() {
        return (
            <div>
                <button onClick={this.onRedClick}>Red</button>
                <button onClick={this.onBlueClick}>Blue</button>
                <button onClick={this.onGreenClick}>Green</button>
                <br />

                <ColorTitle color={this.state.color}></ColorTitle>

                <div>
                    <Map edgeList={this.state.lines} />
                </div>
            </div>
        );
    }

}

export default App;
