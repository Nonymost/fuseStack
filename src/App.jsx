// import { useState } from 'react';

function App({notes}) {

    // console.log(notes);
    return (
        <>
            <div>
                <h1>Notes</h1>
                <ul>
                    {notes.map((note,index) => <li key={index}>{note}</li>)}
                </ul>
            </div>
        </>
    );
}

export default App;