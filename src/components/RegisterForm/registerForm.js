import React from "react";
import Http from '../../libs/http'
import logo from '../../assets/logo_white.svg'
import "./registerForm.css";

class RegisterForm extends React.Component {
  state={
    schools:[],
  }

  componentDidMount(){
    this.getSchools()
  }

  getSchools = async () =>{
    const schools = await Http.instance.get_schools()
    this.setState({schools:schools.results})
  }

  render() {
    return (
      <React.Fragment>
        <div className="registerForm">
          <form className="form__container">
            <div className='form__logo'>
              <img src={logo} alt='logo' />
            </div>
            <label>Nombre(s)</label><br/>
            <input className='form__input' type='text' name='first_name'></input>
            <br/><label>Apellido(s)</label><br/>
            <input className='form__input' type='text' name='last_name'></input>
            <br/><label>Fecha de nacimiento</label><br/>
            <input className='form__input' type='text' name='last_name'></input>
            <br/><label>Teléfono de contacto</label><br/>
            <input className='form__input' type='text' name='last_name'></input>
            <br/><label>Correo electrónico</label><br/>
            <input className='form__input' type='text' name='email'></input>
            <br/><label>Categoría</label><br/>
            <select className='form__select'>
              <option value=''>Selecione una opción</option>
              <option value='OMI'>OMI</option>
              <option value='OMIS'>OMIS</option>
              <option value='OMIP'>OMIP</option>
            </select>
            <br/><label>Escuela</label><br/>
            <select className='form__select'>
              <option value=''>Seleccione una opción</option>
              {this.state.schools.map((school)=>{
                return <option key={school.id} value={school.name}>{school.name}</option>
              })}
            </select><br/>
            <a href="/register"> <small>Registra una nueva escuela</small></a>
            <br/><label>Año escolar</label><br/>
            <select className='form__select'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
            </select>
            <br/><label>Ciudad</label><br/>
            <input className='form__input' type='text' name='last_name'></input>
            <br/><label>Nombre del Padre o Tutor</label><br/>
            <input className='form__input' type='text' name='last_name'></input>
            <br/><label>Teléfono del Padre o Tutor</label><br/>
            <input className='form__input' type='text' name='last_name'></input>
            <br/><label>Correo electrónico del Padre o Tutor</label><br/>
            <input className='form__input' type='text' name='last_name'></input><br/>
            <button type='submit'>Registrar</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
