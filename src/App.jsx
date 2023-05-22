import { useState } from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'

import ChatRoom from  "./pages/ChatRoom"
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <div >
     <Navbar/>
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/chat" element={<ChatRoom/>} />
     </Routes>
     
     
    </div>
  )
}

export default App
