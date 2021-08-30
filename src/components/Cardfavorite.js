import React, { Component } from 'react'
import { Card, Button ,Col } from 'react-bootstrap'
export class Cardfavorite extends Component {
    render() {
        return (
            <Col lg={4} key={this.props.index}>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={this.props.item.juiceUrl} />
              <Card.Body>
                <Card.Title>{this.props.item.juiceName}</Card.Title>
                <Card.Title>{this.props.item.juiceDes} </Card.Title>
                <Button
                  variant="danger"
                  onClick={() => this.props.deleteFav(this.props.item._id)}
                >
                  Delete
                </Button>
                <Button
                  variant="info"
                  style={{ marginLeft: "10px" }}
                  onClick={() => this.props.showUpdate(this.props.item._id)}
                >
                  Update
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )
    }
}

export default Cardfavorite
