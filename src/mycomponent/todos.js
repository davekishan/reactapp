import React from 'react'
import {Todoitem} from './todoitem'
import { Edit } from './edit'
import {
    useNavigate
  } from "react-router-dom";


export const Todos = (props) => {

    const navigate = useNavigate();

    const onEdit = (sno) => {
        console.log(sno)
    
        navigate('/edit/'+sno);

      }
    
    return (
        
        <div className='container'>
            {console.log("props todos is : ",props.todos)}
            <h3 className='my-3'>Todo List</h3>
            {console.log("In Todos display value is",props.todos)}
            {props.todos.length === 0 ? "No Todo To Display ":
            props.todos.map((todo)=>{
                return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} onEdit={onEdit}/>
            })
        }
        </div>
    )
}
