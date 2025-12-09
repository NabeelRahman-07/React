import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';

function Reg() {
    const [name,setName]=useState("");
    const [mail,setMail]=useState("");
    const [pass,setPass]=useState("");
    const nav=useNavigate();

    function handleClick(){
        if(!name=="" && !mail==""){
            if(!pass==""){
                nav("/login",{state:{d1:name,d2:mail,d3:pass}})
            }
        }  
    }
  return (
    <div>
        <h2>Create your Account</h2>
        <p>Name:</p>
        <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} value={name} />
        <p>E-mail:</p>
        <input type="text" placeholder='Enter your E-mail' onChange={(e)=>setMail(e.target.value)} value={mail} />
        <p>Password:</p>
        <input type="password" placeholder='Enter your Password' onChange={(e)=>setPass(e.target.value)} value={pass} /><br/>
        <button onClick={handleClick}>Create</button>
    </div>
  )
}

export default Reg