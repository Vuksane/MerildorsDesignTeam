import React, { useState } from 'react';
import logo from 'logo.svg';
import { ButtonToolbar, Button } from 'react-bootstrap';
import 'css2.css';
import { Card, Container, Row, Col, Modal } from 'react-bootstrap';
import ExampleNavbar from 'components/Navbars/ExamplesNavbar';
import { useHistory } from "react-router-dom";
import {
  Form,
  Input,
} from "reactstrap";


require('css2.css');

function Adminpanelindex() {
  const [listaVesti, setListaVesti]=React.useState([]);
  const category=[
    "politika",
    "kultura-i-drustvo",
    "ekonomija",
    "kolumne-i-intervjui",
    "vijesti-iz-dijaspore"
  ]
  const redirectToSDB = (e) => {
    e.preventDefault()
    let opcija = e.target.category;
    let naslovvesti = e.target.naslovvesti.value;
    let textvesti = e.target.textvesti.value;


    let objekat = {
      "naslovteme": opcija,//??????????
      "naslovvesti": naslovvesti,
      "textvesti": textvesti
    }

    const requestOptions = {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objekat)
    };
    fetch('http://localhost:3030/dodajVest', requestOptions)
      .then(response => setListaVesti(listaVesti => [...listaVesti, objekat]));  
    console.log(objekat, "podaci iz forme")

  }

  return (
    <>
      <div className="section section-dark text-center" id="maxHeight" style={{height: '100vh', backgroundColor: 'white'}}>
        <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h2 id="scroll" className="text-center" style={{ color: "white" }}>Nova Vest</h2><br></br>
                <Form onSubmit={redirectToSDB} className="contact-form blurred_glass_quick_message2 blurred_glass_quick_message">
                  <Row>
                    <select>
                      <option value="" disabled selected hidden>Izaberite Temu</option>
                      {category.map((el)=><option value={el}>{el}</option>)}
                    </select>
                  </Row>
                  <Row>
                    <Col md="12">
                      <label>Naslov Vesti</label>
                        <Input placeholder="Naslov Vesti" name="naslovvesti" type="text" />
                    </Col>

                  </Row>
                  <label>Text Vesti</label>
                  <Input
                    placeholder="Text Vesti"
                    name="textvesti"
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
    </>
  );
}

export default Adminpanelindex;