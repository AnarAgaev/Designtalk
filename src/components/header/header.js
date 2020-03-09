import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Logotype from "../logotype";
import Nav from "../nav";
import SocialList from "../socials-list";
import './header.scss';

export default class Header extends Component {
  state = {
    visible: true,
    scrolled: 0
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  /*
  * handleScroll implements functionality, the header
  * changes its background and then disappears
  * when the user scrolls the screen window.
  */
  handleScroll = () => {
    const { scrolled } = this.state;
    let scroll = window.pageYOffset;

    (scroll > 30)
      ? this.setState({ background: true })
      : this.setState({ background: false });

    if (scroll > 700) {
      if (scroll < scrolled) {
        this.setState({
          visible: true,
          scrolled: scroll
        });
      }

      if (scroll > scrolled + 100) {
        this.setState({
          visible: false,
          scrolled: scroll
        });
      }
    }
  };

  render() {
    const classNames = this.state.visible ?
      'header' :
      'header hide';

    return (
      <header className={ classNames }>
        <Container>
          <Logotype/>
          <Nav/>
          <SocialList/>
        </Container>
      </header>
    );
  }
}