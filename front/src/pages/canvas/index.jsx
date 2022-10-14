import { useState, useRef } from "react";
import Draggable from "react-draggable";

import {
  CanvasContainer,
  Contents,
  ButtonWrapper,
  CanvasWrapper,
  Drawer,
} from "./canvas.style";
import Button from "../../components/button";
import FigureModal from "./figureModal";

const Canvas = () => {
  const [mode, setMode] = useState("read");
  const [showFigureModal, setShowFigureModal] = useState(false);
  const canvasSize = {
    width: "700",
    height: "700",
  };
  const [figures, setFigures] = useState([]);
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

  const clickHandler = () => {
    alert("Hi");
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
                figures.map((v) => (
                  <Draggable
                    nodeRef={nodeRef}
                    key={v.id}
                    bounds={{
                      left: 0,
                      top: 0,
                      right: parseInt(canvasSize.width) - parseInt(v.width),
                      bottom: parseInt(canvasSize.width) - parseInt(v.height),
                    }}
                    disabled={mode === "read"}
                  >
                    <div
                      style={{
                        width: `${v.width}px`,
                        height: `${v.height}px`,
                        border: `3px solid ${v.color}`,
                        borderRadius: v.figure === "Circle" ? "50%" : "0%",
                        position: "absolute",
                        cursor: mode === "read" ? "pointer" : "move",
                      }}
                      key={v.id}
                      ref={nodeRef}
                      onClick={mode === "read" && clickHandler}
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
