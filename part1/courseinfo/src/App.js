import React from "react";
import Course from "./components/Course";

const App = () => {
  const courses = [
    {
      id:1,
      name:'Half Stack application development',
      parts:[
        {
          name:'Fundamentals of React',
          exercise:10,
          id: 1
        },
        {
          name:'Using props to pass data',
          exercise:7,
          id:2
        },
        {
          name:'State of a components',
          exercise:14,
          id:3
        },
        {
          name:'Redux',
          exercises:11,
          id:4
        }
      ]
    },
    {
      id: 2,
      name:'Node.js',
      parts:[
        {
          name:'Routing',
          exercise: 3,
          id:1
        },
        {
          name:'Middlewares',
          exercise: 7,
          id:2
        }
      ]
    }
  ]

  const course = courses.map(value=><Course key={value.id} course={value}/>);
  return (
    <>
      {course}
    </>
  )
}

export default App;