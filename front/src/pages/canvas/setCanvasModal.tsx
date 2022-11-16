import React, {
  useState,
  useEffect,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { Form } from "react-bootstrap";

import ModalComp from "@/components/modal";
import Button from "@/components/button";
import { PushRight } from "./canvas.style";
import { ICanvas } from "./canvas.interface";

interface CanvasModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  canvasList: ICanvas[];
  setCanvasList: Dispatch<SetStateAction<ICanvas[]>>;
  canvasPage: number;
}

const SetCanvasModal = ({
  show,
  setShow,
  canvasList,
  setCanvasList,
  canvasPage,
}: CanvasModalProps) => {
  const [name, setName] = useState<string>(canvasList[canvasPage - 1].name);
  const [width, setWidth] = useState<number>(canvasList[canvasPage - 1].width);
  const [height, setHeight] = useState<number>(
    canvasList[canvasPage - 1].height,
  );
  const [validated, setValidated] = useState<boolean>(false);
  const { figures } = canvasList[canvasPage - 1];

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    const form = evt.currentTarget;
    if (form.checkValidity() === false) {
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      setShow(false);
      canvasList.splice(canvasPage - 1, 1, {
        name,
        width,
        height,
        figures,
      });
      const prev = canvasList;
      setCanvasList([...prev]);
    }
    setValidated(true);
    evt.preventDefault();
    evt.stopPropagation();
  };

  useEffect(() => {
    if (width > 800) {
      setWidth(800);
    }

    if (height > 800) {
      setHeight(800);
    }
  }, [width, height]);

  return (
    <ModalComp
      show={show}
      setShow={setShow}
      title="Set this canvas"
      main={
        <Form validated={validated} onSubmit={submitHandler}>
          <Form.Label>Name your canvas</Form.Label>
          <Form.Control
            type="string"
            placeholder="Set your canvas name"
            autoComplete="off"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
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
            <Button type="submit">Set it</Button>
          </PushRight>
        </Form>
      }
    />
  );
};

export default SetCanvasModal;
