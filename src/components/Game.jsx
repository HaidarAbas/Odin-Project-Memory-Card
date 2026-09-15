import Header from "./Header"
import Footer from "./Footer"
import Board from "./Board"
import { useState } from "react"

export default function Game() {
  const [boardKey, setKey] = useState(crypto.randomUUID());
  const [score, setScore] = useState(0);
  const highScore = localStorage.getItem('highScore') ? +localStorage.getItem('highScore') : 0;

  const incrementScore = (addend) => { 
    setScore(score + addend);
  };

  return (
    <div className="game-container">
      <Header score={score} highScore={highScore} />
      <Board key={boardKey} incrementScore={incrementScore} score={score} highScore={highScore} />
      <Footer />
    </div>
  )
}