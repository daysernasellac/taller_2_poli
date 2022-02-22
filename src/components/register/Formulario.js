import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { trivia_categories } from "../../data/dataCategorias";
import { dificultades } from "../../data/dataDificulad";
import useSelect from "../../hooks/useSelect";
import "bootstrap/dist/css/bootstrap.min.css";
import "./formulario.css";

const es = {
    USUARIO: "Usuario",
    CATEGORIA: "Categoria",
    DIFICULTAD: "Dificultad",
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
        <Form onSubmit={handleSubmit}>
            <Form.Group className="f-group">
                <Form.Label>{es.USUARIO}</Form.Label>
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
                Continuar
            </Button>
        </Form>
    );
};

export default Formulario;
