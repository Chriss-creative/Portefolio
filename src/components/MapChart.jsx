import React from "react";
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup } from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1400,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies geography="/features.json" fill="#2C065D" stroke="#FFFFFF" strokeWidth={0.5}>
        {({ geographies }) => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)}
      </Geographies>
      <Annotation
        subject={[6.9722, 43.6566]}
        dx={-180}
        dy={-65}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Nice"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
