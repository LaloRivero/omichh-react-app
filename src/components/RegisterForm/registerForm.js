import React from "react";
import Http from "../../libs/http";
import logo from "../../assets/logo_white.svg";
import towns from "../../libs/towns";
import CreateSchoolModal from "../Modal/CreateSchoolModal";
import "./registerForm.css";

class RegisterForm extends React.Component {
  state = {
    loading: false,
    error: null,
    schools: [],
    school_id: null,
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
    if (this.state.school_id == null) {
      this.setState({ school_id: school_id[0].id });
    }
    data.school = this.state.school_id;
    console.log(school_id);
    console.log(data.school);
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
    this.validateData(this.state.form);
    console.log(this.state.form);
    try {
      await Http.instance.add_participant(this.state.form);
      this.setState({ loading: true, error: null });
    } catch (err) {
      console.log(err);
      this.setState({ loading: false, error: err });
    }
  };

  handleToggleModal = () => {
    let toggleModal = this.state.showModal;
    this.setState({ showModal: !toggleModal });
  };

  render() {
    return (
      <React.Fragment>
        <div className="registerForm">
          <form
            className="form__container"
            method="post"
            onSubmit={this.handelSubmit}
          >
            <div className="form__logo">
              <img src={logo} alt="logo" />
            </div>
            <label>Nombre(s)</label>
            <br />
            <input
              className="form__input"
              type="text"
              name="first_name"
              onChange={this.handleChange}
              required
            ></input>
            <br />
            <label>Apellido(s)</label>
            <br />
            <input
              className="form__input"
              type="text"
              name="last_name"
              onChange={this.handleChange}
              required
            ></input>
            <br />
            <label>Fecha de nacimiento</label>
            <br />
            <input
              className="form__input"
              type="date"
              name="birthday"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
              required
            ></input>
            <br />
            <label>Correo electrónico</label>
            <br />
            <input
              className="form__input"
              type="email"
              name="email"
              onChange={this.handleChange}
              required
            ></input>
            <br />
            <label>Categoría</label>
            <br />
            <select
              className="form__select"
              name="category"
              onChange={this.handleChange}
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
            <select
              className="form__select form__school"
              name="school"
              onChange={this.handleChange}
              required
            >
              <option value="">Seleccione una opción</option>
              {this.state.schools.map((school) => {
                if (school.category === this.state.form.category) {
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
            <small
              onClick={this.handleToggleModal}
              className="form__new_school"
            >
              Registra una nueva escuela
            </small>
            <br />
            <label className="form__afterSchool">Año escolar</label>
            <br />
            <select
              className="form__select"
              name="grade"
              required
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            ></input>
            <br />
            <label>Correo electrónico del Padre o Tutor</label>
            <br />
            <input
              className="form__input"
              type="email"
              name="tutor_email"
              required
              onChange={this.handleChange}
            ></input>
            <br />
            <div className="form__submit__container">
              <button className="form__submit" type="submit">
                Registrar
              </button>
            </div>
          </form>
        </div>
        {this.state.showModal ?
          <CreateSchoolModal
            showModal={this.state.showModal}
            handleToggleModal={this.handleToggleModal}
          />: null }
      </React.Fragment>
    );
  }
}

export default RegisterForm;
