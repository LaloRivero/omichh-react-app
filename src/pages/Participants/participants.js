import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./participants.css";

class Participants extends React.Component {
  state = {
    theme: "light",
  };
  render() {
    return (
      <React.Fragment>
        <div className="participants">
          <Navbar theme={this.state.theme} />
          <div className="participants__hero">
            <img src="" alt="" className="hero__img" />
            <div className="hero__search">
              <input type="text" />
            </div>
          </div>
          <h1>Participants</h1>
          <Footer theme={this.state.theme} />
        </div>
      </React.Fragment>
    );
  }
}

export default Participants;
