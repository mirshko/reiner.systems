import React from "react";
import Draggable from "react-draggable";

const Window = ({ children, style }) => (
  <Draggable handle=".handle" bounds="body">
    <div className="bg-white" style={style}>
      <div className="ba bw2 handle" style={{ cursor: "move" }}>
        <div className="flex h2 items-center">
          <div className="w1 h1 bg-black mr2" style={{ marginLeft: "8px" }} />
          <div className="w1 h1 bg-black mr2" />
          <div className="w1 h1 bg-black" />
        </div>
      </div>
      <div className="mb4 bl br bb bw2">{children}</div>
    </div>
  </Draggable>
);

export default Window;
