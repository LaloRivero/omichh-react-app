import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "./participantTable.css";
import search_icon from "../../assets/search.png";

const ParticipantTable = (props) => {
  const [search, setSearch] = useState("");

  const filteredParticipants = props.data.filter((participant) => {
    return (
      participant.first_name.toLowerCase().includes(search.toLowerCase()) ||
      participant.last_name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.first_name,
      sortable: true,
    },
    {
      name: "Apellido",
      selector: (row) => row.last_name,
      sortable: true,
    },
    {
      name: "Escuela",
      selector: (row) => row.school.name,
      sortable: true,
    },
    {
      name: "Verificado",
      selector: (row) => {
        if (row.is_verified) {
          return "✔";
        } else {
          return "❌";
        }
      },
      sortable: true,
    },
  ];
  return (
    <React.Fragment>
      <div className="dataTable__container">
        <div className="dataTable__tableTitle">
          <h3>{"Participantes " + props.category}</h3>
          <div className="search__input">
            <img className="search__icon" src={search_icon} alt="search" />
            <input
              className="input"
              value={search}
              onChange={handleSearch}
              type="text"
            />
          </div>
        </div>
        <div className="dataTable__content">
          <DataTable
            columns={columns}
            data={filteredParticipants}
            highlightOnHover={true}
            noDataComponent={"No hay alumnos inscritos"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ParticipantTable;
