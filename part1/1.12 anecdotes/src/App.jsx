import { useState } from "react";

const MostVoted = ({ mostVoted, anecdotes, votes }) => {
  console.log(mostVoted);
  if (votes[mostVoted] === 0) {
    return <p>No votes have been cast!</p>;
  }
  return <p>{anecdotes[mostVoted]}</p>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));

  const [selected, setSelected] = useState(0);

  const [mostVoted, setMostVoted] = useState(0);

  const voteInc = () => {
    const copy = { ...votes };
    copy[selected]++;
    if (copy[selected] > copy[mostVoted]) {
      setMostVoted(selected);
    }
    setVotes(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={voteInc}>Vote</button>
      <button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      >
        Next anecdote?
      </button>
      <h1>Anecdote with the most votes ({votes[mostVoted]} votes)</h1>
      <MostVoted anecdotes={anecdotes} mostVoted={mostVoted} votes={votes} />
    </div>
  );
};

export default App;
