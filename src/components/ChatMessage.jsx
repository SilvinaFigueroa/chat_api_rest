import React from 'react'

const ChatMessage = () => {
  return (
    <form>
        <h2>Type your Message here</h2>
        <input type="text"/>
        <button type='submit' onClick={getResponse}>Chat</button>
    </form>
  )
}

export default ChatMessage