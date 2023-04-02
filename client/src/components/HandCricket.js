import React from 'react'

export default function HandCricket() {
  return (
    <div className="tossPage">
      <h1 className="title">Toss</h1>
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
  )
}
