import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import "./layout.css";
import { AuthProvider } from "../../common/auth";
import Scoreboard from "../scoreboard/Scoreboard";
const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState({});
    const [puntuacion, setPuntuacion] = useState(0);

    const handleExit = () => {
        AuthProvider.logOut(() => {
            navigate("login");
        });
    };

    const handleSetPuntacion = (newPuntuacion) => {
        if (newPuntuacion >= 11) return setPuntuacion(0);

        setPuntuacion(newPuntuacion);
    };

    useEffect(() => {
        const getUser = () => {
            try {
                setUser(JSON.parse(AuthProvider.isAuth()));
            } catch (error) {
                setUser({});
                navigate("/login");
            }
        };

        getUser();
        if (location.pathname === "/") navigate("/trivia");
    }, []);

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
                    <div className="left">
                        <Outlet
                            context={{
                                puntuacion: [puntuacion, handleSetPuntacion],
                            }}
                        />
                    </div>
                    <Scoreboard puntuacionActual={puntuacion} />
                </div>
            </div>
        </>
    );
};

export default Layout;
