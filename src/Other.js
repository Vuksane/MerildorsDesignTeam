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

//const [listaKomentara, setListaKomentara] = React.useState([]);

//let listaKomentara=[];
// Funkcija modala koji se prikazuje kao alert nakon sto korisnik klikne da posalje komentar
require('css2.css');


function Other() {
  const [listaKomentara, setListaKomentara]=React.useState([]);
  const redirectToSDB = (e) => {
    e.preventDefault()
    let username = e.target.username.value;
    let komentar = e.target.komentar.value;


    let category = {
      "username": username,
      "komentar": komentar
    }

    const requestOptions = {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(category)
    };
    fetch('http://localhost:3030/dodajKomentar', requestOptions)
      .then(response => setListaKomentara(listaKomentara => [...listaKomentara, category]));  

  }


  let styleobj = { fontSize: 45, width: 1000, marginLeft: -90 }
 
  return (
    <>
      <div className="section section-dark text-center" id="maxHeight" style={{
        backgroundImage: "url(" + require("assets/img/muzej.jpg") + ")",
      }}>
        <ExamplesNavbar />

        <Container style={{ paddingTop: 100 }}>
          <Row>
            <Col md="4">
              <div className="firstDiv bg-light" style={{ width: 1100 }}>
                <Card className="card-profile card-plain" style={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 50 }}>
                  <CardBody  >
                    <div>

                      <br />
                      <h2 className="card-category text-dark">Vest o Aleksandru Vucicu Predsjedik Srbije</h2>
                      <br />
                      <p className="card-description text-justify text-dark" style={{ fontSize: 18 }}>
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
          <Button type="button" className="btn btn-primary btn-lg">Ostavite komentar</Button>
          <div className="section landing-section sectionLandingSection" id="maxHeight" style={{ backgroundColor: "black" }} >
     
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h2 id="scroll" className="text-center" style={{ color: "white" }}>Vas komentar?</h2><br></br>
                <Form className="contact-form blurred_glass_quick_message2 blurred_glass_quick_message" onSubmit={redirectToSDB}>
                  <Row>
                    <Col md="12">
                      <label>Korisnik</label>
                      <InputGroup >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Anonymous#0001" name="username" type="text" />
                      </InputGroup>
                    </Col>

                  </Row>
                  <label>Komentar</label>
                  <Input
                    placeholder="Napisite nam sta mislite o ovoj temi..."
                    name="komentar"
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="3">
                      <Button type="submit">
                        Prosledi
                        </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>

      </div>
          <Row style={{ paddingTop: 25 }}>
            <Col md="4">

              {listaKomentara!=null && listaKomentara.map(function (item, i) {
                return <div key={i} className="firstDiv bg-light" style={{ width: 1100 }}>
                  <Card className="card-plain" style={{ paddingLeft: 25, paddingRight: 25 }}>
                    <CardBody  >
                      <div>
                        <h4 className="card-description text-justify text-dark">{item.username}</h4>
                        <p className="card-description text-justify text-dark" style={{ fontSize: 16 }}>
                          {item.komentar}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              })}
            </Col>
          </Row>

        </Container>
      </div>
    </>
  );
}

export default Other;
