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
  setCanvasPage: Dispatch<SetStateAction<number>>;
}

const AddCanvasModal = ({
  show,
  setShow,
  canvasList,
  setCanvasList,
  setCanvasPage,
}: CanvasModalProps) => {
  const [name, setName] = useState<string>("Canvas");
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(500);
  const [validated, setValidated] = useState<boolean>(false);

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    const form = evt.currentTarget;
    if (form.checkValidity() === false) {
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      setShow(false);
      const prev = canvasList;
      setCanvasList([
        ...prev,
        {
          name,
          width,
          height,
          figures: [],
        },
      ]);
      setCanvasPage(canvasList.length + 1);
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
      title="Add a canvas"
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
            <Button type="submit">Add it</Button>
          </PushRight>
        </Form>
      }
    />
  );
};

export default AddCanvasModal;
