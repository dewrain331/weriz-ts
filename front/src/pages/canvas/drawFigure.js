import { useState } from "react";
import Draggable from "react-draggable";

const DrawFigure = ({ figure, width, height, color }) => {
  const [Opacity, setOpacity] = useState(false);

  const Draw = () => {
    if (figure === "Rectangular") {
      return (
        <div
          style={{
            width: { width },
            height: { height },
            backgroundColor: { color },
            opacity: Opacity ? 0.5 : 1,
          }}
        />
      );
    } else if (figure === "Circle") {
      return (
        <div
          style={{
            width: { width },
            height: { height },
            backgroundColor: { color },
            borderRadius: "50%",
            opacity: Opacity ? 0.5 : 1,
          }}
        />
      );
    } else {
      alert("Something is wrong. Check your drawing setting.");
    }
  };

  return (
    <Draggable
      onStart={() => setOpacity(true)}
      onStop={() => setOpacity(false)}
    >
      {Draw}
    </Draggable>
  );
};

export default DrawFigure;
