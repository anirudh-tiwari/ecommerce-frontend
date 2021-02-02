import React from "react";
import { Link } from "@reach/router";
// import { Context } from "./context";
import { navigate } from "@reach/router";

class Login extends React.Component {
  // static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      isRegister: false,
      nameError: "",
      passError: "",
      emailError: "",
      confirmpassError: "",
      loggedin: false,
    };
    this.login = () => {
      console.log("state", this.state);
      const data = {
        username: this.state.username,
        password: this.state.password,
      };
      fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
        body: JSON.stringify(data),
      }).then((result) => {
        // if (result.status === 200) {
        result.json().then((resp) => {
          console.log(resp);
          // this.context.LoginUser();
          this.setState({ loggedin: true });
          localStorage.setItem("auth", resp.access);
          navigate("/");
        });
        // }
      });
    };
  }
  render() {
    return (
      <div class="container">
        <h2>Login</h2>
        <label for="username">Username:</label>
        <input
          class="form-control"
          type="text"
          placeholder="Username"
          onChange={(e) => {
            this.setState({ username: e.target.value });
          }}
          id="username"
        />{" "}
        <br />
        <label for="pwd">Password:</label>
        <input
          class="form-control"
          type="text"
          placeholder="Password"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
          id="pwd"
        />{" "}
        <br />
        <button class="btn btn-primary" onClick={this.login}>
          Log In
        </button>
        <p>
          New User?
          <span>
            <Link style={{ backgroundColor: "unset" }} to="/signin">
              Join Here{" "}
            </Link>
          </span>
        </p>
      </div>
    );
  }
}

export default Login;
