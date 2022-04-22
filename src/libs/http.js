import URL from "./url.js";

class Http {
  static instance = new Http();

  get_participants = async () => {
    try {
      const request = await fetch(`${URL.omichh_api}/participants/`);
      const response = await request.json();
      return response;
    } catch (err) {
      throw Error(err);
    }
  };

  get_schools = async () => {
    try {
      const request = await fetch(`${URL.omichh_api}/schools/`);
      const response = await request.json();
      return response;
    } catch (err) {
      throw Error(err);
    }
  };

  get_school = async (id) => {
    try {
      const request = await fetch(`${URL.omichh_api}/schools/${id}/`);
      const response = await request.json();
      return response;
    } catch (err) {
      throw Error(err);
    }
  };

  add_participant = async (participant) => {
    try {
      const request = await fetch(`${URL.omichh_api}/participants/`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(participant),
      });
      const status = request.status;
      const response = await request.json();
      if (status === 400) {
        return { error: true, ...response };
      } else if (status === 201) {
        return { error: false, response: "El alumno fue creado con exito!" };
      }
    } catch (err) {
      throw Error(err);
    }
  };

  add_school = async (school) => {
    try {
      const request = await fetch(`${URL.omichh_api}/schools/`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(school),
      });
      const status = request.status;
      const response = await request.json();
      if (status === 400) {
        return { error: true };
      }
      return response;
    } catch (err) {
      throw Error(err);
    }
  };

  verify_account = async (token) => {
    try {
      const request = await fetch(`${URL.omichh_api}/verify/`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(token),
      });
      const response = await request.json();
      return response
    } catch (err) {
      return Error(err);
    }
  };
}

export default Http;
