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
import DrawFigure from "./drawFigure";

const Canvas = () => {
  const [mode, setMode] = useState("read");
  const [showFigureModal, setShowFigureModal] = useState(false);
  const [figureData, setFigureData] = useState({
    figure: "",
    width: "",
    height: "",
    color: "",
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
          </ButtonWrapper>
          <CanvasWrapper>
            <Drawer>{draw && <DrawFigure figureData={figureData} />}</Drawer>
          </CanvasWrapper>
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
    </>
  );
};

export default Canvas;
