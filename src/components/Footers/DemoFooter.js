import React from "react";
import { useLocation  } from "react-router-dom";
import { Row, Container } from "reactstrap";

function DemoFooter() {

  let location = useLocation();
  if (location.pathname.match(/Adminpanelindex/)){
    return null;
  } 
  else if (location.pathname.match(/Adminpanellogin/)){
    return null;
  }
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com/?ref=pkr-footer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  twitter
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="mail" style={{ fontSize: 15, fontWeight: 400 }}>
              Pisite nam na: domovinadijaspora4d@gmail.com
            </span>
          </div>
          <section></section>
          <div className="credits ml-auto">
            <span className="copyright">
              <i className="fa fa-heart heart" />
              All rights reserved © Merildor's Design
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
