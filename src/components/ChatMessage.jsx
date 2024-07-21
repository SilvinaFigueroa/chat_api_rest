import { useEffect, useState } from 'react'
import apiCall from '../api/chat_api'
import ChatResponse from './ChatResponse'

const ChatMessage = () => {

    // useState inside the component 
    const [message, setMessage] = useState("") // user input message
    const [apiResponse, setApiResponse] = useState("") // api response 
    const [submitted, setSubmitted] = useState(false) // form submission handler 

    // separation of concerns: handle the form submission and separately manage the api call with useEffect
    const handleSubmit = (event) => {
        event.preventDefault() // Prevent rendering on submission 
        setSubmitted(true)
    }

    // api call when the form is submitted 
    useEffect(() => {
        if (!submitted) return // check if form is submitted 

        const callApi = async () => {
            try {
                const response = await apiCall({ message });
                setApiResponse(response)
                setSubmitted(false) // Reset the submitted state for future submissions 

            } catch (err) {
                console.error(err)
                setSubmitted(false) // Reset the submitted if error 

            }
        }
        
        callApi()
    },[submitted, message]) // trigger when submitted and/or message are updated



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

            <ChatResponse response={apiResponse} />
        </>
    )

}

export default ChatMessage