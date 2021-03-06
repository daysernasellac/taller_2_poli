import React from "react";
import { useOutletContext, Outlet, useParams } from "react-router-dom";
import "./preguntas.css";

const Preguntas = () => {
    const [puntuacion, selectQuestion] = useOutletContext().puntuacion;
    const { questions, handleGameOver, isBlockQuestion } = useOutletContext();
    const { pregunta } = useParams();

    const currentQuestion =
        questions?.length > 0 ? questions[pregunta - 1] : null;

    return (
        <div id="preguntas" className="preguntas-container">
            <Outlet
                context={[
                    currentQuestion,
                    selectQuestion,
                    handleGameOver,
                    isBlockQuestion,
                ]}
            />
        </div>
    );
};

export default Preguntas;
