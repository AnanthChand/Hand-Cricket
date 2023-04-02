import React from "react";
import { useState } from "react";
import score0 from "../assets/score-0.gif";
import score1 from "../assets/score-1.gif";
import score2 from "../assets/score-2.gif";
import score3 from "../assets/score-3.gif";
import score4 from "../assets/score-4.gif";
import score5 from "../assets/score-5.gif";
import score6 from "../assets/score-6.gif";

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
  let playerImage = null;
  let computerImage = null;

  if (result === "You win!") {
  } else if (result === "You lose!") {
  }

  if (playerNumber === 0) {
    playerImage = (
      <img
        src={score0}
        alt="Image 0"
        style={{ height: "200px", width: "200px" }}
      />
    );
  } else if (playerNumber === 1) {
    playerImage = (
      <img
        src={score1}
        alt="Image 1"
        style={{ height: "200px", width: "200px" }}
      />
    );
  } else if (playerNumber === 2) {
    playerImage = (
      <img
        src={score2}
        alt="Image 2"
        style={{ height: "200px", width: "200px" }}
      />
    );
  } else if (playerNumber === 3) {
    playerImage = (
      <img
        src={score3}
        alt="Image 3"
        style={{ height: "200px", width: "200px" }}
      />
    );
  } else if (playerNumber === 4) {
    playerImage = (
      <img
        src={score4}
        alt="Image 4"
        style={{ height: "200px", width: "200px" }}
      />
    );
  } else if (playerNumber === 5) {
    playerImage = (
      <img
        src={score5}
        alt="Image 5"
        style={{ height: "200px", width: "200px" }}
      />
    );
  } else if (playerNumber === 6) {
    playerImage = (
      <img
        src={score6}
        alt="Image 6"
        style={{ height: "200px", width: "200px" }}
      />
    );
  } else if (playerImage === null) {
    playerImage = (
      <img
        src={score0}
        alt="Image 0"
        style={{ height: "200px", width: "200px" }}
      />
    );
  }

  if (computerNumber === 0) {
    computerImage = (
      <img
        src={score0}
        alt="Image 0"
        style={{ height: "200px", width: "200px" }}
      />
    );
  } else if (computerNumber === 1) {
    computerImage = (
      <img
        src={score1}
        alt="Image 1"
        style={{ height: "200px", width: "200px" }}
      />
    );
  } else if (computerNumber === 2) {
    computerImage = (
      <img
        src={score2}
        alt="Image 2"
        style={{ height: "200px", width: "200px" }}
      />
    );
  } else if (computerNumber === 3) {
    computerImage = (
      <img
        src={score3}
        alt="Image 3"
        style={{ height: "200px", width: "200px" }}
      />
    );
  } else if (computerNumber === 4) {
    computerImage = (
      <img
        src={score4}
        alt="Image 4"
        style={{ height: "200px", width: "200px" }}
      />
    );
  } else if (computerNumber === 5) {
    computerImage = (
      <img
        src={score5}
        alt="Image 5"
        style={{ height: "200px", width: "200px" }}
      />
    );
  } else if (computerNumber === 6) {
    computerImage = (
      <img
        src={score6}
        alt="Image 6"
        style={{ height: "200px", width: "200px" }}
      />
    );
  } else if (computerNumber === null) {
    computerNumber = (
      <img
        src={score0}
        alt="Image 0"
        style={{ height: "200px", width: "200px" }}
      />
    );
  }

  return (
    <div className="tossPage">
      <h1 className="Tosstitle">Toss</h1>
      <p className="tossRules">
        <span>Rules: </span>At first choose Odd or even. And then, choose your
        score from 0-6. And click on Toss button. The computer too will choose a
        number. If the summation of two scores are similar with your choice of
        odd or even, you win.{" "}
      </p>
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
        <div className="Tossfield">
          <div className="playerField">
            {playerImage}
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
            </label>
          </div>
          <br />
          <div className="computerField">
            {computerImage}
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
          </div>
        </div>
        <br />
        <button type="submit">Play</button>
      </form>
      <h4>{result}</h4>
    </div>
  );
}
