import { useState } from "react";
import { Form } from "react-bootstrap";

import ModalComp from "../../components/modal";
import Button from "../../components/button";
import { PushRight } from "./canvas.style";

const CanvasModal = ({ show, setShow, setCanvasSize }) => {
  const [width, setWidth] = useState("300");
  const [height, setHeight] = useState("300");

  const submitHandler = (evt) => {
    evt.preventDefault();
    setShow(false);
    setCanvasSize({
      width,
      height,
    });
  };

  return (
    <ModalComp
      show={show}
      setShow={setShow}
      title="Draw a Figure"
      main={
        <Form onSubmit={submitHandler}>
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
            <Button type="submit">Set it</Button>
          </PushRight>
        </Form>
      }
    />
  );
};

export default CanvasModal;
