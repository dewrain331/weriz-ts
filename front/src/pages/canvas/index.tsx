import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

import {
  CanvasContainer,
  Contents,
  ButtonWrapper,
  CanvasWrapper,
  Drawer,
  TheFigure,
} from "./canvas.style";
import Api from "@/Api";
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
  const [figuresList, setFiguresList] = useState<IFigure[] | []>([]);
  const [showCanvasModal, setShowCanvasModal] = useState<boolean>(false);
  const [canvasList, setCanvasList] = useState<ICanvas[]>([]);
  const [canvasPage, setCanvasPage] = useState<number>(1);
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

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await Api.get(`/user/canvas`);
      } catch (err) {
        console.error(err);
      }
      fetch();
    };
  }, []);

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
            {canvasList.length > 0 ? (
              <Drawer
                id="drawer"
                width={`${canvasList[0].width}px`}
                height={`${canvasList[0].height}px`}
              >
                {figuresList.length > 0 &&
                  figuresList.map((v: IFigure) => (
                    <Draggable
                      nodeRef={nodeRef}
                      key={v.id}
                      bounds={{
                        left: 0,
                        top: 0,
                        right: canvasList[0].width - v.width,
                        bottom: canvasList[0].height - v.height,
                      }}
                      defaultPosition={{ x: v.xPos, y: v.yPos }}
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
                        style={{
                          cursor: mode === "read" ? "pointer" : "move",
                        }}
                      />
                    </Draggable>
                  ))}
              </Drawer>
            ) : (
              <div>Please set your canvas first!</div>
            )}
          </CanvasWrapper>
          {canvasList.length > 0 ? (
            <div>
              {canvasList[0].name} is {canvasList[0].width}px *{" "}
              {canvasList[0].height}px now.
            </div>
          ) : (
            <div />
          )}
        </Contents>
      </CanvasContainer>
      {showFigureModal && (
        <FigureModal
          show={showFigureModal}
          setShow={setShowFigureModal}
          figuresList={figuresList}
          setFiguresList={setFiguresList}
        />
      )}
      {showCanvasModal && (
        <CanvasModal
          show={showCanvasModal}
          setShow={setShowCanvasModal}
          canvasList={canvasList}
          setCanvasList={setCanvasList}
        />
      )}
    </>
  );
};

export default Canvas;
