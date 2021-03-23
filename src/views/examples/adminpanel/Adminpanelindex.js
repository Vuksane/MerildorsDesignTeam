import React, { useState } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import 'css2.css';
import { Card, Container, Row, Col, Modal } from 'react-bootstrap';
import ExampleNavbar from 'components/Navbars/ExamplesNavbar';
import { useHistory } from "react-router-dom";
import moment from 'moment';
import {
  Form,
  Input,
} from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

require('css2.css');

function Adminpanelindex() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  const [listaVesti, setListaVesti]=useState([]);
  const category=[
    "politika",
    "kultura-i-drustvo",
    "ekonomija",
    "kolumne-i-intervjui",
    "vijesti-iz-dijaspore"
  ]
  const redirectToSDB = (e) => {
    e.preventDefault()
    let naslovteme = e.target.naslovteme.value;
    let naslovvesti = e.target.naslovvesti.value;
    let textvesti = e.target.textvesti.value;
    let date = new Date();
    let datumvesti = moment(date).format('YYYY-MM-DD HH:mm:ss');

    let objekat = {
      "naslovTeme": naslovteme,
      "naslovVesti": naslovvesti,
      "textVesti": textvesti,
      "datumVesti": datumvesti,
    }

    const requestOptions = {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objekat)
    };
    fetch('http://localhost:3030/dodajVest', requestOptions)
      .then(response => setListaVesti(listaVesti => [...listaVesti, objekat]));  
    console.log(objekat)
  }
  console.log(listaVesti, "podaci sa baze")
  return (
    <>
    <ExamplesNavbar />
      <div className="section section-dark text-center" id="maxHeight" style={{height: '100vh', backgroundColor: 'black'}}>
        <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h2 id="scroll" className="text-center" style={{ color: "white" }}>Nova Vest</h2><br></br>
                <Form onSubmit={redirectToSDB} className="contact-form blurred_glass_quick_message2 blurred_glass_quick_message">
                  <Row>
                  <Col md="12">
                    <select name="naslovteme">
                      <option value="" disabled selected hidden>Izaberite Temu</option>
                      {category.map((el)=><option value={el}>{el}</option>)}
                    </select>
                    </Col>
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
      <Row style={{ paddingTop: 25 }}>
            <Col md="4">

              {listaVesti!=null && listaVesti.map(function (item, i) {
                return <div key={i} className="firstDiv bg-light" style={{ width: 1100 }}>
                  
               
                      <div>
                        <h4 className="card-description text-justify text-dark">{item.naslovvesti}</h4>
                        <p className="card-description text-justify text-dark" style={{ fontSize: 16 }}>
                          {item.vest}
                        </p>
                      </div>
                  

                </div>
              })}
            </Col>
          </Row>
    </>
  );
}

export default Adminpanelindex;