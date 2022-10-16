import { Form } from "react-bootstrap";
import { useState } from "react";
// import api from "../../api";

import { Contents, PushRight } from "./canvas.style";
import Button from "../../components/button";

const PostItem = ({ id }) => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [description, setDescription] = useState("");

  const submitItem = (evt) => {
    evt.preventDefault();
  };

  return (
    <Contents>
      <Form onSubmit={submitItem}>
        <Form.Label>Item Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
        <br />
        <Form.Label>Item Counts</Form.Label>
        <Form.Control
          type="number"
          value={count}
          onChange={(evt) => setCount(evt.target.value)}
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
          <Button type="submit">Post Item</Button>
        </PushRight>
      </Form>
    </Contents>
  );
};

export default PostItem;
