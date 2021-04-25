import React from 'react';
// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import MainCard from './MainCard'
import { Card, Container, Row, Col } from "react-bootstrap";
import { CardBody } from "reactstrap";

require('css2.css');

function LandingPage({filteredData}) {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (<>
    <LandingPageHeader />
    <div className="main">
      <div className="section section-dark text-center" style={{
        backgroundColor: 'white',
        overflow: 'hidden',
        margin: "2em",
      }}>
        <Container>
          <Row>
            <div className="firstDiv2 bg-light">
              <Card
                className="card-profile card-plain"
                style={{ padding: '5%', border: '10px solid #5bc0de'}}
              >
                <CardBody>
                  <div>
                    <pre className="card-description text-justify" style={{ fontSize: 18, fontWeight: 400 }}>
                      Dragi prijatelji,
                      <br/><br/>
                      Već duže vremena u krugovima dijaspore javila se potreba za jednim
                      autentičnim glasilom, u ovom slučaju internet portalom, koji bi na građanski i
                      civilizovan način omogućio razmjenu mišljenja i stavova vezanih prije svega za
                      potrebe crnogorske dijaspore i njenu neupitnu i nemjerljivu ljubav prema Crnoj
                      Gori.
                      <br/><br/>
                      Kao višedecenijski istaknuti građanski aktivista u crnogorskoj dijaspori a na
                      nagovor mnogih prijatelja iz Crne Gore i njene dijaspore, stavih na svoja nejaka
                      pleća i teret pokretanja ovog portala, pa se nadam da ćete mi u tome svojim
                      komentarima, prijedlozima, savjetima i pogotovo radovima koje ćemo
                      objavljivati na razne teme, uveliko pomoći.
                      <br/><br/>
                      Sarađujući sa našim portalom ujedno pomazete u boljem razumijevanju između naše domovine Crne Gore i njene dijaspore!
                      <br/><br/>
                      Kako nam i sami naziv kaže, bićemo otvoreni za razna misljenja I sučeljavanja
                      stavova, uz jednu ogradu: administrator će brisati sve grube uvrede, kako
                      pojedinaca, tako i politickih subjekata a naročito Crne Gore i njenog prava da
                      postoji kao suverena i demokratska država!
                      <br/><br/>
                      Osim komentara koje možete ostavljati direktno ispod teksta koji objavljujemo, više su nego dobrodošli vaši autorski tekstovi koje ćemo sa zadovoljstvom
                      objavljivati! 
                      <br/><br/>
                      Naša i vaša e-mail adresa je:
                      <br/><br/>
                      domovinadijaspora4d@gmail.com
                      <br/><br/>
                      DEMOKRATSKA SINERGIJA JE JEDINI METOD OSTVARIVANJA 
                      PROSPERITETNOG DRUŠTVA!
                      <br/><br/>
                      Iskreno Vaš,
                      <br/><br/>
                      Mr. Vladislav Vanja Popović, 
                      <br/><br/>
                      glavni urednik
                    </pre>
                  </div>
                </CardBody>
              </Card> 
            </div>
          </Row>
        </Container>
      </div>       
    </div>
    <MainCard  filteredData={filteredData}/>
  </>
  );
}

export default LandingPage;
