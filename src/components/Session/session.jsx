import React from "react";
import { ListGroup, ListGroupItem, Card, Button, Container } from "react-bootstrap";
import "./session.css";

function DisplaySession(props) {
    return (
        <Container className="p-5 my-5 bg-light rounded">
            <h1>{props.params.title}</h1>
            <Card.Img variant="top" src={props.params.img} id="img-props-card" />
            <p>{props.params.speaker}</p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Container>
    );
}

export default DisplaySession;
