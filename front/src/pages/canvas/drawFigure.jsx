import Draggable from "react-draggable";
import { useRef } from "react";

const DrawFigure = ({ figureData }) => {
  const { width, height, color, figure } = figureData;
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds="parent"
      defaultPosition={{ x: 50, y: 50 }}
    >
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: `${color}`,
          borderRadius: figure === "Circle" ? "50%" : "0%",
        }}
        ref={nodeRef}
      />
    </Draggable>
  );
};

export default DrawFigure;
