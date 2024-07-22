import ChatResponse from '../components/ChatResponse'
import { useLocation } from 'react-router-dom' // useLocation to access the state passed on redirect (responses)

const Responses = () => {
    const location = useLocation()
    const { name, response } = location.state

    return (
        // Pass the response to the component
        <div className='response-page'>
            <h2>Personalized Career Path for {name}</h2>
            <div className="response-container">
                <div className="response-content" >
                    <ChatResponse response={response} />
                </div>
            </div>
        </div>
    )
}

export default Responses