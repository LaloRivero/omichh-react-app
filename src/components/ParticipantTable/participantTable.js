import React from "react";
import DataTable from "react-data-table-component";
import "./participantTable.css";

const ParticipantTable = (props) => {
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
      name: "Categoría",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Escuela",
      selector: (row) => row.school.name,
      sortable: true,
    },
    {
      name: "Verificado",
      selector : (row) => {
        if(row.is_verified){
          return "✔"
        }else{
          return "❌"
        }},
      sortable:true,
    }
  ];
  return (
    <React.Fragment>
      <div className="dataTable__container">
        <h3>{"Participantes " + props.category}</h3>
        <div className="dataTable__content">
          <DataTable
            columns={columns}
            data={props.data}
            highlightOnHover={true}
            noDataComponent={"No hay alumnos inscritos"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ParticipantTable;
