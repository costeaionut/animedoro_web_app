import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'

class Login extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
      return (<div>
          Login clasa {this.props.trimisVariabilaPrinParametru}
      </div>)
  }
}

export default Login;