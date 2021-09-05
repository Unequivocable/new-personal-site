import React from "react";
import { Row, Col, Nav, Tab, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import data from "../database/portfolio";
import Header from "../sub-components/Header";

const Home = () => {
  return (
    <>
    <Container fluid>
    <Row className="justify-content-center">
    <Col xs="auto">
      <Header />
    </Col>
  </Row>
  </Container>
    <main>
      <section>
        <article>
          <p>This site will always be a work in progress!</p>
          <p>This is my portfolio of different projects I've been working on.  Now hosted via Firebase.</p>
          <p><a href="https://github.com/Unequivocable/"><i className="fa fa-github fa-2x" aria-hidden="true"></i>My GitHub</a></p>
          <p><a href="https://www.linkedin.com/in/dustin-siggelkow/"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i> My LinkedIn</a></p>
        </article>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="justify-content-center" xs={2}>
            <Col>
              <Nav variant="pills">
                {data.map((entry) => (
                  <Nav.Item key={entry.eventkey}>
                    <Nav.Link eventKey={entry.eventkey}>
                      {entry.tabname}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <Tab.Content>
                {data.map((entry) => (
                  <Tab.Pane eventKey={entry.eventkey} key={entry.eventkey} className={entry.className}>
                    <p>{entry.panetext}</p>
                    <NavLink to={entry.location}>Go to {entry.tabname}</NavLink>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        {/* <Container fluid>
          <Row className="justify-content-center">
            <Row className="justify-content-sm-center, justify-content-md-center, justify-content-lg-center">
              {data.map((entry) => (
                <Col
                  sm={entry.sm}
                  md={entry.md}
                  lg={entry.lg}
                  className="buffer"
                >
                  <DesignPortfolio
                    bordercolor={entry.bordercolor}
                    color={entry.color}
                    title={entry.title}
                    text={entry.text}
                    alt={entry.alt}
                  />
                </Col>
              ))}
            </Row>
          </Row>
        </Container> */}
      </section>
    </main>
    </>
  );
};

export default Home;
