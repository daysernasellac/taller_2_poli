import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import "./finish.css";
const Finish = () => {
    const [searchParams] = useSearchParams();
    const [stats, setStats] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setStats(Object.fromEntries(searchParams));
    }, []);

    return (
        <div id="finish">
            <h1>Game over</h1>
            <h2>{stats?.name}</h2>
            <h3>
                tú puntuación: <br /> ${stats?.score}
            </h3>
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                volver a jugar
            </button>
        </div>
    );
};

export default Finish;
