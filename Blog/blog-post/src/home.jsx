import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [blogs,setBlogs]=useState([]);

  useEffect(()=>{
    axios("http://localhost:4000/blogs")
    .then((res)=>setBlogs(res.data))
  },[])
  return (
    <div>
      <h2>Blogs:</h2>
      <ul>
        {blogs.map((bl)=>(<li key={bl.id}><Link to={`/blogs/${bl.id}`}>{bl.title}</Link></li>))}
      </ul>
    </div>
  )
}

export default Home