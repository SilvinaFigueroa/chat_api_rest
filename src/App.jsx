import './App.css'
import ChatMessage from './components/ChatMessage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Responses from './pages/Responses';


function App() {


  return (

    // Create routes to redirect content
      <Routes>

        <Route path="/" element={<ChatMessage />} />
        <Route path="/responses" element={<Responses/>} />

      </Routes>
  )
}

export default App
