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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";

// pages

import LandingPage from "views/examples/LandingPage.js";
import KulturaIDrustvo from './KulturaIDrustvo';
import Ekonomija from './Ekonomija'
import KolumneIIntervjui from './KolumneIIntervjui'
import VijestiIzDijaspore from './VijestiIzDijaspore'
import Politika from "./Politika";

// others
ReactDOM.render(

  <BrowserRouter>
    <Switch>

      <Route
        exact
        path="/"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/KulturaIDrustvo"
        render={props => <KulturaIDrustvo {...props} />}

      />

      <Route
        path="/Politika"
        render={props => <Politika {...props} />}
      />

      <Route
        path="/Ekonomija"
        render={props => <Ekonomija {...props} />}
      />

      <Route
        path="/KolumneIIntervjui"
        render={props => <KolumneIIntervjui {...props} />}
      />

      <Route
        path="/VijestiIzDijaspore"
        render={props => <VijestiIzDijaspore {...props} />}
      />


      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
