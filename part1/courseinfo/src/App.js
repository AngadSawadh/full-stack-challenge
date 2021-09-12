import React from "react";

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercise}</p>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  const content = props.parts.map(value => <Part part={value}/>);
  return (
    <div>
      {content}
    </div>
  )
}

const Total = (props) => {
  let sum = 0;
  props.parts.forEach(value => {
    sum+=value.exercise;
  })
  return (
    <p>Number of Exercises:{sum}</p>
  )
}

const App = () => {
  const course = {
    name:'Half Stack application development',
    parts:[
      {
        name:'Fundamentals of React',
        exercise:10
      },
      {
        name:'Using props to pass data',
        exercise:7
      },
      {
        name:'State of a components',
        exercise:14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App;