import React from "react";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "", c_password: "" };

    this.register = () => {
      const data = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        c_password: this.state.c_password,
      };
      alert(this.state.username);
      fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((result) => {
        result.json().then((resp) => {
          console.log(resp.access);
          localStorage.setItem("auth", JSON.stringify(resp));
        });
      });
    };
  }
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={(e) => {
              this.setState({
                username: e.target.value,
              });
            }}
            placeholder="USERNAME"
          />{" "}
          <br />
          <br />
          <input
            type="text"
            onChange={(e) => {
              this.setState({
                email: e.target.value,
              });
            }}
            placeholder="E-MAIL"
          />{" "}
          <br />
          <br />
          <input
            type="text"
            onChange={(e) => {
              this.setState({
                password: e.target.value,
              });
            }}
            placeholder="PASSWORD"
          />{" "}
          <br />
          <br />
          <input
            type="text"
            onChange={(e) => {
              this.setState({
                c_password: e.target.value,
              });
            }}
            placeholder="CONFIRM PASSWORD"
          />{" "}
          <br />
          <br />
          <button onClick={this.register}>Register</button>
        </div>
      </div>
    );
  }
}

export default Signin;
