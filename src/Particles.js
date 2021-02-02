import Particles from 'react-particles-js';
import React, { Component } from "react";

export default class App extends Component{

    render(){
        return (
            <Particles
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 82
            				}
            			}
            		}
            	}}
              style={{
                width: '100%', height:'100vh'}}
            />
        );
    };

}
