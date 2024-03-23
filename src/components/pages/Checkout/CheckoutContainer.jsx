import { useState } from "react";
import { Checkout } from "./Checkout";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({ name: "", lasName: "" });

  const envioFormulario = (event) => {
    event.preventDefault();
  };

  const capturar = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return <Checkout envioFormulario={envioFormulario} capturar={capturar} />;
};
