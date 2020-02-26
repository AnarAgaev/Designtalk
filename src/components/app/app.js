import React from "react";

import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap-grid.scss';

import '../../scss/main.scss';
import Header from "../header";
import Footer from "../footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/about";
import PublishProject from "../pages/publish-project";
import Contacts from "../pages/contacts";
import ForAdvertisers from "../pages/for-advertisers";
import Main from "../pages/main";
import CookiePolicy from "../pages/cookie-policy";
import PrivacyPolicy from "../pages/privacy-policy";
import PolicyPersonalData from "../pages/policy-personal-data";

const App = () => {
  return (
    <Router>
      <Header/>
      <main className="main">
        <Switch>
          <Route path="/" component={Main} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/publish-project" component={PublishProject} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/for-advertisers" component={ForAdvertisers} />
          <Route path="/policy-personal-data" component={PolicyPersonalData} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/cookie-policy" component={CookiePolicy} />
        </Switch>
      </main>
      <Footer/>
    </Router>
  )
};

export default App;