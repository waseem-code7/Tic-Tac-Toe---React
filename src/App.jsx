import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const INITIAL_PLAYERS = {
  "X": "Player 1",
  "Y": "Player 2"
}

function isGameOver(activePlayer, currBoard, moves) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const first = currBoard[combination[0].row][combination[0].column]
    const second = currBoard[combination[1].row][combination[1].column]
    const third = currBoard[combination[2].row][combination[2].column]

    if (first !== null && (first === second && second === third)) {
      winner = activePlayer === "X" ? "O" : "X";
    }
  }

  if (winner === null && moves.length === 9) {
    winner = "Draw";
  }

  return winner
}

function getCurrentPlayer(allMoves) {
  if (allMoves.length === 0) {
    return "X";
  }
  const lastMove = allMoves[allMoves.length - 1];
  if (lastMove.player === "O") {
    return "X";
  }
  return "O";
}

function App() {
  const [moves, updateMoves] = useState([]);

  const currBoard = board.map((row) => [...row]);

  for (const move of moves) {
    const { square, player } = move;
    const { rowIndex, colIndex } = square;
    currBoard[rowIndex][colIndex] = player;
  }

  function resetBoard() {
    updateMoves([]);
  }

  const activePlayer = getCurrentPlayer(moves);

  const winner = isGameOver(activePlayer, currBoard, moves);


  function updateMovesAndChangePlayer(rowIndex, colIndex) {
    updateMoves((prevMoves) => {
      const newMoves = [...prevMoves];
      newMoves.push(
        {
          "square": {
            "rowIndex": rowIndex,
            "colIndex": colIndex
          },
          "player": activePlayer
        }
      )
      return newMoves;
    })
  }

  return (
    <main>
      <div id="game-container">

        <ol id="players" className="highlight-player">
          <Player name={INITIAL_PLAYERS.X} symbol="X" isActive={activePlayer === "X"} />
          <Player name={INITIAL_PLAYERS.Y} symbol="O" isActive={activePlayer === "O"} />
        </ol>

        <GameBoard changeActivePlayer={updateMovesAndChangePlayer} currBoard={currBoard} />
        {winner && <GameOver winner={winner} isDraw={winner === "Draw"} resetBoard={resetBoard} />}
      </div>
      <Log moves={moves} />
    </main>
  )
}

export default App
