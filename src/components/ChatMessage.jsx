import { useEffect, useState } from 'react'
import apiCall from '../api/chat_api'
import { useNavigate } from 'react-router-dom'
import Intro from './Intro'

const ChatMessage = () => {

    // useState inside the component 
    const [message, setMessage] = useState("") // user input message
    const [name, setName] = useState("") // user input name
    const [career, setCareer] = useState("") // user input career

    const [apiResponse, setApiResponse] = useState("") // api response 
    const [submitted, setSubmitted] = useState(false) // form submission handler 

    const navigate = useNavigate()

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
                const response = await apiCall({ name, career, message });
                setApiResponse(response)
                setSubmitted(false) // Reset the submitted state for future submissions 
                navigate('/responses', { state: { name, response } }); // Pass the name and response data to the response page

            } catch (err) {
                console.error(err)
                setSubmitted(false) // Reset the submitted if error 

            }
        }

        callApi()
    }, [submitted, name, career, message]) // trigger when submitted and/or message are updated



    return (
        <>

        <Intro/>

            <form className="intro-form" onSubmit={handleSubmit}>
                {/* get the text area message (event.target.value) and set the state to pass is as props between components */}

                <input type='text' value={name}
                    onChange={(name) => setName(name.target.value)}
                    placeholder='Your Name' required
                    className="form-input"/>

                <input type='text' value={career}
                    onChange={(career) => setCareer(career.target.value)}
                    placeholder='Career you want to pursue' required 
                    className="form-input"/>

                <textarea value={message}
                    onChange={(inputMessage) => setMessage(inputMessage.target.value)}
                    placeholder='Any additional information for our advisor' 
                    className="form-textarea"/>

                <button type='submit' className="form-button">Start</button>
            </form>
        </>
    )
}

export default ChatMessage