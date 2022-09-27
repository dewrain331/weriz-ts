import { useEffect, useRef, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [pos, setPos] = useState([]);
  const [isDraw, setIsDraw] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    setCtx(canvas.getContext("2d"));
  }, []);

  const drawStart = (evt) => {
    setIsDraw(true);
    setPos([
      evt.clientX - canvasRef.current.offsetLeft,
      evt.clientY - canvasRef.current.offsetTop,
    ]);
  };

  const drawSquare = (evt) => {
    if (!isDraw) return;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.strokeStyle = "red";
    let currentX = evt.clientX - canvasRef.current.offsetLeft;
    let currentY = evt.clientY - canvasRef.current.offsetTop;
    ctx.strokeRect(pos[0], pos[1], currentX - pos[0], currentY - pos[1]);
  };

  const drawEnd = (evt) => {
    setIsDraw(false);
  };

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      style={{ border: "2px solid black" }}
      onMouseDown={drawStart}
      onMouseMove={drawSquare}
      onMouseUp={drawEnd}
    />
  );
};

export default Canvas;
