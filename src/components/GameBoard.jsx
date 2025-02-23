function GameBoard({ changeActivePlayer, currBoard }) {

    function handleClick(rowIndex, colIndex) {
        changeActivePlayer(rowIndex, colIndex);
    }
    
    return (
        <ol id="game-board">
            {
                currBoard.map((row, rowIndex) => {
                    return (
                        <li key={rowIndex}>
                            <ol>
                                {
                                    row.map((playerSymbol, colIndex) => {
                                        return (
                                            <li key={colIndex}>
                                                <button onClick={() => handleClick(rowIndex, colIndex)} disabled={currBoard[rowIndex][colIndex] !== null}>{playerSymbol}</button>
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </li>
                    )
                })
            }
        </ol>
    )
}

export default GameBoard;