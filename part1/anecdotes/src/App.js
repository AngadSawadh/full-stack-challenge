import React, { useState } from 'react'

const findIndexOfGreatest = (array) => {
  let greatest = 0;
  let idx = 0;
  for (let i=0; i<array.length; i++){
    if (array[i]>greatest){
      idx = i;
    }
  }
  return idx;
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  const [votes, setVotes] = useState(anecdotes.map(value => 0));
  const [selected, setSelected] = useState(0);
  const [maxVote, setMaxVote] = useState(0);

  const handleNext = () => {
    console.log((Math.floor(Math.random() * (anecdotes.length))));
    setSelected(Math.floor(Math.random() * (anecdotes.length)));
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] +=1
    setVotes(newVotes)
    setMaxVote(findIndexOfGreatest(votes))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNext}>Next Anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxVote]}</p>
      <p>has {votes[maxVote]} votes</p>
    </div>
  )
}

export default App;