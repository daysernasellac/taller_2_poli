import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import "./layout.css";
import { AuthProvider } from "../../common/auth";
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
                <div className="container">
                    <Outlet
                        context={{
                            puntuacion: [puntuacion, setPuntuacion],
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Layout;
