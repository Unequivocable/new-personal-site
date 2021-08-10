import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./main-components/Home";
import Error from "./main-components/Error";
import About from "./main-components/About";
import Scroll from "./main-components/portfolio/Scroll";

const App = () => {
  return (
    <Container fluid>
      <HashRouter>
        <Row className="justify-content-center">
          <Col xs="10" sm="8" md="8" lg="6">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/scroll" component={Scroll} />
              <Route component={Error} />
            </Switch>
          </Col>
        </Row>
      </HashRouter>
    </Container>
  );
};

export default App;
