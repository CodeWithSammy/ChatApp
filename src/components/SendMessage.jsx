import React, { useState } from 'react'

const SendMessage = () => {
    const [value, setValue] = useState("");
    
    const handleSendMessage = (e) =>{
        e.preventDefault();
        console.log(value);
        setValue("");
    }
    
  return (
    <div className='bg-purple-900 fixed bottom-0 w-full py-5 shadow-lg '>
        <form onSubmit={handleSendMessage} className='px-4 ContainerWrap flex'>
        <input value={value} onChange={e => setValue(e.target.value)}type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xxl rounded-r-none" />
        <button type="submit" className="btn btn-primary rounded-l-none">Send</button>
        </form>
    </div>
  )
}

export default SendMessage