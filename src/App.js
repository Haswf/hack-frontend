import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./views/styles.css";
import Usercenter from "./pages/Usercenter";
import DiscussionList from "./pages/DiscussionList"
import PrimarySearchAppBar from "./component/AppBar";
import Login from "./pages/Login";
import SignUpSide from "./pages/Signup";
import Comments from "./component/Comments";
import Checkout from "./component/survey/Checkout";
import Dis from "./component/dis";
import { SnackbarProvider } from 'notistack';

export default function App() {
  return (
      <SnackbarProvider maxSnack={3}>
      <Router>
        <div className="App">
            <PrimarySearchAppBar />
          <Switch>
            <Route exact path="/" component={Home} />
              <Route exact path="/usercenter" component={Usercenter} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/discussion" component={Dis} />
              <Route exact path="/discussionlist" component={DiscussionList}/>
              <Route exact path="/survey" component={Checkout} />
              <Route exact path="/signup" component={SignUpSide} />
              <Route exact path="/discussions/:id" component={Comments} />
          </Switch>
        </div>
      </Router>
      </SnackbarProvider>
  );
}
