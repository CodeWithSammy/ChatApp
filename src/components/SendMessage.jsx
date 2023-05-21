import React from 'react'

const SendMessage = () => {

    
  return (
    <div className='bg-purple-900 fixed bottom-0 w-full py-5 shadow-lg '>
        <form className='ContainerWrap flex'>
        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xxl rounded-r-none" />
        <button className="btn btn-primary rounded-l-none">Send</button>
        </form>
    </div>
  )
}

export default SendMessage