import { useState } from 'react';
import Note from './Notes'

const App = (props) => {
    const [notes, setNotes] = useState(props.notes);
    const [newNote, setNewNote] = useState(
        "a new note"
    )

    const addNotes = (event) => {
        event.preventDefault();
        const noteObject = {
            id: notes.length + 1,
            content: newNote,
        }
        setNotes(notes.concat(noteObject));
        setNewNote("");
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setNewNote(e.target.value);
    }

    return (<>
        <ul>
            {notes.map((note) => <Note key={note.id} note={note}></Note>)}
        </ul>
        <form onSubmit={addNotes}>
            <input value={newNote}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    </>);
}

export default App;