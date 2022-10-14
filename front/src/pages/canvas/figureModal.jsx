import { useState } from "react";
import { Form } from "react-bootstrap";

import ModalComp from "../../components/modal";
import Button from "../../components/button";
import { PushRight } from "./canvas.style";

const FigureModal = ({ show, setShow, figures, setFigures }) => {
  const [figure, setFigure] = useState("");
  const [width, setWidth] = useState("50");
  const [height, setHeight] = useState("50");
  const [color, setColor] = useState("#ff0000");

  const submitHandler = (evt) => {
    evt.preventDefault();
    setShow(false);
    const prev = figures;
    setFigures([
      ...prev,
      {
        id: `${figures.length + 1}`,
        width,
        height,
        color,
        figure,
      },
    ]);
  };

  return (
    <ModalComp
      show={show}
      setShow={setShow}
      title="Draw a Figure"
      main={
        <Form onSubmit={submitHandler}>
          <Form.Label>Choose figure</Form.Label>
          <Form.Control
            as="select"
            multiple
            onChange={(evt) => setFigure(evt.target.value)}
          >
            <option value="Rectangular">Rectangular</option>
            <option value="Circle">Circle</option>
          </Form.Control>
          <br />
          <Form.Label>Choose color</Form.Label>
          <Form.Control
            type="color"
            defaultValue="#ff0000"
            onChange={(evt) => setColor(evt.target.value)}
          />
          <br />
          <Form.Label>Input width</Form.Label>
          <Form.Control
            type="number"
            placeholder="the unit is pixel"
            autoComplete="off"
            value={width}
            onChange={(evt) => setWidth(evt.target.value)}
          />
          <br />
          <Form.Label>Input height</Form.Label>
          <Form.Control
            type="number"
            placeholder="the unit is pixel"
            autoComplete="off"
            value={height}
            onChange={(evt) => setHeight(evt.target.value)}
          />
          <br />
          <PushRight>
            <Button type="submit">Draw it</Button>
          </PushRight>
        </Form>
      }
    />
  );
};

export default FigureModal;
