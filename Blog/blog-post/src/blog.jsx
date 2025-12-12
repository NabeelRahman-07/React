import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detail() {
    const [blog,setBlog]=useState(null);
    const {id}=useParams();

    useEffect(()=>{
        axios(`http://localhost:4000/blogs/${id}`)
        .then((res)=>setBlog(res.data))
    },[id])
    if(!blog){
      return <h3>Loading...</h3>
    }
  return (
    <div>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
    </div>
  )
}

export default Detail