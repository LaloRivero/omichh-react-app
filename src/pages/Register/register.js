import React from "react";
import RegisterForm from "../../components/RegisterForm/registerForm";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./register.css";

class Register extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="register">
          <Navbar theme="dark"/>
          <div className="register__content">
            <h1 className="register__title">Register</h1>
            <RegisterForm />
          </div>
          <Footer theme="dark"/>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
