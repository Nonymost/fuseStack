const Hello = ({name, age}) => {
    const bornYear = () => new Date().getFullYear() - age; 
    return <>
        <div>
            <p>
                Hello {name}, you are {age} years old.
            </p>
            <p>
                So you're probably born in {bornYear()}
            </p>
        </div>
    </>
};

const Another = () => {
    return <>
        <Hello name="Ram" age={2}></Hello>
    </>
}

export default Another;