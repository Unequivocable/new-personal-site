import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs="8" md="6">
            <main>
              <section key="a">
                  <article>
                    This site is still a bit broken on mobile. I'm currently
                    working on the responsiveness and it should be looking
                    better in the next few weeks.
                  </article>
                <article>
                  This is the home page of my web development site I am building
                  as part of the Full Stack Web Development Certificate program
                  at York University. It currently contains my resume, a contact
                  form, and a demostration of what I am learning to build in the
                  Portfolio section.
                </article>
                <article>
                  <h2>Future Updates</h2>
                  <ul className="homeList">
                    <li>
                      Reorganize and expand components: My internal organization
                      of what is a component and what isn't needs some work. The
                      Nav component should be able to be reworked so it could be
                      at the App level but to do that I need to add more states
                      to show which is the active page.
                    </li>
                    <li>Replace alert error handling with modal window.</li>
                    <li>
                      Centralize error handling within the app. Right now each
                      component that could cause an error handles it locally.
                    </li>
                    <li>
                      Revamp graphical style and grid structure. Along with that
                      my .css file is currently a disaster and could be
                      streamlined.
                    </li>
                    <li>Add and improve responsiveness.</li>
                    <li>
                      Multiple enhancements that will require backend changes:
                      View Users, Remove Users, Remove Entries, return username
                      for login to provide "hello, username" on front page.
                    </li>
                  </ul>
                </article>
                <article>
                  <h2>History</h2>
                  <h3>Update 11:</h3>
                  Created separate components for resume updates and portfolio
                  postings. Both pulling from the backend db and are updatable
                  from the front-end if logged in as Admin user.
                  <h3>Update 10:</h3>
                  Added MySQL db to backend. Setup User Authorizations and
                  Contact Form Entries in DB.
                  <h3>Update 9:</h3>
                  <p>
                    Site is fully working now. I finally fixed the portfolio
                    links and images and setup a link to the old site. I was
                    tired of the old site design so I quickly swapped it out for
                    this dark-mode old terminal look that was simple to setup
                    and generally looks better than the old design did. At some
                    point I need to rebuild the grid system and reposition
                    everything.
                  </p>
                  <h3>Update 8:</h3>
                  <p>
                    I added error and success messages to all the functionality
                    that accesses the backend. I was going to look into putting
                    it in a modal but that was getting to be more work than I
                    had time for, so I've opted for just using alert() for the
                    time being.
                  </p>
                  <h3>Update 7:</h3>
                  <p>
                    Based on the login status I now have the ability to add a
                    new user and view entries also working and accessible only
                    if you're logged in. This uses a stored JWT token that you
                    get during login and I store in a state. There is a bit of a
                    conundrum around adding new users. This needs to be a
                    protected area or else it's not really secure, but if it's
                    fully hidden and only accessible via login, how does one get
                    to that place to add new users? I worked around this by
                    adding a default admin users on the backend so there's
                    always a starting place.
                  </p>
                  <h3>Update 6:</h3>
                  <p>
                    I added Login/Logout capability using React Hooks and React
                    Context. I'm starting to get more comfortable with React
                    States. My backend functionality is also working great. I
                    haven't had to do any revisions to it and things keep
                    working.
                  </p>
                  <h3>Update 5:</h3>
                  <p>
                    I connected my backend node.js application to the React
                    site. I started with basic Contact Us form submission and I
                    was able to send the form details and save it on the
                    backend! My only difficulty there was getting around CORS as
                    I'm running both front and backend locally. Was finally able
                    to get around it using a proxy port on the frontend.
                  </p>
                  <h3>Update 4:</h3>
                  <p>
                    I migrated the entire website to React! Initially I just did
                    a one-for-one move of each old HTML page to a single React
                    Component. I connected them all using the React Router and
                    had basic functionality that mirrored what was in the
                    original site. However, JS colour-swapping was broken (but
                    it was written in really poor JS so that's probably just as
                    well). Also broken was the old portfolio links and images.
                    It would take some poking around to figure those out.
                  </p>
                  <h3>Update 3:</h3>
                  <p>
                    I added JS validation on forms as well as a seasonal
                    colour-palatte-swapping effect. This is the version in the
                    portfolio section that you can see{" "}
                    <a href="/portfolio/old/index.html" target="_blank">
                      <u>here.</u>
                    </a>{" "}
                    This was the final form of my original site.
                  </p>
                  <h3>Update 2:</h3>
                  <p>
                    I added CSS Styles and basic forms to the original
                    framework. I started working on a simple layout.
                  </p>
                  <h3>Update 1:</h3>
                  <p>
                    I set the original HTML-only site with four pages and no JS
                    or CSS.
                  </p>
                </article>
              </section>
            </main>
          </Col>
        </Row>
      </Container>
  );
};

export default Home;
