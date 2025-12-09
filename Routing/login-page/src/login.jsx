import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
    const [id,setId]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");

    const loc=useLocation();
    const name=loc.state?.d1
    const mail=loc.state?.d2
    const pass=loc.state?.d3
    const navigate=useNavigate();

    function handleClick(){
        if(id==mail && password==pass){
            setError("");
            navigate("/home",{state:{data:name},replace:true})
        }else{
            setError("Account not exist!")
        }
    }

  return (
    <div>
        <h2>Log-in to your account</h2>
        <p>User-Id:</p>
        <input type="text" placeholder='Enter User-id' onChange={(e)=>setId(e.target.value)} value={id} />
        <p>Password:</p>
        <input type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} value={password} /><br/>
        <button onClick={handleClick}>Login</button>
        {error && <p>{error}</p>}
    </div>
  )
}

export default Login