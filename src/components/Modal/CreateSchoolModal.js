import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
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
            <div className="Modal__close_button">
              <AiFillCloseCircle
                className="Modal__close_icon"
                onClick={this.props.handleToggleModal}
              />
            </div>
            <form className="form__container">
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
              <label>
                Dirección{" "}
                <small>
                  (<i>Si no la conoces dejalo en blanco)</i>
                </small>
              </label>
              <input
                className="form__input"
                type="text"
                name="direction"
                onChange={this.handleChange}
              />
              <label>
                Nombre del director{" "}
                <small>
                  (<i>Si no lo conoces dejalo en blanco)</i>
                </small>
              </label>
              <input
                className="form__input"
                type="text"
                name="principal_name"
                onChange={this.handleChange}
              />
              <label>
                Correo electrónico del director{" "}
                <small>
                  (<i>Si no lo conoces dejalo en blanco)</i>
                </small>
              </label>
              <input
                className="form__input"
                type="text"
                name="principal_email"
                onChange={this.handleChange}
              />
              <div className="form__submit__container">
                <button className="form__submit" type="submit">
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default CreateSchoolModal;
