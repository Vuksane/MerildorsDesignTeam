import React, { useState, useEffect } from "react";
import { postNews } from '../../../services/API';
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useAlert } from "react-alert";
import moment from "moment";
import { Form, Input } from "reactstrap";
import Tabs, { TabPane } from 'rc-tabs';
import '../../../../node_modules/rc-tabs/assets/index.css';
import { getAllNews } from "../../../services/API";
import { getAllComments } from "../../../services/API";
import ReactTable from "react-table";  
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import AdminpanelindexListaTema from "./AdminpanelindexListaTema";
import AdminpanelindexListaKomentara from "./AdminpanelindexListaKomentara";
import AdminpanelindexListaNaslova from "./AdminpanelindexListaNaslova";

function Adminpanelindex() {
  function callback(e) {
    console.log(e);
  }
  let date = new Date();
  let datumvesti = moment(date).format("YYYY-MM-DD HH:mm:ss");
  const [objekat, setObjekat] = useState({
    naslovTeme: "",
    naslovVesti: "",
    textVesti: "",
    datumVesti: datumvesti,
  });

  document.documentElement.classList.remove("nav-open");
  const alert = useAlert();
  useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  const category = [
    "politika",
    "kultura-i-drustvo",
    "ekonomija",
    "kolumne-i-intervjui",
    "vijesti-iz-dijaspore",
  ];
  const sendDataToSQL = (e) => {
  e.preventDefault();

    postNews(objekat).then((res)=>{
      alert.info("Podaci su uspesno poslati na bazu");
      setObjekat({
        naslovTeme: "",
        naslovVesti: "",
        textVesti: "",
        datumVesti: datumvesti,
      });
    })
  };
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState({
    "politika": [],
    "kultura-i-drustvo": [],
    "ekonomija": [],
    "kolumne-i-intervjui": [],
    "vijesti-iz-dijaspore": []
  })
  const [comment, setComment] = useState([])
  const [titles, setTitles] = useState({})
  useEffect(() => {
    getAllNews().then(res => {
      setData(res.data)
    })
    getAllComments().then(res => {
      setComment(res.data)
    })
  }, [])

  useEffect(() => {
    const test = data.reduce(function (map, obj) {
      map[obj.naslovTeme] = data.filter(el => el.naslovTeme === obj.naslovTeme);
      return map;
    }, {})
    setFilteredData(test)
  }, [data])

  useEffect(() => {
    const test2 = comment.reduce(function (map, obj) {
      map[obj.naslovVesti] = comment.filter(el => el.naslovVesti === obj.naslovVesti);
      return map;
    }, {})
    setTitles(test2)
  }, [comment])

  


  



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
                    <Row>
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
                          rows="4"
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
          <MDBTable>
            {filteredData?Object.keys(filteredData).map(el=><AdminpanelindexListaTema title={podaci[el].heading} data={filteredData[el]}/>):null}
          </MDBTable>
        </TabPane>
        <TabPane tab="Lista Komentara" key="3">
          <MDBTable>
              {titles?Object.keys(titles).map(el=><AdminpanelindexListaNaslova title={el} data={titles[el]}/>):null}
          </MDBTable>
        </TabPane>
      </Tabs>
      
    </>
  );
}

export default Adminpanelindex;

