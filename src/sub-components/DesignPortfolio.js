import React from "react";
import { Card } from "react-bootstrap";

const DesignPortfolio = (props) => {
  return (
    <Card bg={props.color} border={props.bordercolor} style={{ width: "100%" }}>
      {/* {props.title ? (
        <Card.Header>
          <h2 className="center">{props.title}</h2>
        </Card.Header>
      ) : null} */}
      <Card.Body>
        {/* <Card.Img variant="top" src={props.src} alt={props.alt} /> */}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <br />
          <p>{props.text}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DesignPortfolio;
