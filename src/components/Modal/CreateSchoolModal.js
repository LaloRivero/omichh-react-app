import React from "react";
import "./CreateSchoolModal.css";

class CreateSchoolModal extends React.Component {
  state = {
    form: {},
  };

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
    console.log(this.state.form);
  };

  render() {
    if (this.props.showModal) {
      return (
        <div className="ModalForm">
          <div className="Modal__container">
            <p >Registra a tu escuela</p>
            <form>
              <label>Nombre de la Escuela</label>
              <input
                className="form__input"
                type="text"
                name="name"
                required
                onChange={this.handleChange}
              />
              <label>Categoría</label>
              <select
                className="form__select"
                name="category"
                onChange={this.handleChange}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="OMI">Media Superior</option>
                <option value="OMIS">Secundaria</option>
                <option value="OMIP">Primaria</option>
              </select>
              <label>Dirección</label>
              <input
                className="form__input"
                type="text"
                name="direction"
                required
                onChange={this.handleChange}
              />
              <label>Nombre del director</label>
              <input
                className="form__input"
                type="text"
                name="principal_name"
                required
                onChange={this.handleChange}
              />
              <label>Correo electrónico del director</label>
              <input
                className="form__input"
                type="text"
                name="principal_email"
                required
                onChange={this.handleChange}
              />
            </form>
          </div>
        </div>
      );
    }
  }
}

export default CreateSchoolModal;
