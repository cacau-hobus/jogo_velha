import { useState } from "react";
import Square from "./square";

export default function () {

    const [squares, setSquares] = useState(Array(9).fill(''));

    function click(index) {
        const tempSquares = squares.slice();
        tempSquares[index] = 'O';
        setSquares(tempSquares);
        console.log("Clicou aqui!!", squares[index]);
    }

    return (
        <div className="board">
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => click(0)}/>
                <Square value={squares[1]} onSquareClick={() => click(1)}></Square>
                <Square value={squares[2]} onSquareClick={() => click(2)}></Square>
            </div>

            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => click(3)}></Square>
                <Square value={squares[4]} onSquareClick={() => click(4)}></Square>
                <Square value={squares[5]} onSquareClick={() => click(5)}></Square>
            </div>

            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => click(6)}></Square>
                <Square value={squares[7]} onSquareClick={() => click(7)}></Square>
                <Square value={squares[8]} onSquareClick={() => click(8)}></Square>
            </div>
        </div>
    )
}