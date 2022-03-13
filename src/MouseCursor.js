import React, { useEffect, useState } from "react";

const cursorStyle = { width: 10, height: 10, backgroundColor: "#FF0000" }

function MouseCursor(params) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMoveHandler = (e) => {
            let xPos = e.clientX;
            let yPos = e.clientY;
            setMousePos({ x: xPos, y: yPos })
        }
        window.addEventListener("mousemove", mouseMoveHandler)
        return () => {
            window.removeEventListener("mousemove", mouseMoveHandler);
        }
    }, []);

    return <div className="rounded-full border-2 border-black" style={{
        ...cursorStyle, transform: `translate(${mousePos.x}px,${mousePos.y}px)`, backgroundColor: params.color
    }}></div>
}

export default MouseCursor;