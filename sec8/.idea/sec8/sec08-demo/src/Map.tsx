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

import { LatLngExpression } from "leaflet";
import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapLine from "./MapLine";
import { ColoredEdge } from "./types";
import { UW_LATITUDE, UW_LONGITUDE } from "./Constants";

const position: LatLngExpression = [UW_LATITUDE, UW_LONGITUDE];

interface MapProps {
  edgeList: ColoredEdge[]; // edges to be drawn
}

interface MapState {}

class Map extends Component<MapProps, MapState> {
  render() {

    return (
      <div id="map">
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
              // TODO undo for example 4 onward
            // Render map lines here
            // [<MapLine
            //     color={this.props.edgeList[0].color}
            //     x1={this.props.edgeList[0].x1}
            //     y1={this.props.edgeList[0].y1}
            //     x2={this.props.edgeList[0].x2}
            //     y2={this.props.edgeList[0].y2}
            //     key={this.props.edgeList[0].key}
            // />,
            //   <MapLine
            //       color={this.props.edgeList[1].color}
            //       x1={this.props.edgeList[1].x1}
            //       y1={this.props.edgeList[1].y1}
            //       x2={this.props.edgeList[1].x2}
            //       y2={this.props.edgeList[1].y2}
            //       key={this.props.edgeList[1].key}
            //
            //   />,
            //   <MapLine
            //       color={this.props.edgeList[2].color}
            //       x1={this.props.edgeList[2].x1}
            //       y1={this.props.edgeList[2].y1}
            //       x2={this.props.edgeList[2].x2}
            //       y2={this.props.edgeList[2].y2}
            //       key={this.props.edgeList[2].key}
            //
            //   />]
          }
        </MapContainer>
      </div>
    );
  }
}

export default Map;
