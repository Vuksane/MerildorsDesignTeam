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
  // Funkcija modala koji se prikazuje kao alert nakon sto korisnik klikne da posalje komentar
  function MyVerticallyCenteredModal(props) {
    return (
     
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        > <div className="section landing-section sectionLandingSection" style={{
        backgroundImage: "url(" + require("assets/img/laptop.jpg") + ")"
      }} >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 id="scroll" className="text-center" style={{ color: "white" }}>Ostavite komentar</h2><br></br>
                  <Form className="contact-form blurred_glass_quick_message2 blurred_glass_quick_message" >
                    <Row>
                      <Col md="6">
                        <label>Name</label>
                        <InputGroup >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Name" type="text" />
                        </InputGroup>
                      </Col>
                      <Col md="6">
                        <label>Email</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="text" />
                        </InputGroup>
                      </Col>
                    </Row>
                    <label>Message</label>
                    <Input
                      placeholder="Tell us your thoughts and feelings..."
                      type="textarea"
                      rows="4"
                    />
                    <Row>
                      <Col className="ml-auto mr-auto" md="4">
                        <br></br>
                        <Button className="btn-round mr-1" style={{ color: "black" }}
                          color="neutral"
                          target="_blank"
                          outline
                        >
                          <i className="fa fa-play" />
                      Send Message
                      </Button>
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
  const [modalShow, setModalShow] = React.useState(false);
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
            <div className="title-brand">
              <h1 className="presentation-title2">Kolumne I Intervjui</h1>
            </div>
            <Row>
              <Col md="4">
                <div className="firstDiv">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar" >
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                        />
                      </a>
                    </div>

                    <CardBody >
                      <div>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <br />
                          <CardTitle tag="h4">Aleksandar Vucic</CardTitle>
                          <h6 className="card-category">Predsjedik Srbije</h6>
                          <br />
                          <p className="card-description text-center">
                            Danas je Aleksandar Vucic izasao medju narod i obratio se sa informacijom o statusu u drzavi.
                            Oporezivanje javnih preduzeca kao i freelance kompanija ce se nastaviti oporezivati do daljenjeg.
                            Iako su se mnogi protivili toj odluci, hteli ili ne morali su da prihvate tu odluku. |
                            Porez za freelancere iznosice 50% od ukupne sume. Sto se ostalih preduzeca tice iznosice 28%.
                            Do daljnjeg ce ova odluka biti na snazi.
                        </p>
                          <Button variant="primary" onClick={() => setModalShow(true)}>
                            Ostavite komentar</Button>
                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Col>
              <Col md="4">
                <div className="firstDiv">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/joe-gardner-2.jpg")}
                        />
                      </a>
                    </div>

                    <CardBody>
                      <br />
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h4">Milo Djukanovic</CardTitle>
                          <h6 className="card-category">Bivsi predsjednik Crne Gore</h6>
                          <br />
                        </div>
                      </a>

                      <p className="card-description text-center">
                        Milo Ðukanovic bice predsednik Demokratske partije socijalista (DPS)  i u narednom periodu, odluceno je na vanrednom Kongresu partije održanom danas u Podgorici.
                        Ðukanovic je bio jedini kandidat za predsednika te politicke partije.
                        Ivan Vukovic, Jevto Erakovic, Sanja Damjanovic i Abaz Dizdarevic bice potpredsednici DPS-a.
                        Na parlamentarnim izborima 30. avgusta prošle godine, DPS je nakon 30 godina otišla u opoziciju, a nova vlast raspolaže tesnom vecinom i ima 41 od 81 poslanika crnogorskog parlamenta.
                    </p>
                      <Button variant="primary" onClick={() => setModalShow(true)}>
                        Ostavite komentar</Button>
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </CardBody>
                  </Card>
                </div>

              </Col>
              <Col md="4">
                <div className="firstDiv">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/erik-lucatero-2.jpg")}
                        />
                      </a>
                    </div>

                    <br />
                    <CardBody>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h4">Milorad Dodik</CardTitle>
                          <h6 className="card-category">Predsjednik SNSD-a</h6>
                          <br />
                        </div>
                      </a>
                      <p className="card-description text-center">
                        Predsjednik Saveza nezavisnih socijaldemokrata (SNSD) i predsjedavajuci Predsjedništva Bosne i Hercegovine (BiH) Milorad Dodik zatražio je od predsjednika Stranke demokratske akcije (SDA) Bakira Izetbegovica da se izvini Srbima zbog izjave date u emisiji "Dnevnik D" Federalne televiziije (FTV).
                        Izetbegovic je gostujuci u ovoj emisiji, 21. januara i komentirajuci zašto Milorad Dodik govori o secesiji Republike Srpske (RS) naveo kako smatra da Dodik želi da "ostane upamcen kao neko ko je sacuvao duh toga.
                    </p>
                      <Button variant="primary" onClick={() => setModalShow(true)}>
                        Ostavite komentar</Button>
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </CardBody>
                  </Card>
                </div>
                <br />
              </Col>
            </Row>
          </Container>
          <Container>
            <br />
            <div className="title-brand">
            </div>
            <Row>
              <Col md="4">
                <div className="firstDiv">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar" >
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                        />
                      </a>
                    </div>

                    <CardBody >
                      <div>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <br />
                          <CardTitle tag="h4">Aleksandar Vucic</CardTitle>
                          <h6 className="card-category">Predsjedik Srbije</h6>
                          <br />
                          <p className="card-description text-center">
                            Danas je Aleksandar Vucic izasao medju narod i obratio se sa informacijom o statusu u drzavi.
                            Oporezivanje javnih preduzeca kao i freelance kompanija ce se nastaviti oporezivati do daljenjeg.
                            Iako su se mnogi protivili toj odluci, hteli ili ne morali su da prihvate tu odluku. |
                            Porez za freelancere iznosice 50% od ukupne sume. Sto se ostalih preduzeca tice iznosice 28%.
                            Do daljnjeg ce ova odluka biti na snazi.
                        </p>
                          <Button variant="primary" onClick={() => setModalShow(true)}>
                            Ostavite komentar</Button>
                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Col>
              <Col md="4">
                <div className="firstDiv">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/joe-gardner-2.jpg")}
                        />
                      </a>
                    </div>

                    <CardBody>
                      <br />
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h4">Milo Djukanovic</CardTitle>
                          <h6 className="card-category">Bivsi predsjednik Crne Gore</h6>
                          <br />
                        </div>
                      </a>

                      <p className="card-description text-center">
                        Milo Ðukanovic bice predsednik Demokratske partije socijalista (DPS)  i u narednom periodu, odluceno je na vanrednom Kongresu partije održanom danas u Podgorici.
                        Ðukanovic je bio jedini kandidat za predsednika te politicke partije.
                        Ivan Vukovic, Jevto Erakovic, Sanja Damjanovic i Abaz Dizdarevic bice potpredsednici DPS-a.
                        Na parlamentarnim izborima 30. avgusta prošle godine, DPS je nakon 30 godina otišla u opoziciju, a nova vlast raspolaže tesnom vecinom i ima 41 od 81 poslanika crnogorskog parlamenta.
                    </p>
                      <Button variant="primary" onClick={() => setModalShow(true)}>
                        Ostavite komentar</Button>
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </CardBody>
                  </Card>
                </div>

              </Col>
              <Col md="4">
                <div className="firstDiv">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/erik-lucatero-2.jpg")}
                        />
                      </a>
                    </div>

                    <br />
                    <CardBody>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h4">Milorad Dodik</CardTitle>
                          <h6 className="card-category">Predsjednik SNSD-a</h6>
                          <br />
                        </div>
                      </a>
                      <p className="card-description text-center">
                        Predsjednik Saveza nezavisnih socijaldemokrata (SNSD) i predsjedavajuci Predsjedništva Bosne i Hercegovine (BiH) Milorad Dodik zatražio je od predsjednika Stranke demokratske akcije (SDA) Bakira Izetbegovica da se izvini Srbima zbog izjave date u emisiji "Dnevnik D" Federalne televiziije (FTV).
                        Izetbegovic je gostujuci u ovoj emisiji, 21. januara i komentirajuci zašto Milorad Dodik govori o secesiji Republike Srpske (RS) naveo kako smatra da Dodik želi da "ostane upamcen kao neko ko je sacuvao duh toga.
                    </p>
                      <Button variant="primary" onClick={() => setModalShow(true)}>
                        Ostavite komentar</Button>
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </CardBody>
                  </Card>
                </div>
                <br />
              </Col>
            </Row>
          </Container>
          <Container>
            <br />
            <div className="title-brand">
            </div>
            <Row>
              <Col md="4">
                <div className="firstDiv">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar" >
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                        />
                      </a>
                    </div>

                    <CardBody >
                      <div>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <br />
                          <CardTitle tag="h4">Aleksandar Vucic</CardTitle>
                          <h6 className="card-category">Predsjedik Srbije</h6>
                          <br />
                          <p className="card-description text-center">
                            Danas je Aleksandar Vucic izasao medju narod i obratio se sa informacijom o statusu u drzavi.
                            Oporezivanje javnih preduzeca kao i freelance kompanija ce se nastaviti oporezivati do daljenjeg.
                            Iako su se mnogi protivili toj odluci, hteli ili ne morali su da prihvate tu odluku. |
                            Porez za freelancere iznosice 50% od ukupne sume. Sto se ostalih preduzeca tice iznosice 28%.
                            Do daljnjeg ce ova odluka biti na snazi.
                        </p>
                          <Button variant="primary" onClick={() => setModalShow(true)}>
                            Ostavite komentar</Button>
                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Col>
              <Col md="4">
                <div className="firstDiv">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/joe-gardner-2.jpg")}
                        />
                      </a>
                    </div>

                    <CardBody>
                      <br />
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h4">Milo Djukanovic</CardTitle>
                          <h6 className="card-category">Bivsi predsjednik Crne Gore</h6>
                          <br />
                        </div>
                      </a>

                      <p className="card-description text-center">
                        Milo Ðukanovic bice predsednik Demokratske partije socijalista (DPS)  i u narednom periodu, odluceno je na vanrednom Kongresu partije održanom danas u Podgorici.
                        Ðukanovic je bio jedini kandidat za predsednika te politicke partije.
                        Ivan Vukovic, Jevto Erakovic, Sanja Damjanovic i Abaz Dizdarevic bice potpredsednici DPS-a.
                        Na parlamentarnim izborima 30. avgusta prošle godine, DPS je nakon 30 godina otišla u opoziciju, a nova vlast raspolaže tesnom vecinom i ima 41 od 81 poslanika crnogorskog parlamenta.
                    </p>
                      <Button variant="primary" onClick={() => setModalShow(true)}>
                        Ostavite komentar</Button>
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />

                    </CardBody>
                  </Card>
                </div>

              </Col>
              <Col md="4">
                <div className="firstDiv">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/erik-lucatero-2.jpg")}
                        />
                      </a>
                    </div>

                    <br />
                    <CardBody>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h4">Milorad Dodik</CardTitle>
                          <h6 className="card-category">Predsjednik SNSD-a</h6>
                          <br />
                        </div>
                      </a>
                      <p className="card-description text-center">
                        Predsjednik Saveza nezavisnih socijaldemokrata (SNSD) i predsjedavajuci Predsjedništva Bosne i Hercegovine (BiH) Milorad Dodik zatražio je od predsjednika Stranke demokratske akcije (SDA) Bakira Izetbegovica da se izvini Srbima zbog izjave date u emisiji "Dnevnik D" Federalne televiziije (FTV).
                        Izetbegovic je gostujuci u ovoj emisiji, 21. januara i komentirajuci zašto Milorad Dodik govori o secesiji Republike Srpske (RS) naveo kako smatra da Dodik želi da "ostane upamcen kao neko ko je sacuvao duh toga.
                    </p>
                      <Button variant="primary" onClick={() => setModalShow(true)}>
                        Ostavite komentar</Button>
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </CardBody>
                  </Card>
                </div>
                <br />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );

}
