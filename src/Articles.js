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
import React,{useState} from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import {Link,NavLink} from "react-router-dom";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ListOfArticle from './ListOfArticle';
// core components

function Articles(props) {
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

    <ExamplesNavbar/>

      <div
      style={{
        backgroundImage: "url(" + require("assets/img/bridge5.jpg") + ")", backgroundAttachment:"fixed"
      }}
        className=""
        data-parallax={true}
        ref={pageHeader}
      >

      <Container className="p-5" >
        <div className="text-center" style={{marginTop: "20%"}}>

          <ListOfArticle category={props.match.params.category} city={props.match.params.city}/>
        </div>
      </Container>

      </div>


    </>
  );
}

export default Articles;
