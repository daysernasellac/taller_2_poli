import React, { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";

import "./preguntas.css";
const PreguntasItem = () => {
    const [question, handleSelectQuestion] = useOutletContext();
    const [optionsList, setOptionsList] = useState();
    const [optionsRefs, setOptionsRefs] = useState([
        useRef(),
        useRef(),
        useRef(),
        useRef(),
    ]);

    /**
     * Metodo que recibe un array de respuestas incorrectas y
     * la respuesta correcta, luego llama al metodo que devuelve
     * la coleccion con las opciones revueltas.
     * @param {array} incorrects
     * @param {string} correct
     * @returns array de opciones con la respuesta correcta revuelta
     */
    const retrieveOptions = (incorrects, correct) => {
        const newOptions = incorrects.map((e) => {
            return {
                item: e,
                isCorrect: false,
            };
        });
        newOptions.push({
            item: correct,
            isCorrect: true,
        });

        return shuffle(newOptions);
    };

    /**
     * Metodo que recibe un array y lo revuelve
     * @param {array} arr
     * @returns array
     */
    const shuffle = (arr) => {
        let currentIndex = arr.length,
            randomIndex;

        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [arr[currentIndex], arr[randomIndex]] = [
                arr[randomIndex],
                arr[currentIndex],
            ];
        }

        return arr;
    };

    const clearStyles = () => {
        if (!optionsList) return;
        optionsRefs.map((refs) => {
            refs?.current?.classList.remove("correct");
            refs?.current?.classList.remove("wrong");
        });
    };

    useEffect(() => {}, []);

    useEffect(() => {
        if (!question) return;

        const newItem = {
            options: retrieveOptions(
                question.incorrect_answers,
                question.correct_answer
            ),
        };

        setOptionsList(newItem.options);
        clearStyles();
    }, [question]);

    return (
        <>
            <div className="pregunta">{question?.question}</div>
            <div className="opciones">
                {optionsList?.map((option, index) => (
                    <div
                        ref={optionsRefs[index]}
                        className="option"
                        key={index}
                        onClick={(e) => handleSelectQuestion(option, e.target)}
                    >
                        {option.item}
                    </div>
                ))}
            </div>
        </>
    );
};

export default PreguntasItem;
