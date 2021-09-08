import React, { Component } from "react";
import { Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "./Login"
import Logout from "./Logout"
import { withAuth0 } from "@auth0/auth0-react";
class Header extends Component {
  render() {
    return (
      <Row style={{padding:"20px" }}>
        <Col lg={3} md={0} sm={0}></Col>
        <Col lg={3} md={6} sm={12}>
          <h1 style={{textAlign:"center"}}>Juices</h1>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <Nav
            style={{ display: "flex", fontSize: "20px", gap: "20px" }}
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/favorite">
                Favorite
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
             {this.props.auth0.isAuthenticated ? <Logout/> :<Login/> } 
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    );
  }
}

export default withAuth0(Header);
