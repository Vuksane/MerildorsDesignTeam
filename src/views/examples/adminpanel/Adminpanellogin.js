import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Input } from "reactstrap";
import credentials from "../../../secretData/credentials.json"
import Label from "reactstrap/lib/Label";
import { useHistory } from "react-router-dom";

const Adminpanellogin = ({setIsAuth}) => {
  const history = useHistory()
  const [authorisation, setAuthorisation] = useState({
    username: "",
    password: "",
  });
  console.log(authorisation,"aut")

  const checkAuth = (e) => {
    e.preventDefault();
    if(authorisation.username === credentials.username && authorisation.password === credentials.password){
      console.log("usao u if")
      setIsAuth(true);
      setAuthorisation({
        username: "",
        password: ""
      })
    }
    else{
      console.log("usao u else")
      setIsAuth(false);
      setAuthorisation({
        username: "",
        password: ""
      })
    } 
  }
  return (
    <div className="section section-dark text-center" id="maxHeight" style={{ height: "100vh", backgroundColor: "black" }} >
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <Form onSubmit={(e) => checkAuth(e)} className="contact-form blurred_glass_quick_message2 blurred_glass_quick_message" style={{marginTop: '20%'}}>
              <Row>
                <Col md="12">
                  <Label></Label>
                  <Input
                    placeholder="Username"
                    value={authorisation.username}
                    onChange={(e) =>
                      setAuthorisation({ ...authorisation, username: e.target.value })
                    }
                    name="username"
                    type="text"
                  />
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Label></Label>
                  <Input
                    value={authorisation.password}
                    onChange={(e) =>
                      setAuthorisation({ ...authorisation, password: e.target.value })
                    }
                    placeholder="Password"
                    name="password"
                    type="password"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="3">
                  <Button type="submit">Login</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Adminpanellogin
