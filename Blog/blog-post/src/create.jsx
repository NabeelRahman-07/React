import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Blog() {
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const navigate=useNavigate();


    function handleClick(){
        axios.post('http://localhost:4000/blogs',{
            title,
            content
        })
        navigate("/home");
    }

  return (
    <div>
        <h2>Create your blog:</h2>
            <input type="text" placeholder='Enter title' value={title} onChange={(e)=>setTitle(e.target.value)}/><br/>
            <textarea type="text" placeholder='Enter content'  value={content} onChange={(e)=>setContent(e.target.value)} /><br/><br/>
            <button onClick={handleClick}>Submit</button><br/>
    </div>
  )
}

export default Blog