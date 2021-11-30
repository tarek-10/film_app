import axios from "axios";
import React, { Component } from "react";

export default class Login extends Component {
  user = {
    email: "",
    password: "",
  };
  state = {
    errorMessage: "",
  };
  getData = (e) => {
    this.user[e.target.name] = e.target.value;
    console.log(this.user);
  };
  sendData = async (e) => {
    e.preventDefault();
    console.log("done");
    let { data } = await axios.post(
      "https://route-egypt-api.herokuapp.com/signin",
      this.user
    );
    if (data.message === "success") {
      localStorage.setItem("token", data.token);
      this.props.history.replace("/home");
    } else {
      this.setState({
        errorMessage: data.message,
      });
      e.target.reset();
    }
  };
  render() {
    console.log(this.props);
    return (
      <>
        <div className="w-75 mx-auto my-5">
          <form onSubmit={this.sendData}>
            <input
              type="email"
              placeholder="Enter Your Mail"
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
            {this.state.errorMessage.length > 0 ? (
              <div className="alert alert-danger w-100 p-0">
                <h6 className="py-2 text-center">{this.state.errorMessage}</h6>
              </div>
            ) : (
              this.state.errorMessage
            )}
            <button className="btn btn-info float-right mt-3">Login</button>
          </form>
        </div>
      </>
    );
  }
}
