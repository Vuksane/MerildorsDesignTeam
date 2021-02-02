/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*!
<h5 className="description" className="text-dark">
  Bidding is an offer (often competitive) to set a price by an individual or business for a product or service or a demand that something be done.Bidding is used to determine the cost or value of something.
  Bidding can be performed by a "buyer" or "supplier" of a product or service based on the context of the situation. In the context of auctions, stock exchange, or real estate the price offer a business or individual is willing to pay is called a bid. In the context of corporate or government procurement initiatives, the price offer a business or individual is willing to sell is also called a bid. The term "bidding" is also used when placing a bet in card games. Bidding is used by various economic niches for determining the demand and hence the value of the article or property, in today's world of advanced technology, the Internet is a favored platform for providing bidding facilities; it is a natural way of determining the price of a commodity in a free market economy.
  </h5>*/
import React, { Component, useRef, useEffect } from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
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

  let test2 = (e) => {
    const bilosta = document.getElementById("scroll")
    bilosta.scrollIntoView()
  }
  let styleobj = { fontSize: 45, width: 1000, marginLeft: -90 }

  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader test={test2} />
      <div className="main">
        <div className="section section-dark text-center" style={{
          backgroundImage: "url(" + require("assets/img/222.jpg") + ")"
        }}>

          <Container>
            <h1 className="title">PolitikAAAAAAAAAAAAa</h1>
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
                        </a>
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
                        Milo Đukanović biće predsednik Demokratske partije socijalista (DPS)  i u narednom periodu, odlučeno je na vanrednom Kongresu partije održanom danas u Podgorici.
                        Đukanović je bio jedini kandidat za predsednika te političke partije.
                        Ivan Vuković, Jevto Eraković, Sanja Damjanović i Abaz Dizdarević biće potpredsednici DPS-a.
                        Na parlamentarnim izborima 30. avgusta prošle godine, DPS je nakon 30 godina otišla u opoziciju, a nova vlast raspolaže tesnom većinom i ima 41 od 81 poslanika crnogorskog parlamenta.
                    </p>
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
                        Predsjednik Saveza nezavisnih socijaldemokrata (SNSD) i predsjedavajući Predsjedništva Bosne i Hercegovine (BiH) Milorad Dodik zatražio je od predsjednika Stranke demokratske akcije (SDA) Bakira Izetbegovića da se izvini Srbima zbog izjave date u emisiji "Dnevnik D" Federalne televiziije (FTV).
                        Izetbegović je gostujući u ovoj emisiji, 21. januara i komentirajući zašto Milorad Dodik govori o secesiji Republike Srpske (RS) naveo kako smatra da Dodik želi da "ostane upamćen kao neko ko je sačuvao duh toga.
                    </p>
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
                <br />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center" style={{
          backgroundImage: "url(" + require("assets/img/222.jpg") + ")"
        }}>

          <Container>
            <h1 className="title">Politika</h1>
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
                        </a>
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
                        Milo Đukanović biće predsednik Demokratske partije socijalista (DPS)  i u narednom periodu, odlučeno je na vanrednom Kongresu partije održanom danas u Podgorici.
                        Đukanović je bio jedini kandidat za predsednika te političke partije.
                        Ivan Vuković, Jevto Eraković, Sanja Damjanović i Abaz Dizdarević biće potpredsednici DPS-a.
                        Na parlamentarnim izborima 30. avgusta prošle godine, DPS je nakon 30 godina otišla u opoziciju, a nova vlast raspolaže tesnom većinom i ima 41 od 81 poslanika crnogorskog parlamenta.
                    </p>
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
                        Predsjednik Saveza nezavisnih socijaldemokrata (SNSD) i predsjedavajući Predsjedništva Bosne i Hercegovine (BiH) Milorad Dodik zatražio je od predsjednika Stranke demokratske akcije (SDA) Bakira Izetbegovića da se izvini Srbima zbog izjave date u emisiji "Dnevnik D" Federalne televiziije (FTV).
                        Izetbegović je gostujući u ovoj emisiji, 21. januara i komentirajući zašto Milorad Dodik govori o secesiji Republike Srpske (RS) naveo kako smatra da Dodik želi da "ostane upamćen kao neko ko je sačuvao duh toga.
                    </p>
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
                <br />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
