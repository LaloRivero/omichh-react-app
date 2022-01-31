import React from "react";
import RegisterForm from "../../components/RegisterForm/registerForm";
import "./register.css";

class Register extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Register</h1>
        <RegisterForm/>
      </React.Fragment>
    );
  }
}

export default Register
