import React, {
  useState,
  useEffect,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import ModalComp from "@/components/modal";
import Button from "@/components/button";
import { PushRight } from "./canvas.style";
import { IFigure } from "./canvas.interface";

interface FigureModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  figuresList: IFigure[];
  setFiguresList: Dispatch<SetStateAction<IFigure[]>>;
}

const FigureModal = ({
  show,
  setShow,
  figuresList,
  setFiguresList,
}: FigureModalProps) => {
  const [figure, setFigure] = useState<string>("");
  const [width, setWidth] = useState<number>(50);
  const [height, setHeight] = useState<number>(50);
  const [color, setColor] = useState<string>("#ff0000");
  const [validated, setValidated] = useState<boolean>(false);

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    const form = evt.currentTarget;
    if (form.checkValidity() === false) {
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      setShow(false);
      const id: string = uuidv4();
      const prev = figuresList;
      setFiguresList([
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
    }
    setValidated(true);
    evt.preventDefault();
    evt.stopPropagation();
  };

  useEffect(() => {
    if (width > 150) {
      setWidth(150);
    }

    if (height > 150) {
      setHeight(150);
    }
  }, [width, height]);

  return (
    <ModalComp
      show={show}
      setShow={setShow}
      title="Draw a figure"
      main={
        <Form validated={validated} onSubmit={submitHandler}>
          <Form.Label>Choose figure</Form.Label>
          <Form.Control
            as="select"
            multiple
            onChange={(evt) => setFigure(evt.target.value)}
            required
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
            required
          />
          <br />
          <Form.Label>Input width</Form.Label>
          <Form.Control
            type="string"
            placeholder="the unit is pixel"
            autoComplete="off"
            value={width}
            onChange={(evt) =>
              setWidth(+evt.target.value.replace(/[^0-9]/g, ""))
            }
            required
          />
          <br />
          <Form.Label>Input height</Form.Label>
          <Form.Control
            type="string"
            placeholder="the unit is pixel"
            autoComplete="off"
            value={height}
            onChange={(evt) =>
              setHeight(+evt.target.value.replace(/[^0-9]/g, ""))
            }
            required
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
