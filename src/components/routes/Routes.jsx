import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Switch
} from "react-router-dom";
import LoginView from "../loginComponent/View";
import Register from "../registerComponent/View";
import HomePage from "../homeComponent/View";

export default function MainRoutes(){

    return <>
    <Router>
        <Switch>
          <Route path="/register">
          <Register/>
          </Route>
          <Route path="/login">
          <LoginView/>
          </Route>
          <Route exact path="/">
            <HomePage/>
          </Route>
        </Switch>
    </Router>
    </>
}