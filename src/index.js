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
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import IndexPage from './IndexPage'
import Articles from './Articles'
import ArticleDetails from './ArticleDetails'

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
        path="/login"
        render={props => <LoginForm {...props} />}

      />

      <Route
        path="/sign-up"
        render={props => <SignUp {...props} />}
      />

      <Route
        path="/index"
        render={props => <IndexPage {...props} />}
      />

      <Route
        path="/articles/:category/:city"
        render={props => <Articles {...props} />}
      />

      <Route
        path="/articles/:category/:city/:id"
        render={props => <ArticleDetails {...props} />}
      />


      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
