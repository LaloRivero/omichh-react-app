import React from "react";
import RegisterForm from "../../components/RegisterForm/registerForm";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import "./register.css";

class Register extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="register">
          <Header theme="dark"></Header>
          <h1>Register</h1>
          <RegisterForm />
          <Footer theme="dark"></Footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
