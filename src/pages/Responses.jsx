import ChatResponse from '../components/ChatResponse'
import { useLocation } from 'react-router-dom' // useLocation to access the state passed on redirect (responses)

const Responses = () => {
    const location = useLocation()
    const { response } = location.state

  return (
    // Pass the response to the component
    <ChatResponse response={response}/>
  )
}

export default Responses