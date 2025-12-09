import React, { useState } from 'react'

function Task() {
    const[task,setTask]=useState("");
    const[tasks,setTasks]=useState([]);
    const[error,setError]=useState("");

    function handleClick(){
        if(task==""){
            setError("error: empty task");
            return
        }
        setError("");
        setTask("");
        setTasks([...tasks,task]);
    }
    function removeTask(ind){
       const newarr=tasks.filter((_,id)=>id!==ind);
       setTasks(newarr);
    }

  return (
    <div>
        <h2>Enter your task:</h2>
        <input type="text" placeholder='tasks' value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={handleClick}>Submit</button>
        {error && <p>{error}</p>}
        <h3>Your tasks:</h3>
        <ul>
            {tasks.map((val,ind)=><li key={ind}>{val} <button onClick={()=>removeTask(ind)}>Clear</button></li>)}
        </ul>
    </div>
  )
}

export default Task