function Log({ moves }) {
    return (<ol id="log">
        {moves.map(function (move) {
            return (
                <li key={`${move.square.rowIndex}-${move.square.colIndex}`}>
                    row {move.square.rowIndex} - col {move.square.colIndex} - player {move.player}
                </li>
            )
        })}
    </ol>)
}

export default Log;