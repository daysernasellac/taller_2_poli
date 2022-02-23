import React from "react";

import "./scoreboard.css";
const prices = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];

const Scoreboard = ({ puntuacionActual = 1 }) => {
    const createScoreboardItem = (price, index) => {
        return (
            <li
                className={`price-tag ${
                    puntuacionActual === index ? "active " : ""
                }`}
                key={index}
            >
                <div className="tag-content">
                    {index} ${price}
                </div>
            </li>
        );
    };

    return (
        <div id="scoreboard">
            {prices.map((price, index) =>
                createScoreboardItem(price, index + 1)
            )}
        </div>
    );
};

export default Scoreboard;
