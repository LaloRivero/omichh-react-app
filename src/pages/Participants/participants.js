import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import ParticipantTable from "../../components/ParticipantTable/participantTable";
import team from "../../assets/Team-amico.svg";
import Http from "../../libs/http";
import "./participants.css";
class Participants extends React.Component {
  state = {
    theme: "light",
    omi: null,
    omis: null,
    omip: null,
  };
  componentDidMount() {
    this.getParticipants();
  }

  getParticipants = async () => {
    let response = await Http.instance.get_participants();
    const data = response.results;
    console.log(data);
    this.setState({
      omi: data.filter((participant) => participant.category === "OMI"),
      omis: data.filter((participant) => participant.category === "OMIS"),
      omip: data.filter((participant) => participant.category === "OMIP"),
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="participants">
          <Navbar theme={this.state.theme} />
          <div className="participants__hero">
            <img className="hero__img" src={team} alt="team" />
            <div className="hero__text">
              <h3>
                A continuación podrás consultar la lista de los alumnos
                inscritos en la Olimpiada Mexicana de informática en Chihuahua.
              </h3>
            </div>
          </div>
          {this.state.omi ? (
            <ParticipantTable data={this.state.omi} category={"OMI"} />
          ) : null}
          {this.state.omis ? (
            <ParticipantTable data={this.state.omis} category={"OMIS"} />
          ) : null}
          {this.state.omip ? (
            <ParticipantTable data={this.state.omip} category={"OMIP"} />
          ) : null}
          <Footer theme={this.state.theme} />
        </div>
      </React.Fragment>
    );
  }
}

export default Participants;
