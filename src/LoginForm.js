import React, {useState} from 'react';
import logo from './logo.svg';
import {ButtonToolbar,Button} from 'react-bootstrap';
import './css2.css';
import {Card,Container,Row,Col} from 'react-bootstrap';
import ExampleNavbar from './components/Navbars/ExamplesNavbar';


import { Link,NavLink } from "react-router-dom";
export default function LoginForm(props){
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
  return (
    <>

    <ExampleNavbar/>

      <div
        style={{
          backgroundImage: "url(" + require("assets/img/bridge2.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >

        <div className="filter" />

       <Container>

          <div className="motto text-center">
              <form className="text-center p-3">
              <div className="text-center p-3 blurred_glass_3" id="loginForm">

                <div class="form-group">
                  <input type="email" className="form-control borderRadius" id="buttonTransparent" aria-describedby="emailHelp" placeholder="Enter email" style={{color:"white"}}></input>
                </div>
                <div class="form-group ">
                  <input type="password" className="form-control borderRadius" id="buttonTransparent" placeholder="Password"></input>
                </div>
                <Button
                className="btn-round mr-1 blurred_glass_quick_message box"
                variant="light"
                >

                <NavLink to="/index" tag={Link} style={{color:"white",fontWeight:"bold"}}>Login</NavLink>
                </Button>
                <Button
                  to="/sign-up"
                  tag={Link}
                  variant="light"
                  className="btn-round mr-1 blurred_glass_login_buttons box"
                >
                SignUp
                </Button>
                </div>
              </form>
          </div>
        </Container>
      </div>
    </>
  );

}
