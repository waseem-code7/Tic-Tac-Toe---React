function GameOver({ winner, isDraw, resetBoard}) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            <p>{!isDraw ? `${winner} won.` : "Game Draw."}</p>
            <p>
                <button onClick={resetBoard}>Rematch</button>
            </p>
        </div>
    );
}

export default GameOver;