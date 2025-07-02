import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const playGame = async (choice) => {
    try {
      const res = await axios.post('http://localhost:5000/play', { choice });
      const gameResult = res.data.result;
      setResult(gameResult);
      setComputerChoice(res.data.computer_choice);

      if (gameResult === 'You Win') {
        setPlayerScore(playerScore + 1);
      } else if (gameResult === 'You Lose') {
        setComputerScore(computerScore + 1);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1 className="title">Stone Paper Scissors</h1>

      <div className="scoreboard">
        <span className="player-score">Player: {playerScore}</span>
        <span className="vs">VS</span>
        <span className="computer-score">Computer: {computerScore}</span>
      </div>

      <div className="game-container">
        <div className="player-buttons">
          <button onClick={() => playGame('stone')}>
            <img src="/images/stone.png" alt="Stone" className="icon" />
            Stone
          </button>
          <button onClick={() => playGame('paper')}>
            <img src="/images/paper.png" alt="Paper" className="icon" />
            Paper
          </button>
          <button onClick={() => playGame('scissors')}>
            <img src="/images/scissors.png" alt="Scissors" className="icon" />
            Scissors
          </button>
        </div>

        <div className="computer-choice-tile">
          <h2>Computer Chose:</h2>
          {computerChoice && (
            <img
              src={`/images/${computerChoice}.png`}
              alt={computerChoice}
              className="computer-image"
            />
          )}
          <h2>{result}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
