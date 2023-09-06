import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const initialValue = {
  email: "",
  password: "",
};

const Login = () => {
  const { store, actions } = useContext(Context);
  const [registerData, setRegisterData] = useState(initialValue);
  const navigate = useNavigate();
  const handleChange = (event) => {
    
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    const result = await actions.loginUser(registerData);
    if (result) return navigate("/private");
    alert("Inicio invalido");
  };
  return (
    <div className="text-center mt-5">
      <div className="container">Inicia sesion</div>
      <div className="card p-5">
        <input
          placeholder="email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Iniciar sesion</button>
      </div>
    </div>
  );
};

export default Login;