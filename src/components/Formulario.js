import { Button, Form } from "react-bootstrap";
import { trivia_categories } from "../data/dataCategorias";
import { dificultades } from "../data/dataDificulad";
import useSelect from "../hooks/useSelect";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Formulario = ({
  inputNombre,
  setInputNombre,
  setCategory,
  setDificultad,
}) => {
  const [category, SelectCategory] = useSelect(
    "General Knowledge",
    trivia_categories,
    "Categoria:"
  );
  const [dificultad, SelectDificultad] = useSelect(
    "easy",
    dificultades,
    "Dificultad"
  );
  const handleChangeName = ({ target }) => {
    setInputNombre(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory(category);
    setDificultad(dificultad);
    setInputNombre(inputNombre);
    console.log(category);
    console.log(dificultad);
    console.log(inputNombre);
  };

  return (
    <>
      <div className="min-h-full flex items-left justify-left form-color">
        <div className="max-w-md w-full space-y-8n">
          <div></div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <div className="columns-2">
                <div>
                  <p className="mt-2 text-left text-sm text-gray-600">
                    Usuario:
                  </p>
                </div>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={inputNombre}
                  onChange={handleChangeName}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <SelectCategory />
              <SelectDificultad />
            </Form.Group>
            <Button type="submit">Ingresar</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Formulario;
