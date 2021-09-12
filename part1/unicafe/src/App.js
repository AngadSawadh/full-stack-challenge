import React, { useState } from 'react'

const Button = ({handleVote,voteName}) => {
  return (
    <button onClick={handleVote}>{voteName}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({votes}) => {
  if ((votes.good + votes.neutral + votes.bad) > 0){
    return (
      <div>
        <h1>Stats</h1>
        <table>
          <tbody>
            <StatisticLine text='Good' value={votes.good}/>
            <StatisticLine text='Neutral' value={votes.neutral}/>
            <StatisticLine text='Bad' value={votes.bad}/>
            <StatisticLine text='Total' value={votes.good+votes.bad+votes.neutral}/>
            <StatisticLine text='Average' value={(votes.good-votes.bad)/(votes.good+votes.neutral+votes.bad)}/> 
            <StatisticLine text='Percentage of positive feedback' value={votes.good*100/(votes.good+votes.neutral+votes.bad)}/>
          </tbody>
        </table>
      </div>
    )
  }
  else {
    return (
      <p>No feedback given</p>
    )
  }
  
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGood = () => {
    setGood(good+1);
  }
  const handleNeutral = () => {
    setNeutral(neutral+1);
  }
  const handleBad = () => {
    setBad(bad+1);
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleVote={handleGood} voteName='Good'/>
      <Button handleVote={handleNeutral} voteName='Neutral'/>
      <Button handleVote={handleBad} voteName='Bad'/>
      <Statistics votes={{good, neutral, bad}}/>
    </div>
  )
}

export default App;
