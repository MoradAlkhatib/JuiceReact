import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Row } from "react-bootstrap";
import Cardfavorite from "./Cardfavorite";
import Modalfavorite from "./Modalfavorite";
export class Favorite extends Component {
  constructor() {
    super();
    this.state = {
      allJuice: [],
      showModal: false,
      index: "",
      name: "",
      url: "",
      des: "",
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://juicepine.herokuapp.com/favorite/${this.props.auth0.user.email}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          allJuice: response.data,
        });
      });
  }
  componentDidUpdate() {
    axios
      .get(
        `https://juicepine.herokuapp.com/favorite/${this.props.auth0.user.email}`
      )
      .then((response) => {
        this.setState({
          allJuice: response.data,
        });
      });
  }
  deleteFav(id) {
    axios
      .delete(`https://juicepine.herokuapp.com/delete-fav/${id}`)
      .then((response) => {
        console.log(response.data);
      });
  }

  showUpdate = (id) => {
    console.log(id);
    this.setState({
      showModal: true,
      index: id,
    });
  };

  setShow = () => {
    this.setState({
      showModal: false,
    });
  };

  updateModal = (e) => {
    e.preventDefault();

    let bodyJuice = {
      name: e.target.nameJ.value,
      url: e.target.imgUrl.value,
      des: e.target.des.value,
    };
    axios
      .put(
        `https://juicepine.herokuapp.com/update-fav/${this.state.index}`,
        bodyJuice
      )
      .then((response) => {
        console.log(response.data);
      });
  };

  render() {
    return (
      <>
        <Modalfavorite
          setShow={this.setShow}
          showModal={this.state.showModal}
          updateModal={this.updateModal}
        />

        <Row>
          {this.state.allJuice.map((item, ind) => {
            return (
              <Cardfavorite
                item={item}
                index={ind}
                key={ind}
                deleteFav={this.deleteFav}
                showUpdate={this.showUpdate}
              />
            );
          })}
        </Row>
      </>
    );
  }
}

export default withAuth0(Favorite);
