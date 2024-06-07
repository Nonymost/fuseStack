import { useState } from 'react';

const FeedbackBtn = ({ handleClick, btn }) => {
    return (
        <>
            <button onClick={handleClick}>{btn}</button>
        </>
    )
}

const Statisticline = (props) => {
    const { name, value } = props;
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>
                            {name}
                        </th>
                        <td>
                            {value}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
const Statistics = (props) => {
    console.log(props)
    const { good, neutral, bad, all } = props;
    if (all === 0) {
        return (<>
            <p>No entries!</p>
        </>)
    } else {
        return (
            <>
                <Statisticline name={"Good"} value={good}></Statisticline>
                <Statisticline name={"Neutral"} value={neutral}></Statisticline>
                <Statisticline name={"Bad"} value={bad}></Statisticline>
                <Statisticline name={"All"} value={all}></Statisticline>
            </>
        )
    }
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
        setAll(upGood + bad + neutral)

    }
    const handleNeutral = () => {
        const upNeutral = neutral + 1;
        setNeutral(upNeutral);
        setAll(good + bad + upNeutral);

    }
    const handleBad = () => {
        const upBad = bad + 1;
        setBad(upBad);
        setAll(upBad + good + neutral);

    }

    const handleStatistics = () => {
        setAverage((good - bad) / all);
        setPositive((good / all) * 100);
    }


    return (
        <>
            <h1>Give Feedback</h1>
            <FeedbackBtn handleClick={handleGood} btn={"good"}></FeedbackBtn>
            <FeedbackBtn handleClick={handleNeutral} btn={"neutral"}></FeedbackBtn>
            <FeedbackBtn handleClick={handleBad} btn={"bad"}></FeedbackBtn>
            <h1>Statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} all={all}></Statistics>

        </>
    );
}

// export default App;