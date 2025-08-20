import { useState } from "react";

function Feedback({ onGood, onNeutral, onBad }) {
  return (
    <div>
      <h1>Feedback</h1>
      <Button text={"Good"} onClick={onGood} />
      <Button text={"Neutral"} onClick={onNeutral} />
      <Button text={"Bad"} onClick={onBad} />
    </div>
  );
}

function Button({ text, ...rest }) {
  return <button {...rest}>{text}</button>;
}

function StatLine({ text, val }) {
  return (
    <tbody>
      <tr>
        <td>{text} </td>
        <td>{val}</td>
      </tr>
    </tbody>
  );
}

function Stats({ good, neutral, bad }) {
  if (good + neutral + bad === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No Feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <StatLine text={"Good"} val={good} />
        <StatLine text={"Neutral"} val={neutral} />
        <StatLine text={"Bad"} val={bad} />
        <StatLine text={"All"} val={good + neutral + bad} />
        <StatLine
          text={"Average"}
          val={((good - bad) / (good + neutral + bad)).toFixed(2)}
        />
        <StatLine
          text={"Positive"}
          val={((good * 100) / (good + neutral + bad)).toFixed(2) + "%"}
        />
      </table>
    </div>
  );
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleSetReview = (review, SetReview) => () => {
    SetReview(review + 1);
  };

  return (
    <div>
      <Feedback
        onGood={handleSetReview(good, setGood)}
        onNeutral={handleSetReview(neutral, setNeutral)}
        onBad={handleSetReview(bad, setBad)}
      />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
