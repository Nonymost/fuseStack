// import { useState } from 'react';

const Course = ({ course }) => {
    // console.log(course);
    // const { course } = course;
    return (
        <>
            <h1>{course.name}</h1>
            <ul>
                {course.parts.map(c => <p key={c.id}>{c.name} : {c.exercises}</p>)}
                {"Total : " + course.parts.reduce((t, c) => t + c.exercises, 0)}
            </ul>
        </>
    );
}

function App() {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamental of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return (
        <>
            <Course course={course}></Course>
        </>
    );
}
// export default App;