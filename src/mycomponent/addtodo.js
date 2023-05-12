import React, { useState } from 'react'

export const Addtodo = (props) => {

const [title,setTitle]=useState("")
const [desc,setDesc]=useState("")

const submit=(e)=>{
    e.preventDefault();

    if(!title || !desc)
    {
        alert("Title or Description Cannot Be Blank")
    }
    else{
        props.add(title,desc)
        setTitle("");
        setDesc("");
    }
}
return (
        <div className='container'>
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="todotitle" aria-describedby="emailHelp"/>  
                </div>
                <div className="mb-3">
                    <label className="form-label">Desc</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="tododesc"/>
                </div>
            
                <button type="submit" className="btn btn-sm btn-dark">Add Todos</button>
            </form>
        </div>
    )
}
