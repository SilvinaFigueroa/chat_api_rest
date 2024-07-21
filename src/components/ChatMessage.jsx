import { useEffect, useState } from 'react'
import apiCall from '../api/chat_api'
import ChatResponse from './ChatResponse'

const ChatMessage = () => {

    const [message, setMessage] = useState("")
    const [response, setResponse] = useState("")

    const callApi = async (event) => {
        event.preventDefault() // Prevent rendering on submission 

        try {
            const apiResponse = await apiCall({ message });
            setResponse(apiResponse)

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <form>
                <h2>Type your Message here</h2>
                {/* get the text area message (event.target.value) and set the state to pass is as props between components */}
                <textarea value={message}
                    onChange={(inputChat) => setMessage(inputChat.target.value)}
                    placeholder='Type your message here...' />

                <button type='submit' onClick={callApi}>Chat</button>
            </form>

            <ChatResponse response={response} />
        </>
    )

}

export default ChatMessage