import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Formulario from "./components/Formulario";
import Articles from "./components/Articles";
// import Header from "./components/Header";
// import { APIKEY, COUNTRY, URLBASE } from "./data/apis";
import "./App.css";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./common/auth";

const App = () => {
    const [category, setCategory] = useState("");
    const [dificultad, setDificultad] = useState("");
    // const [inputNombre, setInputNombre] = useState("");
    // const [articles, setArticles] = useState([]);
    // top-headlines?country=${COUNTRY}&category=${category}&apiKey=${APIKEY}`;

    return (
        <Routes>
            <Route exact path="/login" element={<Formulario />} />
            <Route
                path="/"
                element={
                    <RequiredAuth redirectTo="/login">
                        <Layout />
                    </RequiredAuth>
                }
            >
                <Route path=":question" element={<Articles />} />
            </Route>
        </Routes>
    );
};

const RequiredAuth = ({ children, redirectTo }) =>
    AuthProvider.isAuth() ? children : <Navigate to={redirectTo} />;

export default App;
