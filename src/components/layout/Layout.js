import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header";
import "./layout.css";
const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") navigate("/trivia");
    }, []);
    return (
        <div id="layout" className="container-fluid">
            <Header className="sticky" />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
