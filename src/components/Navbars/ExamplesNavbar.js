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
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

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
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"

      >

      <Container>
        <div className="navbar-translate">
        <  img style={{marginLeft:"-10px"}}
              alt="..."
              width="50px"
              height="50px"
            src={require("assets/img/grb.png")}
                  />
          <NavbarBrand
            data-placement="bottom"
            to="/"

            tag={Link}>
            NAŠA DOMOVINA
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink href="http://www.politika.rs/"
              target="_blank">
                <i className="nc-icon nc-layout-11" /> POLITIKA
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://www.novosti.rs/kultura/vesti"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> KULTURA I DRUSTVO
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="http://merildorsdesign.com/"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> EKONOMIJA
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="http://merildorsdesign.com/"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> KOLUMNE I INTERVJUI
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="http://merildorsdesign.com/"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> VIJESTI IZ DIJASPORE
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
