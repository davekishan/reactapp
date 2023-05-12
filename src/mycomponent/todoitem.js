import React from 'react'

export const Todoitem = ({todo, onDelete,onEdit}) => {
  return (
    <div className='container'>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>

        <button className='btn btn-sm btn-success mx-3' onClick={()=>{onEdit(todo.sno)}}>Edit</button>

        <hr/>
    </div>
  )
}
