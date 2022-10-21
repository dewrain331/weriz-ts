import React, { useState, FormEvent, Dispatch, SetStateAction } from "react";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import ModalComp from "@/components/modal";
import Button from "@/components/button";
import { PushRight } from "./canvas.style";
import { IFigure } from "./canvas.interface";

interface FigureModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  figures: IFigure[];
  setFigures: Dispatch<SetStateAction<IFigure[]>>;
}

const FigureModal = ({
  show,
  setShow,
  figures,
  setFigures,
}: FigureModalProps) => {
  const [figure, setFigure] = useState<string>("");
  const [width, setWidth] = useState<number>(50);
  const [height, setHeight] = useState<number>(50);
  const [color, setColor] = useState<string>("#ff0000");

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setShow(false);
    const id: string = uuidv4();
    const prev = figures;
    setFigures([
      ...prev,
      {
        id,
        width,
        height,
        color,
        figure,
        xPos: 0,
        yPos: 0,
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
            <Button type="submit">Draw it</Button>
          </PushRight>
        </Form>
      }
    />
  );
};

export default FigureModal;
