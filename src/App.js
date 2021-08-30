import "./App.css";
import Header from "./components/Header";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Juice from "./components/Juice";
import { withAuth0 } from "@auth0/auth0-react";
import Favorite from "./components/Favorite";
export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
          <Juice/>

          </Route>
          <Route exact path='/favorite'>
          {this.props.auth0.isAuthenticated && <Favorite/> }

          </Route>
        </Switch>
        
        
        </BrowserRouter>
        
      </div>
    );
  }
}

export default withAuth0(App);
