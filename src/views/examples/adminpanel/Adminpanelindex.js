import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Form, Input } from "reactstrap";
//Tabovi sa strane
import Tabs, { TabPane } from 'rc-tabs';
import '../../../../node_modules/rc-tabs/assets/index.css';
//Axios pozivi ka server
import { postNews } from '../../../services/API';
import { getAllNews } from "../../../services/API";
import { getAllComments } from "../../../services/API";
//Alert
import { useAlert } from "react-alert";
import moment from "moment";
//Tabele za izlistavanje vesti 
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { deleteNews } from "../../../services/API";
//Stranice Admin panela
import AdminpanelindexListaTema from "./AdminpanelindexListaTema";
import AdminpanelindexListaNaslova from "./AdminpanelindexListaNaslova";

function Adminpanelindex() {
  function callback(e) {
    console.log(e);
  }

  //Nemam predstavu sta je ovo
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  //Konstanta alerta
  const alert = useAlert();

  //Variabla za datum
  let date = new Date();
  let datumvesti = moment(date).format("YYYY-MM-DD HH:mm:ss");

  //Konstanta kategorije koja se koristi pri odabiru teme u tab-u nova vest
  const category = [
    "politika",
    "kultura-i-drustvo",
    "ekonomija",
    "kolumne-i-intervjui",
    "vijesti-iz-dijaspore",
  ];

  //Use State za smestanje svih vesti
  const [data, setData] = useState([])

  //Use State za smestanje svih vesti po naslovu teme
  const [filteredData, setFilteredData] = useState({
    "politika": [],
    "kultura-i-drustvo": [],
    "ekonomija": [],
    "kolumne-i-intervjui": [],
    "vijesti-iz-dijaspore": []
  })
  //Use State za smestanje svih komentara
  const [comment, setComment] = useState([])

  //Use State za smestanje svih komentara po naslovu vesti
  const [titles, setTitles] = useState({})

  //Use State za obrisane vesti
  const [isDelete, setIsDelete] = useState(false)

  //Use State za ubacene vesti
  const [isSent, setIsSent] = useState(false)

  //Funkcija koja brise vesti iz baze
  const deleteVest = (data) => {
    deleteNews(data).then((res)=>{
      setIsDelete(!isDelete);
    })
    alert.info('Obrisali ste sledecu vest: ' + data.naslovVesti)
  };

  //Use State koji cuva podatke iz forme za dodavanje nove vesti
  const [objekat, setObjekat] = useState({
    naslovTeme: "",
    naslovVesti: "",
    textVesti: "",
    datumVesti: datumvesti,
  });

  //Funkcija koja salje vesti na bazu
  const sendDataToSQL = (e) => {
    e.preventDefault();
    if (objekat.naslovTeme === ""){
      setObjekat({
        naslovTeme: "",
        naslovVesti: "",
        textVesti: "",
        datumVesti: datumvesti,
      });
      alert.info("Niste odabrali temu!");
    }
    else if (objekat.naslovVesti === ""){
      setObjekat({
        naslovTeme: "",
        naslovVesti: "",
        textVesti: "",
        datumVesti: datumvesti,
      });
      alert.info("Niste uneli naslov vesti!");
    }
    else if(objekat.textVesti === ""){
      setObjekat({
        naslovTeme: "",
        naslovVesti: "",
        textVesti: "",
        datumVesti: datumvesti,
      });
      alert.info("Niste uneli nikakav text!");
    }
    else{
      postNews(objekat).then((res)=>{    
        setIsSent(!isSent);  
        setObjekat({
          naslovTeme: "",
          naslovVesti: "",
          textVesti: "",
          datumVesti: datumvesti,
        });
        alert.info("Vest je uspesno poslata na bazu!");
      })
    }
      
  };

  //Use Effect koji povlaci sve vesti i komentare iz baze i povlaci ih svaki put na (Use State za obrisane vesti i Use State za ubacene vesti)
  useEffect(() => {
    getAllNews().then(res => {
      setData(res.data)
    })
    getAllComments().then(res => {
      setComment(res.data)
    })
  }, [isDelete, isSent])
  
  //Use Effect koji filtrira vesti iz baze u Use State za smestanje svih vesti po naslovu teme
  useEffect(() => {
    const test = data.reduce(function (map, obj) {
      map[obj.naslovTeme] = data.filter(el => el.naslovTeme === obj.naslovTeme);
      return map;
    }, {})
    setFilteredData(test)
  }, [data])

  //Use Effect koji filtrira komentare iz baze u Use State za smestanje svih vesti po naslovu vesti
  useEffect(() => {
    const test2 = comment.reduce(function (map, obj) {
      map[obj.naslovVesti] = comment.filter(el => el.naslovVesti === obj.naslovVesti);
      return map;
    }, {})
    setTitles(test2)
  }, [comment])

  //Konstanta koja se koristi kroz mapiranje tema 
  const podaci = {
    "politika" :
    {
        heading: "Politika"
    },
    "kultura-i-drustvo" : {
        heading: "Kultura i drustvo"
    },
    "ekonomija" :
    {
        heading: "Ekonomija"
    },
    "kolumne-i-intervjui" :
    {
        heading: "Kolumne i Intervjui"
    },
    "vijesti-iz-dijaspore" :
    {
        heading: "Vijesti iz dijaspore"
    }
  }
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={callback} tabPosition="left">
        <TabPane tab="Nova Vest" key="1">
          <div className="section section-dark text-center" id="maxHeight" style={{ height: "100vh", backgroundColor: "grey" }}>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="12">
                  <h2
                    id="scroll"
                    className="text-center"
                    style={{ color: "white" }}
                  >
                    Nova Vest
                  </h2>
                  <br></br>
                  <Form
                    onSubmit={sendDataToSQL}
                    className="contact-form blurred_glass_quick_message2 blurred_glass_quick_message"
                  >
                    <Row style={{paddingTop: "20px", paddingBottom: "20px"}}>
                      <Col md="12">
                        <select
                          value={objekat.naslovTeme}
                          onChange={(e) =>
                            setObjekat({ ...objekat, naslovTeme: e.target.value })
                          }
                          name="naslovteme"
                          style={{color: "grey", fontSize: 18, borderColor: 'grey'}}
                        >
                          <option value="" disabled selected hidden>
                            Izaberite Temu
                          </option>
                          {category.map((el) => (
                            <option value={el}>{el}</option>
                          ))}
                        </select>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <label style={{color: "grey", fontSize: 18}}>Naslov Vesti</label>
                        <Input
                          placeholder="Naslov Vesti"
                          value={objekat.naslovVesti}
                          onChange={(e) =>
                            setObjekat({ ...objekat, naslovVesti: e.target.value })
                          }
                          name="naslovvesti"
                          type="text"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <label style={{color: "grey", fontSize: 18}}>Text Vesti</label>
                        <Input
                          onChange={(e) =>
                            setObjekat({ ...objekat, textVesti: e.target.value })
                          }
                          placeholder="Text Vesti"
                          name="textvesti"
                          type="textarea"
                          rows="17"
                          style={{resize: "none"}}
                          value={objekat.textVesti}
                        />
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col className="ml-auto mr-auto" md="3">
                        <Button type="submit">Prosledi</Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </TabPane>
        <TabPane tab="Lista Vesti" key="2">
          <MDBTable 
            scrollY
            maxHeight="100vh"
          >
            {/*Mapiranje koje kreira sektore po filtriranim vestima i po njihovim naslovima tema */}
            {filteredData?Object.keys(filteredData).map(el=><AdminpanelindexListaTema title={podaci[el].heading} deleteVest={deleteVest} data={filteredData[el]}  />):null}
          </MDBTable>
        </TabPane>
        <TabPane tab="Lista Komentara" key="3">
          <MDBTable 
            scrollY
            maxHeight="100vh"
          >
            {/*Mapiranje koje kreira sektore po filtriranim komentarima i po njihovim naslovima vesti */}
            {titles?Object.keys(titles).map(el=><AdminpanelindexListaNaslova title={el} data={titles[el]}/>):null}
          </MDBTable>
        </TabPane>
      </Tabs>
      
    </>
  );
}

export default Adminpanelindex;

