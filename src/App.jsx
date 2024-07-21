import { useState, useEffect } from 'react'
import './App.css'
import apiCall from './api/chat_api'
import ChatMessage from './components/ChatMessage'

function App() {
  const [message, setMessage] = useState("")

  // calling the API inside a useEffect function 
  useEffect(() => {
    const callApi = async () => {
      try {
        const result = await apiCall();
        setChatResponse(result);
      } catch (err) {

        console.error(err)
        if (err.response && err.response.status === 429) {
          console.error('Rate limit exceeded. Retrying...');
          // Retry logic with delay
          setTimeout(callApi, 10000); // Retry after 10 seconds
        } else {
          console.error(err);
          setError(err);
        }
      }
    }

    callApi()
  }, [])

  return (
    <>
      <ChatMessage/>
    </>
  )
}

export default App
