import React from "react";

const Part = ({part}) => {
    return (
        <p>{part.name} {part.exercise}</p>
    )
}
  
const Header = ({course}) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Content = ({course}) => {
    const content = course.parts.map(value => <Part key={value.id} part={value}/>);
    return (
        <div>
        {content}
        </div>
    )
}

const Total = ({course}) => {
    let sum = 0;
    course.parts.forEach(value => {
        sum+=value.exercise;
    })
    return (
        <p>Number of Exercises:{sum}</p>
    )
}

const Course = ({course}) => {
    return (
        <div>
        <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
        </div>
    )
}

export default Course;