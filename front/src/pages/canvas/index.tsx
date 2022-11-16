import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

import {
  CanvasContainer,
  Contents,
  ButtonWrapper,
  CanvasWrapper,
  Drawer,
  TheFigure,
  PaginationWrapper,
} from "./canvas.style";
import Api from "@/Api";
import Button from "@/components/button";
import FigureModal from "./figureModal";
import AddCanvasModal from "./addCanvasModal";
import SetCanvasModal from "./setCanvasModal";
import { IFigure, ICanvas } from "./canvas.interface";

interface idProp {
  id: string;
}

const Canvas = () => {
  const [mode, setMode] = useState<string>("read");
  const [showFigureModal, setShowFigureModal] = useState<boolean>(false);
  const [figuresList, setFiguresList] = useState<IFigure[] | []>([]);
  const [showAddCanvasModal, setShowAddCanvasModal] = useState<boolean>(false);
  const [showSetCanvasModal, setShowSetCanvasModal] = useState<boolean>(false);
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
        const canvasData = res.data;
        setCanvasList(canvasData);
        setFiguresList(canvasData[0].figures);
        setCanvasPage(1);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
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
              disabled={mode === "read" || canvasList.length === 0}
            >
              Draw a figure
            </Button>
            <Button
              onClick={() => setShowAddCanvasModal(true)}
              disabled={mode === "read"}
            >
              Add a canvas
            </Button>
            <Button
              onClick={() => setShowSetCanvasModal(true)}
              disabled={mode === "read" || canvasList.length === 0}
            >
              Set this canvas
            </Button>
          </ButtonWrapper>
          <CanvasWrapper>
            {canvasList.length > 0 ? (
              <Drawer
                id="drawer"
                width={`${canvasList[canvasPage - 1].width}px`}
                height={`${canvasList[canvasPage - 1].height}px`}
              >
                {figuresList.length > 0 &&
                  figuresList.map((v: IFigure) => (
                    <Draggable
                      nodeRef={nodeRef}
                      key={v.id}
                      bounds={{
                        left: 0,
                        top: 0,
                        right: canvasList[canvasPage - 1].width - v.width,
                        bottom: canvasList[canvasPage - 1].height - v.height,
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
              {canvasList[canvasPage - 1].name} is{" "}
              {canvasList[canvasPage - 1].width}px *{" "}
              {canvasList[canvasPage - 1].height}px now.
            </div>
          ) : (
            <div />
          )}
        </Contents>
        {canvasList.length > 0 && (
          <PaginationWrapper>
            <Button
              type="button"
              onClick={() => setCanvasPage((prev) => prev - 1)}
              disabled={canvasPage === 1}
              style={{ marginRight: "1rem" }}
            >
              {"<"}
            </Button>
            {canvasPage}
            <Button
              type="button"
              onClick={() => setCanvasPage((prev) => prev + 1)}
              disabled={canvasPage === canvasList.length}
            >
              {">"}
            </Button>
          </PaginationWrapper>
        )}
      </CanvasContainer>
      {showFigureModal && (
        <FigureModal
          show={showFigureModal}
          setShow={setShowFigureModal}
          figuresList={figuresList}
          setFiguresList={setFiguresList}
        />
      )}
      {showAddCanvasModal && (
        <AddCanvasModal
          show={showAddCanvasModal}
          setShow={setShowAddCanvasModal}
          canvasList={canvasList}
          setCanvasList={setCanvasList}
          setCanvasPage={setCanvasPage}
        />
      )}
      {showSetCanvasModal && (
        <SetCanvasModal
          show={showSetCanvasModal}
          setShow={setShowSetCanvasModal}
          canvasList={canvasList}
          setCanvasList={setCanvasList}
          canvasPage={canvasPage}
        />
      )}
    </>
  );
};

export default Canvas;
