import React, {useState} from 'react';
import logo from './logo.svg';
import {ButtonToolbar,Button} from 'react-bootstrap';
import './css2.css';
import {Card,Container,Row,Col} from 'react-bootstrap';
import ExampleNavbar from './components/Navbars/ExamplesNavbar';
import { Link } from "react-router-dom";

export default function SignUp(props){
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 50) {
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
          backgroundImage: "url(" + require("assets/img/uriel-soberanes.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <br/><br/><br/>
          <div className="motto text-center p-5">
            <h3>Please Login and start with bidding!</h3>
              <form className="text-center p-3">
                <div class="form-group blurred_glass_2 blurred_glass">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <br></br>
                <div class="form-group blurred_glass_2 blurred_glass ">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <br></br>
                <div class="form-group blurred_glass_2 blurred_glass ">
                  <label for="exampleInputPassword1">Password Confirm</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                  <label for="exampleCheck1">Check me out</label>
                </div>

                <Button
                  onClick="/SignUp"
                  className="btn-round mr-1"
                  id="buttonTransparent"
                  target="_blank"
                  outline
                >
                SignUp
                </Button>
              </form>
          </div>
        </Container>
      </div>
    </>
  );

}
