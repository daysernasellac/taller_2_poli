import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ArticlesItem from "./ArticlesItem";

const Articles = ({ articles }) => {
    const [puntuacion, setPuntuacion] = useOutletContext().puntuacion;
    return (
        <h1>
            Hello Question{" "}
            <button
                onClick={() => {
                    setPuntuacion(puntuacion + 1);
                }}
            >
                Jugar
            </button>
        </h1>
    );
};

export default Articles;
