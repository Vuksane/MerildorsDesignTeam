
import React, { Component, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    NavLink,
    NavItem,
    Container,
    Row,
    Col,
    Form,
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


require('css2.css');

function Other() {


    let styleobj = { fontSize: 45, width: 1000, marginLeft: -90 }

    return (
        <>
            <div className="section section-dark text-center" id="maxHeight" style={{
                backgroundImage: "url(" + require("assets/img/muzej.jpg") + ")",
            }}>
                <ExamplesNavbar />

                <Container style={{ paddingTop: 70 }}>
                    
                        <div className="title-brand">
                            <h1 className="presentation-title2">Politika</h1>
                        </div>
                        <Row>
                            <Col md="4">
                                <div className="firstDiv" style={{ width: 1100 }}>
                                    <Card className="card-profile card-plain" style={{ paddingLeft: 25, paddingRight: 25 }}>
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
                                                <NavLink to="/Politika" tag={Link}>
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
                                                </NavLink>
                                            </div>
                                        </CardBody>

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
        </>
    );
}

export default Other;
