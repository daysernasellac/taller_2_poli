import React from "react";

import Formulario from "../../components/register/Formulario";
import "./login.css";

const Login = () => {
    return (
        <div id="login" className="">
            <h1 className="title">Trivia</h1>
            <h4 className="sub-title">llena el formulario para continuar</h4>
            <Formulario />
        </div>
    );
};

export default Login;
