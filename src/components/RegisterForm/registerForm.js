import React from "react";
import Http from "../../libs/http";
import logo from "../../assets/logo_white.svg";
import "./registerForm.css";

class RegisterForm extends React.Component {
  state = {
    loading: false,
    error: null,
    schools: [],
    form: {},
  };

  componentDidMount() {
    this.getSchools();
  }

  getSchools = async () => {
    try {
      const schools = await Http.instance.get_schools();
      this.setState({ schools: schools.results });
    } catch (err) {}
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
    console.log(this.state.form);
    /*const form_elements = event.target.map((element)=>{
      return element
    }) */
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
            ></input>
            <br />
            <label>Apellido(s)</label>
            <br />
            <input
              className="form__input"
              type="text"
              name="last_name"
              onChange={this.handleChange}
            ></input>
            <br />
            <label>Fecha de nacimiento</label>
            <br />
            <input
              className="form__input"
              type="text"
              name="last_name"
              onChange={this.handleChange}
            ></input>
            <br />
            <label>Teléfono de contacto</label>
            <br />
            <input
              className="form__input"
              type="text"
              name="last_name"
              onChange={this.handleChange}
            ></input>
            <br />
            <label>Correo electrónico</label>
            <br />
            <input
              className="form__input"
              type="text"
              name="email"
              onChange={this.handleChange}
            ></input>
            <br />
            <label>Categoría</label>
            <br />
            <select
              className="form__select"
              name="category"
              onChange={this.handleChange}
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
            >
              <option value="">Seleccione una opción</option>
              {this.state.schools.map((school) => {
                return (
                  <option key={school.id} value={school.name}>
                    {school.name}
                  </option>
                );
              })}
            </select>
            <br />
            <a className="form__new_school" href="/register">
              {" "}
              <small>Registra una nueva escuela</small>
            </a>
            <br />
            <label className="form__afterSchool">Año escolar</label>
            <br />
            <select className="form__select" name="grade"
              onChange={this.handleChange}>
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
            <input className="form__input" type="text" name="town" onChange={this.handleChange}></input>
            <br />
            <label>Nombre del Padre o Tutor</label>
            <br />
            <input className="form__input" type="text" name="tutor_name" onChange={this.handleChange}></input>
            <br />
            <label>Teléfono del Padre o Tutor</label>
            <br />
            <input className="form__input" type="text" name="tutor_phone" onChange={this.handleChange}></input>
            <br />
            <label>Correo electrónico del Padre o Tutor</label>
            <br />
            <input className="form__input" type="text" name="tutor_email" onChange={this.handleChange}></input>
            <br />
            <div className="form__submit__container">
              <button className="form__submit" type="submit">
                Registrar
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
