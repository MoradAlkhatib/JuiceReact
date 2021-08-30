import React, { Component } from 'react'
import { Form ,Modal ,Button } from 'react-bootstrap'
export class Modalfavorite extends Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.setShow}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <Form onSubmit={this.props.updateModal}>
                <Form.Control
                  type="text"
                  placeholder="Name of Your Juice"
                  name="nameJ"
                />
                <Form.Control
                  type="text"
                  placeholder="Image fo Your Juice"
                  name="imgUrl"
                />
                <Form.Control type="text" placeholder="Descriptions" name="des" />
                <Button type="submit">Submit</Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
        )
    }
}

export default Modalfavorite
