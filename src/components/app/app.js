import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../header";
import Footer from "../footer";
import About from "../pages/about";
import PublishProject from "../pages/publish-project";
import Contacts from "../pages/contacts";
import ForAdvertisers from "../pages/for-advertisers";
import Main from "../pages/main";
import CookiePolicy from "../pages/cookie-policy";
import PrivacyPolicy from "../pages/privacy-policy";
import PolicyPersonalData from "../pages/policy-personal-data";
import Cursor from "../cursor";

import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import '../../scss/main.scss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" component={ Main } exact={true} />
            <Route path="/about" component={ About } />
            <Route path="/publish-project" component={ PublishProject } />
            <Route path="/contacts" component={ Contacts } />
            <Route path="/for-advertisers" component={ ForAdvertisers } />
            <Route path="/policy-personal-data" component={ PolicyPersonalData } />
            <Route path="/privacy-policy" component={ PrivacyPolicy } />
            <Route path="/cookie-policy" component= {CookiePolicy } />
          </Switch>
        </main>
        <Footer />
        <Cursor />
      </Router>
    );
  }
}