import React from 'react'
import { useNavigate } from 'react-router-dom'


const ChatResponse = ({response}) => {
    const navigate = useNavigate()

    const redirectMain = ()=>{
        navigate('/')
    }
    
    return (
        <>
            <h2>ChatResponse</h2>
            <p>{response}</p>

            <button onClick={redirectMain}>Start Over</button>
        </>

    )
}

export default ChatResponse