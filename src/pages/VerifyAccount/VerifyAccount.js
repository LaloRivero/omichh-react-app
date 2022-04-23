import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { ok, no_data } from "../../img/images";
import Http from "../../libs/http";

const VerifyAccount = () => {
  const { token } = useParams();
  const [error, setError] = useState(null);
  const user_token = {
    token: token,
  };
  useEffect(() => {
    const verifyAccount = async (user_token) => {
      let response = await Http.instance.verify_account(user_token);
      if (response.message !== "Account verification success") {
        setError(true);
      }
    };
    verifyAccount(user_token);
  });
  return (
    <>
      <Navbar theme={"light"} />
      {error ? (
        <div className="error_404__container">
          <h3>No se ha podido verificar tu registro.</h3>
          <img src={no_data} alt="error" />
        </div>
      ) : (
        <div className="error_404__container">
          <h3>Tu registro se a completado con éxito.</h3>
          <img src={ok} alt="accepted" />
        </div>
      )}
      <Footer theme={"light"} />
    </>
  );
};
export default VerifyAccount;
