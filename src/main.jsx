import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes = [1,35,5,3];
ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)




