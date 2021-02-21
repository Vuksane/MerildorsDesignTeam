import React, { useState } from 'react';
import logo from './logo.svg';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './css2.css';
import { Card, Container, Row, Col, Modal } from 'react-bootstrap';
import ExampleNavbar from './components/Navbars/ExamplesNavbar';
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

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { max } from 'moment';

// Funkcija modala koji se prikazuje kao alert nakon sto korisnik klikne da posalje komentar
function MyVerticallyCenteredModal(props) {
    return (

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ backgroundImage: "url(" + require("assets/img/bridge5.jpg") + ")" }} 
      > <div className="section landing-section sectionLandingSection" id="maxHeight" style={{ backgroundColor: "black" }} >
          <Modal.Body>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="12">
                  <h2 id="scroll" className="text-center" style={{ color: "white" }}>Vas komentar?</h2><br></br>
                  <Form className="contact-form blurred_glass_quick_message2 blurred_glass_quick_message" >
                    <Row>
                      <Col md="12">
                        <label>Korisnik</label>
                        <InputGroup >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Anonymous#0001" type="text" />
                        </InputGroup>
                      </Col>
                     
                    </Row>
                    <label>Komentar</label>
                    <Input
                      placeholder="Napisite nam sta mislite o ovoj temi..."
                      type="textarea"
                      rows="4"
                    />
                    <Row>
                      <Col className="ml-auto mr-auto" md="3">
                        <NavLink to="/" tag={Link}>
                        <Button>
                        Prosledi   
                        </Button>
                        </NavLink> 
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>

          </Modal.Body></div>
      </Modal>
    );
  }
  

require('css2.css');

function Other() {


    let styleobj = { fontSize: 45, width: 1000, marginLeft: -90 }
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <div className="section section-dark text-center" id="maxHeight" style={{
                backgroundImage: "url(" + require("assets/img/muzej.jpg") + ")",
            }}>
                <ExamplesNavbar />

                <Container style={{ paddingTop: 100 }}>
                        <Row>
                            <Col md="4">
                                <div className="firstDiv" style={{ width: 1100 }}>
                                    <Card className="card-profile card-plain" style={{ paddingLeft: 25, paddingRight: 25, paddingBottom: 25 }}>
                                        <div className="card-avatar" >
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                                                />
                                            </a>
                                        </div>

                                        <CardBody  >
                                            <div>
                                                
                                                    <br />
                                                    <CardTitle tag="h4" className="card-category">Aleksandar Vucic</CardTitle>
                                                    <h6 className="card-category">Predsjedik Srbije</h6>
                                                    <br />
                                                    <p className="card-description text-justify">
                                                        Danas je Aleksandar Vucic izasao medju narod i obratio se sa informacijom o statusu u drzavi.
                                                        Oporezivanje javnih preduzeca kao i freelance kompanija ce se nastaviti oporezivati do daljenjeg.
                                                        Iako su se mnogi protivili toj odluci, hteli ili ne morali su da prihvate tu odluku. |
                                                        Porez za freelancere iznosice 50% od ukupne sume. Sto se ostalih preduzeca tice iznosice 28%.
                                                        Do daljnjeg ce ova odluka biti na snazi. Danas je Aleksandar Vucic izasao medju narod i obratio se sa informacijom o statusu u drzavi.
                                                        Oporezivanje javnih preduzeca kao i freelance kompanija ce se nastaviti oporezivati do daljenjeg.
                                                        Iako su se mnogi protivili toj odluci, hteli ili ne morali su da prihvate tu odluku. |
                                                        Porez za freelancere iznosice 50% od ukupne sume. Sto se ostalih preduzeca tice iznosice 28%.
                                                        Do daljnjeg ce ova odluka biti na snazi. Danas je Aleksandar Vucic izasao medju narod i obratio se sa informacijom o statusu u drzavi.
                                                        Oporezivanje javnih preduzeca kao i freelance kompanija ce se nastaviti oporezivati do daljenjeg.
                                                        Iako su se mnogi protivili toj odluci, hteli ili ne morali su da prihvate tu odluku. |
                                                        Porez za freelancere iznosice 50% od ukupne sume. Sto se ostalih preduzeca tice iznosice 28%.
                                                        Do daljnjeg ce ova odluka biti na snazi. Danas je Aleksandar Vucic izasao medju narod i obratio se sa informacijom o statusu u drzavi.
                                                        Oporezivanje javnih preduzeca kao i freelance kompanija ce se nastaviti oporezivati do daljenjeg.
                                                        Iako su se mnogi protivili toj odluci, hteli ili ne morali su da prihvate tu odluku. |
                                                        Porez za freelancere iznosice 50% od ukupne sume. Sto se ostalih preduzeca tice iznosice 28%.
                                                        Do daljnjeg ce ova odluka biti na snazi.
                        </p>
                                            
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                        <Button variant="primary" onClick={() => setModalShow(true)}>Ostavite komentar</Button>
                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        <Row style={{ paddingTop: 25 }}>
                            <Col md="4">
                                <div className="firstDiv" style={{ width: 1100 }}>
                                    <Card className="card-plain" style={{ paddingLeft: 25, paddingRight: 25 }}>
                                        <CardBody  >
                                            <div>
                                                <p tag="h4" className="card-description text-justify">Anonymous#0001</p>
                                                <p className="card-description text-justify">
                                                    Prvi komentar na portalu u vezi vesti sa Aleksandrom Vucicem 
                                                </p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="firstDiv" style={{ width: 1100 }}>
                                    <Card className="card-plain" style={{ paddingLeft: 25, paddingRight: 25 }}>
                                        <CardBody  >
                                            <div>
                                                <p tag="h4" className="card-description text-justify">Anonymous#0002</p>
                                                <p className="card-description text-justify">
                                                    Drugi komentar na portalu u vezi vesti sa Aleksandrom Vucicem 
                                                </p>
                                            
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                        
              </Container>
        </div>
        </>
    );
}

export default Other;
