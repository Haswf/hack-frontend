import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./views/styles.css";
import PatientList from "./pages/PatientList";
import Login from "./pages/Login";
import Usercenter from "./pages/Usercenter";
import CommentExampleComment from "./pages/Discussion";
import DiscussionList from "./pages/DiscussionList"
import PrimarySearchAppBar from "./component/AppBar";
import Survey from "./component/Survey";
import SignInSide from "./pages/Login";
import SignUpSide from "./pages/Signup";
import Comments from "./component/Comments";
import Checkout from "./component/survey/Checkout";
import {SurveyPage} from "./component/survey/Symptom";
import Dis from "./component/dis";
import ResetPassword from "./pages/ResetPassword";

export default function App() {
  return (
      <Router>
        <div className="App">
            <PrimarySearchAppBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/patientList">
               <PatientList />
            </Route>
              <Route path="/usercenter">
                  <Usercenter />
              </Route>
              <Route path="/login">
                  <SignInSide />
              </Route>
              <Route path="/resetpassword">
                  <ResetPassword />
              </Route>
              <Route path="/discussion">
                  <Dis />
              </Route>
              <Route path="/discussionlist">
                  <DiscussionList/>
              </Route>
              <Route path="/survey">
                  <Checkout />
              </Route>
              <Route path="/signup">
                  <SignUpSide />
              </Route>
              <Route path="/comments">
                  <Comments />
              </Route>


          </Switch>
        </div>
      </Router>
  );
}
