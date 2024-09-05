import Square from "./square";

export default function () {
    return (
        <div style={{ display: 'flex' }}>
            <div className="board-row">
                <Square value="1"></Square>
                <Square value="1"></Square>
                <Square value="1"></Square>
            </div>

            <div className="board-row">
                <Square value="1"></Square>
                <Square value="1"></Square>
                <Square value="1"></Square>
            </div>

            <div className="board-row">
                <Square value="1"></Square>
                <Square value="1"></Square>
                <Square value="1"></Square>
            </div>
        </div>
    )
}