import Draggable from "react-draggable";
import { useRef } from "react";

const DrawFigure = ({ figureData, canvasSize }) => {
  const { width, height, color, figure } = figureData;
  const { width: canvasWidth, height: canvasHeight } = canvasSize;
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds={{
        left: 0,
        top: 0,
        right: parseInt(canvasWidth) - parseInt(width),
        bottom: parseInt(canvasHeight) - parseInt(height),
      }}
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
