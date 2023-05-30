import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react"
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();
  
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if(value.trim() === "") {
      alert("Enter valid message!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser; 
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    } catch(error) {
      console.log(error);
    }
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