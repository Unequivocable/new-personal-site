import React from "react";
import { Row, Col, Nav, Tab } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import data from "../database/portfolio";

const Home = () => {
  return (
    <main>
      <section>
        <article>
          <p>I'm currently rewriting the entire site, that's why it's several kinds
          of broken now.</p>
          <p>This is my portfolio of different projects I've been working on.</p>
        </article>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="justify-content-center" xs={2}>
            <Col>
              <Nav variant="pills">
                {data.map((entry) => (
                  <Nav.Item>
                    <Nav.Link eventKey={entry.eventkey}>
                      {entry.tabname}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col xs="auto">
              <Tab.Content>
                {data.map((entry) => (
                  <Tab.Pane eventKey={entry.eventkey}>
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
  );
};

export default Home;
