import { useEffect, useRef, useState } from "react";

import {
  CanvasContainer,
  Contents,
  ButtonWrapper,
  MenuWrapper,
  CanvasWrapper,
} from "./canvas.style";
import Button from "../../components/button";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [pos, setPos] = useState([]);
  const [isDraw, setIsDraw] = useState(false);
  const [mode, setMode] = useState("read");

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

  const drawEnd = () => {
    setIsDraw(false);
  };

  const changeMode = () => {
    if (mode === "read") {
      setMode("edit");
    } else if (mode === "edit") {
      setMode("read");
    }
  };

  return (
    <CanvasContainer>
      <Contents>
        <ButtonWrapper>
          {mode === "read" ? (
            <Button onClick={changeMode}>Edit</Button>
          ) : (
            <Button onClick={changeMode}>Read</Button>
          )}
          <Button>Save</Button>
        </ButtonWrapper>
        <CanvasWrapper>
          <canvas
            ref={canvasRef}
            width={500}
            height={500}
            style={{ border: "2px solid black" }}
            onMouseDown={drawStart}
            onMouseMove={drawSquare}
            onMouseUp={drawEnd}
          />
          <MenuWrapper>
            <Button style={{ marginBottom: "1rem" }}>Circle</Button>
            <Button style={{ marginLeft: "0", marginBottom: "1rem" }}>
              Rectangular
            </Button>
          </MenuWrapper>
        </CanvasWrapper>
      </Contents>
    </CanvasContainer>
  );
};

export default Canvas;
