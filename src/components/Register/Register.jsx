import axios from "axios";
import React, { Component } from "react";

export default class Register extends Component {
  user = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
  };
  state = {
    errorMessage: "",
  };
  getData = (e) => {
    this.user[e.target.name] = e.target.value;
  };
  sendData = async (e) => {
    e.preventDefault();
    console.log("done");
    let { data } = await axios.post(
      "https://route-egypt-api.herokuapp.com/signup",
      this.user
    );
    console.log(data);
    if (data.message === "success") {
      this.setState({
        errorMessage: "",
      });
      e.target.reset();
    } else {
      this.setState({
        errorMessage: data.message,
      });
      e.target.reset();
    }
  };
  render() {
    return (
      <>
        <div className="w-75 mx-auto my-5">
          <form onSubmit={this.sendData}>
            <input
              type="text"
              placeholder="Enter Your First Name"
              name="first_name"
              className="form-control mt-3"
              onChange={this.getData}
            />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              name="last_name"
              className="form-control mt-3"
              onChange={this.getData}
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="form-control mt-3"
              onChange={this.getData}
            />
            <input
              type="text"
              placeholder="Enter Your Password"
              name="password"
              className="form-control mt-3"
              onChange={this.getData}
            />
            <input
              type="text"
              placeholder="Enter Your Age"
              name="age"
              className="form-control mt-3"
              onChange={this.getData}
            />
            {this.state.errorMessage.length > 0 ? (
              <div className="alert alert-danger w-100 p-0">
                <h6 className="py-2 text-center">{this.state.errorMessage}</h6>
              </div>
            ) : (
              this.state.errorMessage
            )}
            <button className="btn btn-info float-right mt-3">Register</button>
          </form>
        </div>
      </>
    );
  }
}
