
import React, { Component, useRef, useEffect } from 'react';


// reactstrap components
import { Button, Container } from "reactstrap";
import Particles from 'react-particles-js';



function LandingPageHeader({test}) {
  let pageHeader = React.createRef();
//function navbar
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
  //variables
  let styleobj = {fontSize: 72, width:1000, marginLeft:-90 }
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
