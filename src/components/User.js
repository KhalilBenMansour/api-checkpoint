import React from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const User = ({ user }) => {
  return (
    <Col className="mb-2 ">
      <Card style={{ width: "18rem", backgroundColor: "grey" }}>
        <Card.Body className="d-flex justify-content-center">
          <Card.Title as="h1">{user.id}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{user.name}</ListGroupItem>
          <ListGroupItem>{user.email}</ListGroupItem>
          <ListGroupItem>{user.phone}</ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default User;
