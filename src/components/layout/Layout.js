import React, { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../header/header";
import "./layout.css";
import { AuthProvider } from "../../common/auth";
import Scoreboard from "../scoreboard/scoreboard";
import { APIKEY, COUNTRY, URLBASE } from "../../data/apis";

const maxPointsAvailable = 10;

const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState({});
    const [puntuacion, setPuntuacion] = useState(0);
    const [questions, setQuestions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const handleExit = () => {
        AuthProvider.logOut(() => {
            navigate("login");
        });
    };

    const handleFinish = () => {
        AuthProvider.logOut(() => {
            navigate(`finish?name=${user.nombre}&score=${puntuacion}`);
        });
    };

    const handleSetPuntacion = (newPuntuacion) => {
        if (newPuntuacion >= maxPointsAvailable) {
            setPuntuacion(0);
            setCurrentQuestion(0);
            return;
        }

        setPuntuacion(newPuntuacion);
    };

    const handleSelectQuestion = (option, target) => {
        return new Promise((resolve, reject) => {
            if (!option.isCorrect) {
                target.classList.add("wrong");
                setTimeout(() => {
                    handleFinish();
                }, 5000);
            } else {
                target.classList.add("correct");
                setTimeout(() => {
                    handleSetPuntacion(puntuacion + 1);
                    setCurrentQuestion(currentQuestion + 1);
                }, 5000);
            }

            resolve();
        });
    };

    /**
     * Metodo que hace el llamado a la API
     * buscando las preguntas
     */
    const findQuestions = useCallback(async (userInfo) => {
        const { nombre, dificultad, categoria } = userInfo;

        if (!nombre || !dificultad || !categoria) return Promise.reject();
        // const url = `${URLBASE}/api.php?country=${COUNTRY}&amount=10&category=${categoria.value}&difficulty=${dificultad.label}&type=multiple&apiKey=${APIKEY}`;
        const url = `https://opentdb.com/api.php?amount=10&category=16&difficulty=easy&type=multiple`;

        setIsLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                if (response.response_code > 0) handleExit();
                setQuestions(response?.results);
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
    }, []);

    /**
     * Metodo que devulve la informacion del usuario
     */
    const getUser = useCallback(() => {
        return new Promise((resolve, reject) => {
            try {
                resolve(JSON.parse(AuthProvider.isAuth()));
            } catch (error) {
                reject(error);
            }
        });
    }, []);

    useEffect(() => {
        if (location.pathname === "/") navigate("/trivia");

        getUser()
            .then((user) => {
                setUser(user);
                findQuestions(user);
            })
            .catch((error) => {
                setUser({});
                navigate("/login");
            });
    }, []);

    useEffect(() => {
        if (location.pathname === "/trivia") {
            navigate(`${location.pathname}/${currentQuestion}`);
        }

        navigate(`/trivia/${currentQuestion}`);
    }, [currentQuestion]);

    return (
        <>
            <div id="layout" className="container-fluid">
                <Header
                    className="sticky"
                    user={user}
                    handleExit={handleExit}
                    puntuacion={puntuacion}
                />
                <div className="game-container">
                    {isLoading ? (
                        <div className="loading">cargando...</div>
                    ) : (
                        <>
                            <div className="left">
                                <Outlet
                                    context={{
                                        puntuacion: [
                                            puntuacion,
                                            handleSelectQuestion,
                                        ],
                                        questions,
                                    }}
                                />
                            </div>
                            <Scoreboard puntuacionActual={puntuacion} />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Layout;
