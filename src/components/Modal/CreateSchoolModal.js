import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Loader from "../Loader/Loader";
import Http from "../../libs/http";
import "./CreateSchoolModal.css";

const Error = () => {
  return (
    <ul className="error_message">
      <li>Ya existe una escuela registrada con ese nombre</li>
    </ul>
  );
};
class ModalUI extends React.Component {
  render() {
    return this.props.loading ? (
      <Loader />
    ) : (
      <div className="ModalForm">
        <div className="Modal__container">
          <div className="Modal__close_button">
            <AiFillCloseCircle
              className="Modal__close_icon"
              onClick={this.props.handleToggleModal}
            />
          </div>
          {this.props.error ? <Error /> : null}
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
    loading: false,
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
  };

  handelSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, error: null });
    let response = await Http.instance.add_school(this.state.form);
    if (response.error) {
      this.setState({ loading: false, error: response });
    } else {
      this.props.handleToggleModal();
      this.setState({ loading: false, error: null });
    }
  };
  render() {
    return this.props.showModal ? (
      <ModalUI
        loading={this.state.loading}
        handelSubmit={this.handelSubmit}
        handleChange={this.handleChange}
        handleToggleModal={this.props.handleToggleModal}
        error={this.state.error}
      />
    ) : null;
  }
}

export default CreateSchoolModal;
