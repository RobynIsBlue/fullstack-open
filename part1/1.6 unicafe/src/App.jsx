import { useState } from "react";

function Feedback({ onGood, onNeutral, onBad }) {
  return (
    <div>
      <h1>Feedback</h1>
      <button onClick={onGood}>Good</button>
      <button onClick={onNeutral}>Neutral</button>
      <button onClick={onBad}>Bad</button>
    </div>
  );
}

function Stats({ good, neutral, bad }) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
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
