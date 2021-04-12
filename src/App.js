import React, {useState, useEffect, useContext, createContext } from "react";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Input } from "reactstrap";
import Label from "reactstrap/lib/Label";
import credentials from "./secretData/credentials.json"
import { Route, Redirect, Switch, Link, useHistory, useLocation, BrowserRouter } from "react-router-dom";
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
//Services
import {getAllNews} from './services/API';
//Functions
import {useAuth} from "./functions/functions"
import {ProvideAuth} from "./functions/functions"
//Private Routes
import PrivateRoutes from './routes/PrivateRoutes';
//Other Components and pages
import Theme from "./views/examples/vesti/Theme";
import Vest from "./Vest";
import Adminpanelindex from "./views/examples/adminpanel/Adminpanelindex";
import LandingPage from "./views/examples/LandingPage";
import JustNavbar from "./components/Navbars/JustNavbar";
import DemoFooter from './components/Footers/DemoFooter';
import AuthButton from './login/AuthButton'
import { useAlert } from "react-alert";
//Default App
export default function App() {

  // const [isAuth, setIsAuth] = useState(false)
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState({
    "politika": [],
    "kultura-i-drustvo": [],
    "ekonomija": [],
    "kolumne-i-intervjui": [],
    "vijesti-iz-dijaspore": []
  })

  useEffect(() => {
    getAllNews().then(res => {
      setData(res.data)
    })
  }, [])

  useEffect(() => {
    const test = data.reduce(function (map, obj) {
      map[obj.naslovTeme] = data.filter(el => el.naslovTeme === obj.naslovTeme);
      return map;
    }, {})
    setFilteredData(test)
  }, [data])

  return (<>
  <ProvideAuth>
    <BrowserRouter>
      <AuthButton />
      <JustNavbar />  
        <Switch>
          <Route exact path="/kultura-i-drustvo" render={() => <Theme {...filteredData} />} />
          <Route exact path="/politika" render={() => <Theme {...filteredData} />} />
          <Route exact path="/ekonomija" render={() => <Theme {...filteredData} />} />
          <Route exact path="/kolumne-i-intervjui" render={() => <Theme {...filteredData} />} />
          <Route exact path="/vijesti-iz-dijaspore" render={() => <Theme {...filteredData} />} />
          <Route path="/vest" render={() => <Vest data={data} />} />
          <Route path="/Adminpanellogin" render={() => <LoginPage />} />
          <PrivateRoutes path="/Adminpanelindex"><Adminpanelindex /></PrivateRoutes> 
          <Route path="/" render={() => <LandingPage filteredData={filteredData}/>} />
          <Redirect to="/" />
        </Switch>
      <DemoFooter />
    </BrowserRouter>
  </ProvideAuth>
</>);
}
  function LoginPage() { 
    var CryptoJS = require("crypto-js");

    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();
    const alert = useAlert();
    const [authorisation, setAuthorisation] = useState({
      username: "",
      password: "",
    });
 
    const [criptedAuthorisation, setCriptedAuthorisation] = useState({
      criptUser: "",
      criptPass: "",
    })
    let key = "7x!A%D*G";
    useEffect(() => {
      let criptedUsername = CryptoJS.AES.encrypt(authorisation.username, key);
      let stringedCriptedUsername = criptedUsername.toString();
      let criptedPassword = CryptoJS.AES.encrypt(authorisation.password, key);
      let stringedCriptedPassword = criptedPassword.toString();
      setCriptedAuthorisation({
        criptUser: stringedCriptedUsername,
        criptPass: stringedCriptedPassword
      })
    }, [authorisation])
    
    let { from } = location.state || { from: { pathname: "/Adminpanelindex" } };
    let login = (e) => {
      e.preventDefault();

      localStorage.setItem("credentials", JSON.stringify(criptedAuthorisation))
      let credential = JSON.parse(localStorage.getItem("credentials"))

      let decryptUsername = CryptoJS.AES.decrypt(credential.criptUser, key);
      let decryptPassword = CryptoJS.AES.decrypt(credential.criptPass, key);
      
      let fullydecriptedUsername = decryptUsername.toString(CryptoJS.enc.Utf8);
      let fullydecriptedPassword = decryptPassword.toString(CryptoJS.enc.Utf8);

      if( fullydecriptedUsername === credentials.username && fullydecriptedPassword === credentials.password){
        auth.signin(() => {
          history.replace(from);
        });
      }
      else{
        alert.info("Neuspesno logovanje")
        setAuthorisation({
          username: "",
          password: "",
        })
      } 
      
      console.log(criptedAuthorisation, "user")
      
    };
    console.log(criptedAuthorisation, "pass")
    

    return (
      <div className="section section-dark text-center" id="maxHeight" style={{ height: "100vh", backgroundColor: "grey" }} >
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <Form onSubmit={(e) => login(e)} className="contact-form blurred_glass_quick_message2 blurred_glass_quick_message" style={{ width: '250px', marginTop: '20%', borderRadius:'5px', border:'5px solid #5bc0de'}}>
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
                    pattern="[A-Za-z0-9]{8,}"
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
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto">
                  <Button type="submit">Login</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    );
  }