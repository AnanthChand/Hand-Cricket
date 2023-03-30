import React from "react";
import { useState } from "react";

export default function OddEvenGame() {
  const [playerChoice, setPlayerChoice] = useState("odd");
  const [playerNumber, setPlayerNumber] = useState(0);
  const [computerNumber, setComputerNumber] = useState(0);
  const [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const computerNumber = Math.floor(Math.random() * 7);
    setComputerNumber(computerNumber);
    const sum = playerNumber + computerNumber;
    const isEven = sum % 2 === 0;
    const playerWins =
      (playerChoice === "even" && isEven) ||
      (playerChoice === "odd" && !isEven);
    setResult(playerWins ? "You win!" : "You lose!");
  }
  let image = null;

  if (playerNumber === 0) {
    image = <img src="/score-0.gif" alt="Image 0" />;
  } else if (playerNumber === 1) {
    image = <img src="/score-1.gif" alt="Image 1" />;
  } else if (playerNumber === 2) {
    image = <img src="/score-2.gif" alt="Image 2" />;
  }else if (playerNumber === 3) {
    image = <img src="/score-3.gif" alt="Image 3" />;
  } else if (playerNumber === 4) {
    image = <img src="/score-4.gif" alt="Image 4" />;
  }else if (playerNumber === 5) {
    image = <img src="/score-5.gif" alt="Image 5" />;
  } else if (playerNumber === 6) {
    image = <img src="/score-6.gif" alt="Image 6" />;
  }

  return (
    <div>
      <h1>Odd or Even Game</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Choose odd or even:
          <select
            value={playerChoice}
            onChange={(event) => setPlayerChoice(event.target.value)}
          >
            <option value="odd">Odd</option>
            <option value="even">Even</option>
          </select>
        </label>
        <br />
        <label>
          Your number (0-6):
          <input
            type="number"
            min="0"
            max="6"
            value={playerNumber}
            onChange={(event) =>
              setPlayerNumber(parseInt(event.target.value, 10))
            }
          />
          {image}
        </label>
        <br />
        <label>
          Computer's number (0-6):
          <input
            type="number"
            min="0"
            max="6"
            readOnly
            value={computerNumber}
          />
        </label>
        <br />
        <button type="submit">Play</button>
      </form>
      <div>{result}</div>
    </div>
  );
}
