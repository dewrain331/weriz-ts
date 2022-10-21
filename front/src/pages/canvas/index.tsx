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
import { IFigure } from "./canvas.interface";

interface clickHandlerProps {
  id: string;
}

const Canvas = () => {
  const [mode, setMode] = useState<string>("read");
  const [showFigureModal, setShowFigureModal] = useState<boolean>(false);
  const [figures, setFigures] = useState<IFigure[] | []>([]);
  const canvasSize = {
    width: 700,
    height: 700,
  };
  const nodeRef = useRef(null);

  const changeMode = () => {
    if (mode === "read") {
      alert("The mode is edit now.");
      setMode("edit");
    } else if (mode === "edit") {
      alert("The mode is read now.");
      setMode("read");
    }
  };

  const clickHandler = ({ id }: clickHandlerProps) => {
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
            <Button>Save</Button>
            <Button
              onClick={() => setShowFigureModal(true)}
              disabled={mode === "read"}
            >
              Draw a figure
            </Button>
          </ButtonWrapper>
          <CanvasWrapper>
            <Drawer
              id="drawer"
              width={`${canvasSize.width}px`}
              height={`${canvasSize.height}px`}
            >
              {figures.length > 0 &&
                figures.map((v: IFigure) => (
                  <Draggable
                    nodeRef={nodeRef}
                    key={v.id}
                    bounds={{
                      left: 0,
                      top: 0,
                      right: canvasSize.width - v.width,
                      bottom: canvasSize.height - v.height,
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
          Canvas is {canvasSize.width}px * {canvasSize.height}px now.
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
    </>
  );
};

export default Canvas;
