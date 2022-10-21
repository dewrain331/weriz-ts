import React, { Dispatch, SetStateAction } from "react";
import { Modal } from "react-bootstrap";

import ModalPortal from "./modalPortal";

type ModalProps = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  title: string;
  main: JSX.Element;
  children: JSX.Element;
};

const ModalComp = ({ show, setShow, title, main, children }: ModalProps) => {
  return (
    <ModalPortal>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{main}</Modal.Body>
        <Modal.Footer>{children}</Modal.Footer>
      </Modal>
    </ModalPortal>
  );
};

export default ModalComp;
