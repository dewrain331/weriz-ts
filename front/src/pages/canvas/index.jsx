import { useState } from "react";

import {
  CanvasContainer,
  Contents,
  ButtonWrapper,
  CanvasWrapper,
  Drawer,
} from "./canvas.style";
import Button from "../../components/button";
import FigureModal from "./figureModal";
import CanvasModal from "./canvasModal";
import DrawFigure from "./drawFigure";

const Canvas = () => {
  const [mode, setMode] = useState("read");
  const [showFigureModal, setShowFigureModal] = useState(false);
  const [showCanvasModal, setShowCanvasModal] = useState(false);
  const [figureData, setFigureData] = useState({
    figure: "",
    width: "",
    height: "",
    color: "",
  });
  const [canvasSize, setCanvasSize] = useState({
    width: "300",
    height: "300",
  });
  const [draw, setDraw] = useState(false);

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
            <Button onClick={() => setShowCanvasModal(true)}>
              Set the canvas
            </Button>
          </ButtonWrapper>
          <CanvasWrapper>
            <Drawer
              id="drawer"
              width={`${canvasSize.width}px`}
              height={`${canvasSize.height}px`}
            >
              {draw && (
                <DrawFigure figureData={figureData} canvasSize={canvasSize} />
              )}
            </Drawer>
          </CanvasWrapper>
          Canvas is {canvasSize.width}px * {canvasSize.height}px now.
        </Contents>
      </CanvasContainer>
      {showFigureModal && (
        <FigureModal
          show={showFigureModal}
          setShow={setShowFigureModal}
          setFigureData={setFigureData}
          setDraw={setDraw}
        />
      )}
      {showCanvasModal && (
        <CanvasModal
          show={showCanvasModal}
          setShow={setShowCanvasModal}
          setCanvasSize={setCanvasSize}
        />
      )}
    </>
  );
};

export default Canvas;
