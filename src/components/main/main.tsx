import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTodo,deleteTodo,editNote } from "../../features/todo";
interface todoStateType{
    todo: {
        value:[{task:string, note:string,id:number}]
    }
}
export const Main = () => {
  const todoArr = useSelector((state:todoStateType)=> state.todo.value);
  const [todoTask,setTodoTask] = useState("");
  const [todoNote,setTodoNote] = useState("");
  const dispatch = useDispatch();
  const [id,setId] = useState(1);
  const [updatednote,setUpdatedNote] = useState("");
  const handleTodoBtn = (e:any)=>{
     e.preventDefault();
      setId(id+1);
      dispatch(
        addTodo({task:todoTask, note:todoNote,id:id})
      )
  }

  const deleteTodoBtn = (id:Number)=>{
      dispatch(deleteTodo(id))
  }

  const updateNoteBtn = (id:Number)=>{
     dispatch(editNote({id,updatednote}))
  }

  return (
    <div>
      <h2>Todo List</h2>
      {/* Form */}
     
        <div className="row  text-white d-flex justify-content-center align-items-center">
          <form className="col-4 bg-success">
            <div className="mb-3 display-flex">
              <input
                type="text"
                className="form-control mt-2"
                id="task"
                aria-describedby="emailHelp"
                placeholder="Yout task"
                onChange={(e)=>{
                    setTodoTask(e.target.value)
                }}
              />
              <input
                type="text"
                className="form-control my-3"
                id="note"
                aria-describedby="emailHelp"
                placeholder="Yout Note"
                onChange={(e)=>{
                    setTodoNote(e.target.value)
                }}
              />

            </div>

            <button
              type="submit"
              className="btn btn-outline-warning"
              onClick={handleTodoBtn}
            >
              Submit
            </button>
          </form>
        </div>
      
      {/* Todo items */}
      {
        todoArr.length>0? (
          <div className=" mt-5 text-black row d-flex justify-content-center align-items-center">
          <div className="col-md-4">
             {todoArr.map((eachTodo:any)=>{
                return (
                  <div className="border bg-white px-3 py-2 border-black border-3">
                      <h3>{eachTodo.task}</h3>
                      <p>{eachTodo.note}</p>
                      <input onChange={(event)=>setUpdatedNote(event.target.value)} type="text" placeholder="Edit your note."/>
                      <button onClick={()=>updateNoteBtn(eachTodo.id)} className="btn btn-success">Update</button>
                      <button onClick={()=>deleteTodoBtn(eachTodo.id)} className="btn btn-warning">DELETE</button>
                  </div>
                )
             })}
          </div>
        </div>
        ):(
          <div className="mt-5  row text-black row d-flex justify-content-center align-items-center">
            <h2 className="col-4 bg-white py-2 text-center">Nothing On Your Todo</h2>
          </div>
        )
      }
    
    
    </div>
  );
};
