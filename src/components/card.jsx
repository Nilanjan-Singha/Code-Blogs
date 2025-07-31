import React, { useMemo } from "react";
import Markdownfetch from "./markdownfetch";

const bgColors = [
    "#FFD700", // gold
    "#FFB6C1", // light pink
    "#87CEEB", // sky blue
    "#90EE90", // light green
    "#FFA07A", // light salmon
    "#D3D3D3", // light gray
    "#E6E6FA", // lavender
    "#FFFACD", // lemon chiffon
    "#fff"
];

function getRandomColor() {
    return bgColors[Math.floor(Math.random() * bgColors.length)];
}

export default function Card({ title, shortdesc, file}) {
    // useMemo ensures color stays the same for this card instance
    const bgColor = useMemo(() => getRandomColor(), []);

    return (
        <div className="card" style={{ backgroundColor: bgColor }}>
            <h2>{title}</h2>
            <p>{shortdesc}</p>
        </div>
    );
}