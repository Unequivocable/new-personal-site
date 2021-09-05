import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const BGame = () => {
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(true);
  const [button3, setButton3] = useState(true);

  const clickChange1 = () => {
    setButton1(false);
  };

  const clickChange2 = () => {
    setButton2(false);
  };
  const clickChange3 = () => {
    setButton3(false);
  };

  const reset = () => {
    setButton1(true);
    setButton2(true);
    setButton3(true);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="auto">
      {button1 && (
        <img src="/photos/papa.png" alt="papa" onClick={clickChange1} width="150px"/>
      )}<br/>
      {button2 && (
        <img src="/photos/mama.png" alt="mama" onClick={clickChange2} width="150px"/>
      )}<br/>
      {button3 && (
        <img src="/photos/bohdan.png" alt="bohdan" onClick={clickChange3} width="150px" />
      )}<br/>
      <p onClick={reset}>Reset</p>
      </Col>
      </Row>
    </Container>
  );
};

export default BGame;
