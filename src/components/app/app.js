import React, { useContext } from "react";
import { Switch, Route, Redirect, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Main from "../pages/main";
import Footer from "../footer";
import About from "../pages/about";
import PublishProject from "../pages/publish-project";
import Contacts from "../pages/contacts";
import ForAdvertisers from "../pages/for-advertisers";
import TermsOfUse from "../pages/terms-of-use";
import PrivacyPolicy from "../pages/privacy-policy";
import PolicyPersonalData from "../pages/policy-personal-data";
import PageNotFoundContainer from "../pages/page-not-found";
import PolicyModalContainer from "../policy-modal";
import ArticleContainer from "../pages/article";
import Rubric from "../pages/rubric";
import ConfirmSubscriptionContainer from "../pages/confirm-subscription";
import ModalMessageContainer from "../modal-message";
import Header from "../header";
import SpinnerContainer from "../spinner";
import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import Cursor from "../cursor";
import '../../scss/main.scss';

const App = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(
    location,
    location => location.pathname,
    {
      from: { opacity: 0, transform: "translate(100%, 0)" },
      enter: { opacity: 1, transform: "translate(0%, 0)" },
      leave: { opacity: 0, transform: "translate(-50%, 0)" }
    }
  );

  return (
    <>
      <Header />
      <main className="main">
        { transitions.map(({ item, props, key }) => (
          <animated.div key={ key } style={ props }>
            <Switch location={ item } >
              <Route path="/" component={ Main } exact />
              <Route path="/about" component={ About } />
              <Route path="/publish-project" component={ PublishProject } />
              <Route path="/contacts" component={ Contacts } />
              <Route path="/for-advertisers" component={ ForAdvertisers } />
              <Route path="/policy-personal-data" component={ PolicyPersonalData } />
              <Route path="/privacy-policy" component={ PrivacyPolicy } />
              <Route path="/terms-of-use" component= { TermsOfUse } />
              <Route path="/articles/" component= { ArticleContainer } exact />
              <Route path="/articles/:url"
                     render={({ match }) => {
                       const { url } = match.params;
                       return <ArticleContainer url={ url } />;
                     }} />
              <Route path="/rubrics/:id"
                     render={({ match }) => {
                       const { id } = match.params;
                       return <Rubric rubric={ id } />;
                     }} />
              <Route path="/confirm-subscription/:id"
                     render={({ match }) => {
                       const { id } = match.params;
                       return <ConfirmSubscriptionContainer subscriptionId={ id } />;
                     }} />
              <Route path="/page-not-found" component={ PageNotFoundContainer } />
              <Redirect to="/page-not-found" />
            </Switch>
          </animated.div>
        )) }
      </main>
      <Footer />
      <PolicyModalContainer />
      <SpinnerContainer />
      <ModalMessageContainer />
      <Cursor />
    </>
  );
};

export default App;