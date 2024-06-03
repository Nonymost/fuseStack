import { useState } from 'react';

const FeedbackBtn = ({ handleClick, btn }) => {
    return (
        <>
            <button onClick={handleClick}>{btn}</button>
        </>
    )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
    return (
        <>
            <h1>Statistics</h1>
            <p>Good : {good}</p>
            <p>Neutral : {neutral}</p>
            <p>Bad : {bad}</p>
            <p>All : {all}</p>
            <p>Average : {average}</p>
            <p>Positive : {positive}</p>
        </>
    )
}


const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);
    const [average, setAverage] = useState(0);
    const [positive, setPositive] = useState(0);
    
    const handleGood = () => {
        const upGood = good + 1;
        setGood(upGood);
        handleStatistics();

    }
    const handleNeutral = () => {
        const upNeutral = neutral + 1;
        setNeutral(upNeutral);
        handleStatistics();
    }
    const handleBad = () => {
        const upBad = bad + 1;
        setBad(upBad);
        handleStatistics();
    }

    const handleStatistics = () => {
        setAll(good + bad + neutral);
        setAverage((good - bad) / all);
        setPositive((good / all) * 100);
    }


    return (
        <>
            <h1>Give Feedback</h1>
            <FeedbackBtn handleClick={handleGood} btn={"good"}></FeedbackBtn>
            <FeedbackBtn handleClick={handleNeutral} btn={"neutral"}></FeedbackBtn>
            <FeedbackBtn handleClick={handleBad} btn={"bad"}></FeedbackBtn>
            <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}></Statistics>
        </>
    );
}

export default App;