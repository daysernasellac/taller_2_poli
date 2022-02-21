import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Articles from "./components/Articles";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { APIKEY, COUNTRY, URLBASE } from "./data/apis";
import "./App.css";

const App = () => {
  const [category, setCategory] = useState("");
  const [dificultad, setDificultad] = useState("");
  const [inputNombre, setInputNombre] = useState("");
  const [articles, setArticles] = useState([]);
  // top-headlines?country=${COUNTRY}&category=${category}&apiKey=${APIKEY}`;

  //ES6
  useEffect(() => {
    const searchArticles = async () => {
      console.log("Categoria url: " + category);
      console.log("Dificultad url: " + dificultad);
      const url = `${URLBASE}/api.php?amount=10&category=${category}&difficulty=${dificultad}y&type=multiple`;
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.articles);
    };
    searchArticles();
  }, [category]);

  return (
    <>
      <div className="App-header">
        <Container>
          <Row>
            <Col>
              <Formulario
                inputNombre={inputNombre}
                setCategory={setCategory}
                setDificultad={setDificultad}
                setInputNombre={setInputNombre}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
