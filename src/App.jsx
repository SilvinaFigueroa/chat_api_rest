import { useState, useEffect } from 'react'
import './App.css'
import apiCall from './api/npl_api'

function App() {
  const [chatResponse, setChatResponse] = useState(null);
  const [error, setError] = useState(null);

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
      <h1>Chat Response</h1>
      {JSON.stringify(chatResponse)}
    </>
  )
}

export default App
