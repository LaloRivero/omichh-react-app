import React from "react";
import RegisterForm from "../../components/RegisterForm/registerForm";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./register.css";

const srcFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSfdP0E-6479qC9Q5q243TwiPogg3DPEXYjz6DnnxyckwZ2TiQ/viewform?embedded=true"
class Register extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="register">
          <Navbar theme="dark"/>
          <div className="register__content">
            <h1 className="register__title">Registro</h1>
            <iframe
              src={srcFormURL}
              width="640"
              height="1720"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            />
          </div>
          <Footer theme="dark"/>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
