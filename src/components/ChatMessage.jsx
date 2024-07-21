import { useEffect, useState } from 'react'
import apiCall from '../api/chat_api'

const ChatMessage = () => {

    const [message, setMessage] = useState("")

    // calling the API inside a useEffect function to prevent rendering the component
    useEffect(({message}) => {

        const callApi = async () => {
            try {
                const response = await apiCall({message});

                
            } catch (err) {

                console.error(err)
                if (err.response && err.response.status === 429) {
                    console.error('Rate limit exceeded. Retrying...');
                    // Retry logic with delay
                    setTimeout(callApi, 100000);
                } else {
                    console.error(err);
                    setError(err);
                }
            }
        }
        callApi()
    }, [])

    return (
        <form>
            <h2>Type your Message here</h2>
            {/* get the text area message (event.target.value) and set the state to pass is as props between components */}
            <textarea value={message}
            onChange={ (inputChat) => setMessage(inputChat.target.value)}
            placeholder='Type your message here...' />

            <button type='submit' onClick={callApi}>Chat</button>
        </form>
    )
}

export default ChatMessage