import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom'


const ChatResponse = ({ response, name }) => {
    const navigate = useNavigate()

    const redirectMain = () => {
        navigate('/')
    }

    return (
        <div className="chat-response">
            <ReactMarkdown>{response}</ReactMarkdown>
            <button className="start-over-btn" onClick={redirectMain}>Start Over</button>
        </div>

    )
}

export default ChatResponse