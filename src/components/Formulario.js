import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { trivia_categories } from "../data/dataCategorias";
import { dificultades } from "../data/dataDificulad";
import useSelect from "../hooks/useSelect";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const es = {
  CATEGORIA: "Categoria:",
  DIFICULTAD: "Dificultad:",
};

const Formulario = () => {
  const [inputNombre, setInputNombre] = useState("");
  const [category, SelectCategory] = useSelect(
    trivia_categories[0], // initial state
    trivia_categories,
    es.CATEGORIA
  );
  const [dificultad, SelectDificultad] = useSelect(
    dificultades[0], // initial state
    dificultades,
    es.DIFICULTAD
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(category);
    console.log(dificultad);
    console.log(inputNombre);
  };

  return (
    <>
      <div className="min-h-full flex items-left justify-left form-color">
        <div className="max-w-md w-full space-y-8n">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Usuario:</Form.Label>
              <Form.Control
                type="text"
                required
                value={inputNombre}
                onChange={(e) => setInputNombre(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <SelectCategory />
            <SelectDificultad />
            <Button type="submit" className="m-t-12">
              Ingresar
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Formulario;
