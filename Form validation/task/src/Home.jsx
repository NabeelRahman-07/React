import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const [mail,setMail]=useState("");
  const [error,setError]=useState("");
  const navigate=useNavigate();

  function handleClick(){
    if(mail.includes("@") && mail.includes(".")){
      setError("");
    navigate("/Profile",{state:{data:mail}})
    }else{
      setError("invalid mail");
      setMail("")

    }
  }
  return (
    <div>
        <h2>This is home section</h2>
        <input type="text" placeholder='Enter your mail' value={mail} onChange={(e)=>setMail(e.target.value)} />
        <button onClick={handleClick}>Submit</button>
        {error && <p>{error}</p>}
    </div>
  )
}

export default Home;