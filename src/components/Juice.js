import React, { Component } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Alert,Container } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
class Juice extends Component {
  constructor() {
    super();
    this.state = {
      allJuice: [],
    };
  }
  componentDidMount() {
    axios.get(`https://juicepine.herokuapp.com/juice`).then((response) => {
      this.setState({
        allJuice: response.data,
      });
    });
  }
  addFavorite(item) {
    let bodyJuice = {
      email: this.props.auth0.user.email,
      name: item.name,
      url: item.image,
      des: item.description,
    };
    axios
      .post(`https://juicepine.herokuapp.com/add-fav`, bodyJuice)
      .then((response) => {
        Swal.fire("Added To Favorite Successfully");
      });
  }

  render() {
    return (
     <Container>
        <Row>
        {this.props.auth0.isAuthenticated && (
          <Alert style={{ textAlign: "center" }} variant="success">
            Welcome {this.props.auth0.user.name}
          </Alert>
        )}
        {this.state.allJuice.map((item, ind) => {
          return (
            <Col lg={4} md={6} sm={12} key={ind}>
              {" "}
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Title>{item.description} </Card.Title>
                  {this.props.auth0.isAuthenticated && (
                    <Button
                      variant="primary"
                      onClick={() => this.addFavorite(item)}
                    >
                      Add To Favorite
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
     </Container>
    );
  }
}

export default withAuth0(Juice);
