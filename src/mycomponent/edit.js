import React,{useState, useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';



export const Edit = (props) => {
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("");

    const navigate = useNavigate();
    
    const {sno} = useParams();
    
    
    const submit=(e)=>{
        e.preventDefault();
    
        if(!title || !desc)
        {
            alert("Title or Description Cannot Be Blank")
        }
        else{
            props.todos.forEach((element, index) => {
                if(element.sno === sno) {
                  
                    props.todos[index].title = title;
                    props.todos[index].desc = desc;
                    localStorage.setItem("todos", JSON.stringify(props.todos));
                    alert("Data Updated Successfully")
                    navigate('/')
                }
            });
        }
    }


    useEffect(()=>{
        const snoindex=props?.todos?.map((todo)=>(todo?.sno).toString()).indexOf(sno);
        setTitle(props.todos[snoindex].title);
        setDesc(props.todos[snoindex].desc)
    },[])


  return (
    <div className="container" >
        <form onSubmit={submit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="todotitle" aria-describedby="emailHelp"/>  
                </div>
                <div className="mb-3">
                    <label className="form-label">Desc</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="tododesc"/>
                </div>
            
                <button type="submit" className="btn btn-sm btn-dark">Update Todos</button>
            </form>
    </div>
  )
}
