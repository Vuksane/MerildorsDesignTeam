import React from 'react';
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  NavLink,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

require('css2.css');

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (<>
    <ExamplesNavbar />
    <LandingPageHeader />
      <div className="main">
        <div className="section section-dark text-center" style={{
          backgroundImage: "url(" + require("assets/img/plavidvoraccetinje.jpg") + ")",
          backgroundSize: 'cover',
          overflow: 'hidden',
          margin: 50,
          border: '10px solid #CDCDCD',
        }}>
          <Container style={{ paddingTop: 70 }}>
            <div className="title-brand">
              <h1 className="presentation-title2">Politika</h1>
            </div>
            <Row>
              <Col md="4">
                <div className="firstDiv" >
                  <Card className="card-profile card-plain" style={{ paddingLeft: 25, paddingRight: 25 }}>
                    <div className="card-avatar" >
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img alt="..." src={require("assets/img/faces/clem-onojeghuo-2.jpg")} />
                      </a>
                    </div>
                    <NavLink to="/Vest" tag={Link}>
                      <CardBody >
                        <div>
                          <CardTitle tag="h4">Aleksandar Vucic</CardTitle>
                          <h6 className="card-category"></h6>
                          <p className="card-description text-justify"></p>
                      </div>
                    </CardBody>
                    </NavLink>
                    <CardFooter className="text-center">
                      <Button className="btn-just-icon btn-neutral" color="link" href="#pablo" onClick={e => e.preventDefault()}><i className="fa fa-twitter" /></Button>
                      <Button className="btn-just-icon btn-neutral ml-1" color="link" href="#pablo" onClick={e => e.preventDefault()}><i className="fa fa-google-plus" /></Button>
                      <Button className="btn-just-icon btn-neutral ml-1" color="link" href="#pablo" onClick={e => e.preventDefault()}><i className="fa fa-linkedin" /></Button>
                    </CardFooter>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center" style={{
          backgroundImage: "url(" + require("assets/img/muzej.jpg") + ")",
          backgroundSize: 'cover',
          overflow: 'hidden',
          margin: 50,
          border: '10px solid #CDCDCD',
        }}>

          <Container style={{ paddingTop: 100 }}>
            <h1 className="title">Kultura i drustvo</h1>
            <Row>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center" style={{
          backgroundImage: "url(" + require("assets/img/manastir.jpg") + ")",
          backgroundSize: 'cover',
          overflow: 'hidden',
          margin: 50,
          border: '10px solid #CDCDCD',
        }}>
          <Container style={{ paddingTop: 100 }}>
            <div className="title-brand">
              <h1 className="presentation-title2">Ekonomija</h1>
            </div>
            <Row>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center" style={{
          backgroundImage: "url(" + require("assets/img/plavidvoraccetinje.jpg") + ")",
          backgroundSize: 'cover',
          overflow: 'hidden',
          margin: 50,
          border: '10px solid #CDCDCD',
        }}>

          <Container style={{ paddingTop: 100 }}>
            <div className="title-brand">
              <h1 className="presentation-title2">Kolumne i Intervjui</h1>
            </div>
            <Row>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center" style={{
          backgroundImage: "url(" + require("assets/img/plavidvoraccetinje.jpg") + ")",
          backgroundSize: 'cover',
          overflow: 'hidden',
          margin: 50,
          border: '10px solid #CDCDCD',
        }}>

          <Container style={{ paddingTop: 100 }}>
            <div className="title-brand">
              <h1 className="presentation-title2">Vijesti iz dijaspore</h1>
            </div>
            <Row>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
