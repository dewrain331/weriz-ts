import { useEffect, useRef, useState } from "react";
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

  const changeMode = () => {
    if (mode === "read") {
      alert("The mode is edit now.");
      setMode("edit");
    } else if (mode === "edit") {
      alert("The mode is read now.");
      setMode("read");
    }
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
            <Button onClick={() => setShowFigureModal(true)}>
              Draw a figure
            </Button>
          </ButtonWrapper>
          <CanvasWrapper>
            <Drawer />
          </CanvasWrapper>
        </Contents>
      </CanvasContainer>
      {showFigureModal && (
        <FigureModal show={showFigureModal} setShow={setShowFigureModal} />
      )}
    </>
  );
};

export default Canvas;
