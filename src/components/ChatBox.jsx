import React from 'react'
import Message from './Message'
const messages =[
    {
        id: 1,
        text:"Hiii",
        name: "Daisy"
    },
    {
        id: 2,
        text:"Hey",
        name: "Samuel"
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