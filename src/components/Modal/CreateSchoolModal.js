import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Http from "../../libs/http";
import "./CreateSchoolModal.css";

class ModalUI extends React.Component {
  render() {
    return (
      <div className="ModalForm">
        <div className="Modal__container">
          <div className="Modal__close_button">
            <AiFillCloseCircle
              className="Modal__close_icon"
              onClick={this.props.handleToggleModal}
            />
          </div>
          <form className="form__container" onSubmit={this.props.handelSubmit}>
            <label>Nombre de la Escuela</label>
            <input
              className="form__input"
              type="text"
              name="name"
              required
              onChange={this.props.handleChange}
            />
            <label>Categoría</label>
            <select
              className="form__select"
              name="category"
              onChange={this.props.handleChange}
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
              onChange={this.props.handleChange}
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
              onChange={this.props.handleChange}
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
              onChange={this.props.handleChange}
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
class CreateSchoolModal extends React.Component {
  state = {
    loading: true,
    error: null,
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

  handelSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.form);
    try {
      await Http.instance.add_school(this.state.form);
      this.setState({ loading: true, error: null });
      this.props.handleToggleModal();
    } catch (err) {
      console.log(err);
      this.setState({ loading: false, error: err });
    }
  };
  render() {
    return this.props.showModal ? (
      <ModalUI
        handleToggleModal={this.props.handleToggleModal}
        handelSubmit={this.handelSubmit}
        handleChange={this.handleChange}
      />
    ) : null;
  }
}

export default CreateSchoolModal;
