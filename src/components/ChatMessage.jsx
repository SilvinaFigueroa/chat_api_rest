import { useEffect, useState } from 'react'
import apiCall from '../api/chat_api'
import ChatResponse from './ChatResponse'

const ChatMessage = () => {
    // useState inside the component 
    const [message, setMessage] = useState("")
    const [response, setResponse] = useState("")
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (!submitted) return // check if form is submitted 

        const callApi = async (event) => {
            try {
                const apiResponse = await apiCall({ message });
                setResponse(apiResponse)
                setSubmitted(false) // Reset the submitted state for future submissions 

            } catch (err) {
                console.error(err)
                setSubmitted(false) // Reset the submitted if error 

            }
        }
        
        callApi()
    },[submitted, message]) // trigger when submitted and/or message are updated

    const handleSubmit = (event) => {
        event.preventDefault() // Prevent rendering on submission 
        setSubmitted(true)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Type your Message here</h2>
                {/* get the text area message (event.target.value) and set the state to pass is as props between components */}
                <textarea value={message}
                    onChange={(inputChat) => setMessage(inputChat.target.value)}
                    placeholder='Type your message here...' />

                <button type='submit'>Chat</button>
            </form>

            <ChatResponse response={response} />
        </>
    )

}

export default ChatMessage