import React, {useState} from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import {Link,NavLink} from "react-router-dom";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Gallery from "./Gallery.js";
// core components

function IndexPage(props) {

  let pageHeader = React.createRef();
  const [category, setCategory] = useState("Phones");
  const [city, setCity] = useState("Beograd");
  const blabla = "/articles/"+category+"/"+city
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

  <Gallery/>
    <ExamplesNavbar/>

      <div id="categoryBackground"
        style={{
          backgroundImage: "url(" + require("assets/img/bridge5.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >

      <Container>
        <br/><br/><br/><br/>
        <div className="motto text-center">
        <h3>Explore your category of articles!</h3>
        <br/><br/>

            <form className="text-center">
            <Form className="blurred_glass_2 " id="categoryForm">
          <FormGroup>
            <Label for="exampleSelect">Choose your category</Label>
            <Input type="select" onChange={e => setCategory(e.target.value)} name="select" id="exampleSelect"  className="borderRadius">
              <option value="Phones">Phones</option>
              <option value="Buildings">Buildings</option>
              <option value="Cars">Cars</option>
              <option value="TV">TV's</option>
              <option value="Clothes">Clothes</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Choose a city</Label>
            <Input type="select" onChange={e => setCity(e.target.value)} name="select" id="exampleSelect" className="borderRadius">
              <option value="Beograd">Beograd</option>
              <option value="Novi Sad">Novi Sad</option>
              <option value="Smederevo">Smederevo</option>
              <option value="Loznica">Loznica</option>
              <option value="Nis">Nis</option>
            </Input>
          </FormGroup>

          <Link
            to={blabla}
            className="btn-round mr-1"

            outline
          >

          GO FIND

          </Link>

        </Form>
            </form>
        </div>
      </Container>
      </div>
    </>
  );
}

export default IndexPage;
//
