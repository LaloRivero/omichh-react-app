import URL from "./url.js";

class Http {
  static instance = new Http();

  get_participants = async () => {
    try {
      const request = await fetch(`${URL.omichh_api}/participants/`);
      const response = await request.json();
      return response;
    } catch (error) {
      throw Error(error);
    }
  };

  get_schools = async () => {
    try {
      const request = await fetch(`${URL.omichh_api}/schools/`);
      const response = await request.json();
      return response;
    } catch (error) {
      throw Error(error);
    }
  };

  get_school = async (id) => {
    try {
      const request = await fetch(`${URL.omichh_api}/schools/${id}/`);
      const response = await request.json();
      return response;
    } catch (error) {
      throw Error(error);
    }
  };

  add_participant = async (participant) => {
    try {
      const request = await fetch(`${URL.omichh_api}/participants/`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(participant),
      });
      const response = await request.json();
      return response;
    } catch (error) {
      throw Error(error);
    }
  };

  add_school = async (school) => {
    try {
      const request = await fetch(`${URL.omichh_api}/schools/`, {
        method: "POST",
        body: JSON.stringify(school),
      });
      const response = await request.json();
      return response;
    } catch (error) {
      throw Error(error);
    }
  };
}

export default Http;
