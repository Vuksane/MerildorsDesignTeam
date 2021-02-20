
import React, { Component, useRef, useEffect } from 'react';


// reactstrap components
import { Button, Container } from "reactstrap";
import Particles from 'react-particles-js';


function LandingPageHeader({test}) {
  let pageHeader = React.createRef();
//function navbar
const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
const [navbarCollapse, setNavbarCollapse] = React.useState(false);


React.useEffect(() => {
  const updateNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      setNavbarColor("");
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      setNavbarColor("navbar-transparent");
    }
  };

  window.addEventListener("scroll", updateNavbarColor);

  return function cleanup() {
    window.removeEventListener("scroll", updateNavbarColor);
  };
});
  //variables
  let styleobj = {fontSize:46, width:1000, marginLeft:-90 }
  //body
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/cg.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
          
            <div className="title-brand" style={{paddingTop:140}}>
              <h3 className="presentation-title" style={styleobj}>
              Domovina Dijaspora Demokratski Dijalog</h3>
               <br/><br/><br/>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="motto text-center">
            <div class="bounce">
                <img width="40" height="30" alt="" src="https://jamesmuspratt.com/codepen/img/arrow-down.svg" />
                </div>
                </div>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
      </div>

    </>
  );
}

export default LandingPageHeader;
