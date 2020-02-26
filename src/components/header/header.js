import React, {Component} from "react";
import {Container} from "react-bootstrap";

import './header.scss';

import Logotype from "../logotype";
import Nav from "../nav";
import SocialList from "../socials-list";

export default class Header extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    //console.log(window.scrollY);
  };

  render() {
    return (
      <header className="header">
        <Container>
          <Logotype/>
          <Nav/>
          <SocialList/>
        </Container>
      </header>
    );
  }
}