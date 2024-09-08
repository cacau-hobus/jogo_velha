import { useState } from "react";
import Square from "./square";

export default function () {

    const [squares, setSquares] = useState(Array(9).fill(null));

    function click() {
        console.log("Clicou aqui!!")
    }

    return (
        <div className="board">
            <div className="board-row">
                <Square value="1" onSquareClick={click}/>
                <Square value="1" onSquareClick={click}></Square>
                <Square value="1" onSquareClick={click}></Square>
            </div>

            <div className="board-row">
                <Square value="1" onSquareClick={click}></Square>
                <Square value="1" onSquareClick={click}></Square>
                <Square value="1" onSquareClick={click}></Square>
            </div>

            <div className="board-row">
                <Square value="1" onSquareClick={click}></Square>
                <Square value="1" onSquareClick={click}></Square>
                <Square value="1" onSquareClick={click}></Square>
            </div>
        </div>
    )
}