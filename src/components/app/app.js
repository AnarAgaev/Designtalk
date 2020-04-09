import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "../pages/main";
import Footer from "../footer";
import About from "../pages/about";
import PublishProject from "../pages/publish-project";
import Contacts from "../pages/contacts";
import ForAdvertisers from "../pages/for-advertisers";
import TermsOfUse from "../pages/terms-of-use";
import PrivacyPolicy from "../pages/privacy-policy";
import PolicyPersonalData from "../pages/policy-personal-data";
import PolicyModalContainer from "../policy-modal";
import Articles from "../pages/articles";
import ModalMessageContainer from "../modal-message";
import HeaderContainer from "../header";
import Spinner from "../spinner";
import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import '../../scss/main.scss';

export default class App extends Component {
  render() {
    return (
      <>
        <HeaderContainer />
        <main className="main">
          <Switch>
            <Route path="/" component={ Main } exact />
            <Route path="/about" component={ About } />
            <Route path="/publish-project" component={ PublishProject } />
            <Route path="/contacts" component={ Contacts } />
            <Route path="/for-advertisers" component={ ForAdvertisers } />
            <Route path="/policy-personal-data" component={ PolicyPersonalData } />
            <Route path="/privacy-policy" component={ PrivacyPolicy } />
            <Route path="/terms-of-use" component= { TermsOfUse } />
            <Route path="/articles/" component= { Articles } exact />
            <Route path="/articles/:id"
                   render={({ match }) => {
                     const { id } = match.params;
                     return <Articles articleId={ id } />;
                   }} />
            <Redirect to="/404" />
          </Switch>
        </main>
        <Footer />
        <PolicyModalContainer />
        <Spinner />
        <ModalMessageContainer />
      </>
    );
  }
}