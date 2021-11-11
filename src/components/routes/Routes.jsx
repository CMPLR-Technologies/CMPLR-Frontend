import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Switch
} from "react-router-dom";
import Interests from "../gettingToKnowTumblrComponent/View";
import Register from "../registerComponent/View";

export default function MainRoutes(){

    return <>
    <Router>
      
        <Switch>
          <Route path="/register">
          <Register/>
          </Route>
          <Route path="/getting_to_know_tumblr">
          <Interests/>
          </Route>
          <Route path="/">
            <p>Home</p>
          </Route>
        </Switch>
    </Router>
    </>
}