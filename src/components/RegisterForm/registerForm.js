import React from "react";
import Http from "../../libs/http";
import { logo_white } from "../../img/images";
import towns from "../../libs/towns";
import CreateSchoolModal from "../Modal/CreateSchoolModal";
import Loader from "../Loader/Loader";
import "./registerForm.css";

const Error = (data) => {
  return (
    <ul className="error_message">
      {data.error.email ? (
        <li>Ya existe un alumno con ese correo electronico</li>
      ) : null}
      {data.error.phone ? (
        <li>Ya existe un alumno registrado con ese número celular</li>
      ) : null}
    </ul>
  );
};

const RegisterFormUi = (props) => {
  return (
    <React.Fragment>
      <div className="registerForm">
        <form
          className="form__container"
          method="post"
          onSubmit={props.handelSubmit}
        >
          <div className="form__logo">
            <img src={logo_white} alt="logo" />
          </div>
          {props.error ? (
            <Error error={props.error_data} />
          ) : props.error_data.response ? (
            <div className="success_message">
              {props.error_data.response}
              <small>Ingresa a tu correo para verificar tu registro,</small>
              <small>si no encuentras el correo de verificación busca en la carpeta de spam.</small>
            </div>
          ) : null}
          <label>Nombre(s)</label>
          <br />
          <input
            className="form__input"
            type="text"
            name="first_name"
            onChange={props.handleChange}
            required
          ></input>
          <br />
          <label>Apellido(s)</label>
          <br />
          <input
            className="form__input"
            type="text"
            name="last_name"
            onChange={props.handleChange}
            required
          ></input>
          <br />
          <label>Fecha de nacimiento</label>
          <br />
          <input
            className="form__input"
            type="date"
            name="birthday"
            onChange={props.handleChange}
            required
          ></input>
          <br />
          <label>Teléfono de contacto</label>
          <br />
          <input
            className="form__input"
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            placeholder="ej. 6141234567"
            onChange={props.handleChange}
            required
          ></input>
          <br />
          <label>Correo electrónico</label>
          <br />
          <input
            className="form__input"
            type="email"
            name="email"
            onChange={props.handleChange}
            required
          ></input>
          <br />
          <label>Categoría</label>
          <br />
          <select
            className="form__select"
            name="category"
            onChange={props.handleChange}
            required
          >
            <option value="">Selecione una opción</option>
            <option value="OMI">OMI</option>
            <option value="OMIS">OMIS</option>
            <option value="OMIP">OMIP</option>
          </select>
          <br />
          <label>Escuela</label>
          <br />
          {/*<select
            className="form__select form__school"
            name="school"
            onChange={props.handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            {props.state.schools.map((school) => {
              if (school.category === props.state.form.category) {
                return (
                  <option key={school.id} value={school.name}>
                    {school.name}
                  </option>
                );
              } else {
                return null;
              }
            })}
          </select> 
          <br />
          <small onClick={props.handleToggleModal} className="form__new_school">
            Registra una nueva escuela
          </small>
          <br />*/}
          <label className="form__afterSchool">Año escolar</label>
          <br />
          <select
            className="form__select"
            name="grade"
            required
            onChange={props.handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <br />
          <label>Ciudad</label>
          <br />
          <select
            className="form__select"
            name="town"
            onChange={props.handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            {towns.map((town) => {
              return (
                <option key={town} value={town}>
                  {town}
                </option>
              );
            })}
          </select>
          <br />
          <label>Nombre del Padre o Tutor</label>
          <br />
          <input
            className="form__input"
            type="text"
            name="tutor_name"
            required
            onChange={props.handleChange}
          ></input>
          <br />
          <label>Teléfono del Padre o Tutor</label>
          <br />
          <input
            className="form__input"
            type="text"
            name="tutor_phone"
            pattern="[0-9]{10}"
            placeholder="ej. 6141234567"
            required
            onChange={props.handleChange}
          ></input>
          <br />
          <label>Correo electrónico del Padre o Tutor</label>
          <br />
          <input
            className="form__input"
            type="email"
            name="tutor_email"
            required
            onChange={props.handleChange}
          ></input>
          <br />
          <div className="form__submit__container">
            <button className="form__submit" type="submit">
              Registrar
            </button>
          </div>
        </form>
      </div>
      {props.state.showModal ? (
        <CreateSchoolModal
          showModal={props.state.showModal}
          handleToggleModal={props.handleToggleModal}
        />
      ) : null}
    </React.Fragment>
  );
};
class RegisterForm extends React.Component {
  state = {
    loading: false,
    error: null,
    error_data: {},
    schools: [],
    form: {
      type_of_participant: "student",
    },
    showModal: false,
  };

  componentDidMount() {
    this.getSchools();
  }

  getSchools = async () => {
    try {
      const schools = await Http.instance.get_schools();
      this.setState({ schools: schools.results });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  validateData = (data) => {
    let school_id = this.state.schools.filter(
      (school) => school.name === data.school
    );
    data.school = school_id[0].id;
    if (!data.phone.startsWith("+52")) {
      data.phone = `+52${data.phone}`;
    }
    if (!data.tutor_phone.startsWith("+52")) {
      data.tutor_phone = `+52${data.tutor_phone}`;
    }
    this.setState({ form: data });
  };

  handelSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, error: null });
    this.validateData(this.state.form);
    let response = await Http.instance.add_participant(this.state.form);
    this.setState({
      loading: false,
      error: response.error,
      error_data: response,
    });
  };

  handleToggleModal = () => {
    let toggleModal = this.state.showModal;
    if (toggleModal === true) {
      this.getSchools();
    }
    this.setState({ showModal: !toggleModal });
  };

  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
      <RegisterFormUi
        handleToggleModal={this.handleToggleModal}
        handelSubmit={this.handelSubmit}
        handleChange={this.handleChange}
        validateData={this.validateData}
        state={this.state}
        error={this.state.error}
        error_data={this.state.error_data}
      />
    );
  }
}

export default RegisterForm;
