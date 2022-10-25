import React, { useState, useRef } from "react";
import Draggable from "react-draggable";

import {
  CanvasContainer,
  Contents,
  ButtonWrapper,
  CanvasWrapper,
  Drawer,
  TheFigure,
} from "./canvas.style";
import Button from "@/components/button";
import FigureModal from "./figureModal";
import CanvasModal from "./canvasModal";
import { IFigure, ICanvas } from "./canvas.interface";

interface idProp {
  id: string;
}

const Canvas = () => {
  const [mode, setMode] = useState<string>("read");
  const [showFigureModal, setShowFigureModal] = useState<boolean>(false);
  const [figures, setFigures] = useState<IFigure[] | []>([]);
  const [showCanvasModal, setShowCanvasModal] = useState<boolean>(false);
  const [canvas, setCanvas] = useState<ICanvas>({
    name: "Canvas",
    width: 500,
    height: 500,
  });
  const nodeRef = useRef(null);

  const changeMode = () => {
    if (mode === "read") {
      setMode("edit");
    } else if (mode === "edit") {
      setMode("read");
    }
  };

  const clickHandler = ({ id }: idProp) => {
    alert(id);
  };

  return (
    <>
      <CanvasContainer>
        <Contents>
          <ButtonWrapper>
            {mode === "read" ? (
              <Button onClick={changeMode}>Edit</Button>
            ) : (
              <Button onClick={changeMode}>Read</Button>
            )}
            <Button disabled={mode === "edit"}>Save</Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              onClick={() => setShowFigureModal(true)}
              disabled={mode === "read"}
            >
              Draw a figure
            </Button>
            <Button
              onClick={() => setShowCanvasModal(true)}
              disabled={mode === "read"}
            >
              Set the canvas
            </Button>
          </ButtonWrapper>
          <CanvasWrapper>
            <Drawer
              id="drawer"
              width={`${canvas.width}px`}
              height={`${canvas.height}px`}
            >
              {figures.length > 0 &&
                figures.map((v: IFigure) => (
                  <Draggable
                    nodeRef={nodeRef}
                    key={v.id}
                    bounds={{
                      left: 0,
                      top: 0,
                      right: canvas.width - v.width,
                      bottom: canvas.height - v.height,
                    }}
                    disabled={mode === "read"}
                  >
                    <TheFigure
                      width={`${v.width}px`}
                      height={`${v.height}px`}
                      color={v.color}
                      figure={v.figure}
                      key={v.id}
                      ref={nodeRef}
                      id={`${v.id}F`}
                      onClick={() => {
                        if (mode === "read") {
                          clickHandler({ id: v.id });
                        }
                      }}
                      style={{ cursor: mode === "read" ? "pointer" : "move" }}
                    />
                  </Draggable>
                ))}
            </Drawer>
          </CanvasWrapper>
          {canvas.name} is {canvas.width}px * {canvas.height}px now.
        </Contents>
      </CanvasContainer>
      {showFigureModal && (
        <FigureModal
          show={showFigureModal}
          setShow={setShowFigureModal}
          figures={figures}
          setFigures={setFigures}
        />
      )}
      {showCanvasModal && (
        <CanvasModal
          show={showCanvasModal}
          setShow={setShowCanvasModal}
          setCanvas={setCanvas}
        />
      )}
    </>
  );
};

export default Canvas;
