import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "../../common/auth";

import Formulario from "../../components/register/Formulario";
import "./login.css";

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (data) => {
        if (!data) navigate("/login");

        return AuthProvider.logIn(data)
            ? navigate(`/${data?.usuario}`)
            : navigate("/login");
    };
    return (
        <div id="login" className="">
            <h1 className="title">Trivia</h1>
            <h4 className="sub-title">llena el formulario para continuar</h4>
            <Formulario handleSubmit={handleSubmit} />
        </div>
    );
};

export default Login;
