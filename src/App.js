import "./App.css";
import Header from "./components/Header";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Juice from "./components/Juice";
import { withAuth0 } from "@auth0/auth0-react";
import Favorite from "./components/Favorite";
import { Container } from "react-bootstrap";
export class App extends Component {
  render() {
    return (
      <Container>
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
        
      </Container>
    );
  }
}

export default withAuth0(App);
