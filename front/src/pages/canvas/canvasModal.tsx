import React, { useState, FormEvent, Dispatch, SetStateAction } from "react";
import { Form } from "react-bootstrap";

import ModalComp from "@/components/modal";
import Button from "@/components/button";
import { PushRight } from "./canvas.style";
import { ICanvas } from "./canvas.interface";

interface CanvasModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  setCanvas: Dispatch<SetStateAction<ICanvas>>;
}

const CanvasModal = ({ show, setShow, setCanvas }: CanvasModalProps) => {
  const [name, setName] = useState<string>("Canvas");
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(500);

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setShow(false);
    setCanvas({
      name,
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
          <Form.Label>Input Name</Form.Label>
          <Form.Control
            type="string"
            placeholder="Set your canvas name"
            autoComplete="off"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
          <br />
          <Form.Label>Input width</Form.Label>
          <Form.Control
            type="number"
            placeholder="the unit is pixel"
            autoComplete="off"
            value={width}
            onChange={(evt) => setWidth(+evt.target.value)}
          />
          <br />
          <Form.Label>Input height</Form.Label>
          <Form.Control
            type="number"
            placeholder="the unit is pixel"
            autoComplete="off"
            value={height}
            onChange={(evt) => setHeight(+evt.target.value)}
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
