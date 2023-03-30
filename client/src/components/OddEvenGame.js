import React from "react";
import { useState } from "react";


export default function OddEvenGame() {
    const [playerChoice, setPlayerChoice] = useState('odd');
    const [playerNumber, setPlayerNumber] = useState(0);
    const [computerNumber, setComputerNumber] = useState(0);
    const [result, setResult] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
      const computerNumber = Math.floor(Math.random() * 7);
      setComputerNumber(computerNumber);
      const sum = playerNumber + computerNumber;
      const isEven = sum % 2 === 0;
      const playerWins = (playerChoice === 'even' && isEven) || (playerChoice === 'odd' && !isEven);
      setResult(playerWins ? 'You win!' : 'You lose!');
    }
  
    return (
      <div>
        <h1>Odd or Even Game</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Choose odd or even:
            <select value={playerChoice} onChange={(event) => setPlayerChoice(event.target.value)}>
              <option value="odd">Odd</option>
              <option value="even">Even</option>
            </select>
          </label>
          <br />
          <label>
            Your number (0-6):
            <input type="number" min="0" max="6" value={playerNumber} onChange={(event) => setPlayerNumber(parseInt(event.target.value, 10))} />
          </label>
          <br />
          <label>
            Computer's number (0-6):
            <input type="number" min="0" max="6" readOnly value={computerNumber} />
          </label>
          <br />
          <button type="submit">Play</button>
        </form>
        <div>{result}</div>
      </div>
    );
  }





  