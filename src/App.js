import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Formulario from "./components/Formulario";
import Articles from "./components/Articles";
// import Header from "./components/Header";
// import { APIKEY, COUNTRY, URLBASE } from "./data/apis";
import "./App.css";
import Layout from "./components/layout/Layout";

const App = () => {
  const [category, setCategory] = useState("");
  const [dificultad, setDificultad] = useState("");
  // const [inputNombre, setInputNombre] = useState("");
  // const [articles, setArticles] = useState([]);
  // top-headlines?country=${COUNTRY}&category=${category}&apiKey=${APIKEY}`;

  return (
    <Routes>
      <Route exact path="/login" element={<Formulario />} />
      <Route path="/" element={<Layout />}>
        <Route path=":question" element={<Articles />} />
      </Route>
    </Routes>
  );
};

export default App;
