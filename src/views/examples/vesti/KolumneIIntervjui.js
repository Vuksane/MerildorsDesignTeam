import React, { useState } from 'react';
import logo from 'logo.svg';
import { ButtonToolbar, Button } from 'react-bootstrap';
import 'css2.css';
import { Card, Container, Row, Col, Modal } from 'react-bootstrap';
import ExampleNavbar from '../../../components/Navbars/ExamplesNavbar';
import { Link } from "react-router-dom";
import {
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  NavItem,
  NavLink,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";
// Klasa Politika
export default function KolumneIIntervjui(props) {

  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  let test2 = (e) => {
    const bilosta = document.getElementById("scroll")
    bilosta.scrollIntoView()
  }
  return (
    <>
      <ExampleNavbar />
      <div className="main">
        <div className="section section-dark text-center" style={{
          backgroundImage: "url(" + require("assets/img/bridge.jpg") + ")",
          backgroundSize: 'cover',
          overflow: 'hidden',
        }}>

          <Container>
            <br /><br />
            <br /><br />
            <br /><br />
            <Row>
                <Col md="4">
                  <div className="firstDiv" >
                    <Card className="card-profile card-plain" style={{ paddingLeft: 25, paddingRight: 25 }}>
                      <div className="card-avatar" >
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                          />
                        </a>
                      </div>
                      <NavLink to="/Other" tag={Link}>
                      <CardBody >
                        <div>

                          <br />
                          <CardTitle tag="h4">Aleksandar Vucic</CardTitle>
                          <h6 className="card-category">Predsjedik Srbije</h6>
                          <br />
                          <p className="card-description text-justify">
                            Danas je Aleksandar Vucic izasao medju narod i obratio se sa informacijom o statusu u drzavi.
                            Oporezivanje javnih preduzeca kao i freelance kompanija ce se nastaviti oporezivati do daljenjeg.
                            Iako su se mnogi protivili toj odluci, hteli ili ne morali su da prihvate tu odluku. |
                            Porez za freelancere iznosice 50% od ukupne sume. Sto se ostalih preduzeca tice iznosice 28%.
                            Do daljnjeg ce ova odluka biti na snazi.
                        </p>
                      </div>
                    </CardBody>
                    </NavLink>

                    <CardFooter className="text-center">
                      <Button
                        className="btn-just-icon btn-neutral"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-twitter" />
                      </Button>
                      <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-google-plus" />
                      </Button>
                      <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );

}
