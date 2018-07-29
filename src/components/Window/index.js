import React from "react";
import Draggable from "react-draggable";

import Handle from "../Handle";

const Window = ({ children, style, filename }) => (
  <Draggable handle=".handle" bounds="body">
    <div className="bg-white" style={style}>
      <Handle filename={filename} />
      <div className="mb4 bl br bb bw2">{children}</div>
    </div>
  </Draggable>
);

export default Window;
