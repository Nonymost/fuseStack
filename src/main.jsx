import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes = [
    {
        id: 0,
        content: "Timi timi lai samjhinchhu"
    },
    {
        id: 1,
        content: "Timi fula hau mero"
    },
    {
        id: 2,
        content: "Samjhana chhau timi"
    },
    {
        id: 3,
        content: "Ma maya mardina"
    },
];
ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)




