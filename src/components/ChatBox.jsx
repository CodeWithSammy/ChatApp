import React from 'react'
import Message from './Message'
const messages =[
    {
        id: 1,
        text:"Hello there",
        name: "Sam"
    },
    {
        id: 2,
        text:"noice",
        name: "Dan"
    }
]
const ChatBox = () => {
  return (
    <div className='pb-44 pt-20 ContainerWrap'>
        {messages.map(message =>(
            <Message key={message.id} message={message}/>
        ))}
    </div>
  )
}

export default ChatBox