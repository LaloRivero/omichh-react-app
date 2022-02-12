import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import ParticipantTable from "../../components/ParticipantTable/participantTable";
import team from "../../assets/Team-amico.svg";
import URL from "../../libs/url";
import "./participants.css";

const url = `${URL.omichh_api}/participants/`

const Participants = () => {
  const [participantsOMI, setParticipantsOMI] = useState([]);
  const [participantsOMIS, setParticipantsOMIS] = useState([]);
  const [participantsOMIP, setParticipantsOMIP] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data =>{
      setParticipantsOMI(
        data.results.filter((participant) => participant.category === "OMI")
      );
      setParticipantsOMIS(
        data.results.filter((participant) => participant.category === "OMIS")
      );
      setParticipantsOMIP(
        data.results.filter((participant) => participant.category === "OMIP")
      );
    })
  }, []);

  return (
    <React.Fragment>
      <div className="participants">
        <Navbar theme={"light"} />
        <div className="participants__hero">
          <img className="hero__img" src={team} alt="team" />
          <div className="hero__text">
            <h3>
              A continuación podrás consultar la lista de los alumnos inscritos
              en la Olimpiada Mexicana de informática en Chihuahua.
            </h3>
          </div>
        </div>
        <ParticipantTable data={participantsOMI} category={"OMI"} />
        <ParticipantTable data={participantsOMIS} category={"OMIS"} />
        <ParticipantTable data={participantsOMIP} category={"OMIP"} />
        <Footer theme={"light"} />
      </div>
    </React.Fragment>
  );
};

export default Participants;
