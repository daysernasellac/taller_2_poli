import React from "react";
import { useOutletContext } from "react-router-dom";

import "./preguntas.css";
const Preguntas = () => {
    const [puntuacion, setPuntuacion] = useOutletContext().puntuacion;

    const handleSelectQuestion = () => {
        setPuntuacion(puntuacion + 1);
    };

    return (
        <div id="preguntas" className="preguntas-container">
            <div className="pregunta">
                How many points did LeBron James score in his first NBA game?
            </div>
            <div className="opciones">
                <div className="option correct" onClick={handleSelectQuestion}>
                    1
                </div>
                <div className="option wrong" onClick={handleSelectQuestion}>
                    2
                </div>
                <div className="option" onClick={handleSelectQuestion}>
                    3
                </div>
                <div className="option" onClick={handleSelectQuestion}>
                    4
                </div>
            </div>
        </div>
    );
};

export default Preguntas;
