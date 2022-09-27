import { useEffect, useRef, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();

  const drawSquare = (evt) => {
    ctx.strokeStyle = "red";
    let x = evt.clientX - canvasRef.current.offsetLeft;
    let y = evt.clientY - canvasRef.current.offsetTop;
    let w = 50;
    let h = 50;
    ctx.strokeRect(x - w / 2, y - h / 2, w, h);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    setCtx(canvas.getContext("2d"));
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      style={{ border: "2px solid black" }}
      onMouseDown={drawSquare}
    />
  );
};

export default Canvas;
