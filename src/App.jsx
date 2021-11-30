import React, { Component } from "react";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Navbar from "./components/Navbar/Navbar";
import Tv from "./components/Tv/Tv";
import NotFound from "./components/NotFound/NotFound";
import { Switch, Route, Redirect } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Protected from "./components/Protected/Protected";
export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Protected path="/home" component={Home} />
          <Protected path="/movies" component={Movies} />
          <Protected path="/tv" component={Tv} />
          {/* <Route path="/home" component={Home} /> */}
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          {/* <Route path="/movies" component={Movies} /> */}
          {/* <Route path="/tv" component={Tv} /> */}
          <Redirect exact from="/" to="/register" />
          <Route path="*" component={NotFound} />
        </Switch>
      </>
    );
  }
}
