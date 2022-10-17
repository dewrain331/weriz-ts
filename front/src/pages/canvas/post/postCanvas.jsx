import { Form } from "react-bootstrap";
import { useState } from "react";
// import api from "../../api";

import { Contents, PushRight } from "../canvas.style";
import Button from "../../../components/button";

const PostCanvas = ({ id }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submitCanvas = (evt) => {
    evt.preventDefault();
  };

  return (
    <Contents>
      <Form onSubmit={submitCanvas}>
        <Form.Label>Place Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
        <br />
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
        />
        <br />
        <PushRight>
          <Button type="submit">Save Canvas</Button>
        </PushRight>
      </Form>
    </Contents>
  );
};

export default PostCanvas;
