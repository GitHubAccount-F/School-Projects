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

// Allows us to write CSS styles inside App2.css, any styles will apply to all components inside <App2 />
import "../App.css";

class App extends Component<{}, {}> {
    // <- {} means no props.

    constructor(props: any) {
        super(props);
    }

    render() {
        return (<div>
                <h1 id="app-title">Line Mapper!</h1>

                <div>
                    <Map edgeList={[]} />
                </div>

            </div>
        );
    }

}

export default App;
