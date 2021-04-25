import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-image-gallery/styles/css/image-gallery.css";
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </AlertProvider>,
  document.getElementById("root")
);
