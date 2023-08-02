import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Todo } from "../models/model";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone} from 'react-icons/md';
import "./styles.css";

interface Props {
    todo: Todo,
    todos : Todo[],
    setTodos : Dispatch<SetStateAction<Todo[]>>
}


const SingleTodo : React.FC<Props> = (props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(props.todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);  
    
    //handle done
    const handleDone = (id: number) => {
        props.setTodos(
          props.todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
          )
        );
      };

      //handle delete
      const handleDelete = (id: number) => {
        props.setTodos(
            props.todos.filter(todo => todo.id !== id)
        )          
      };

      //hangle edit
      const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        props.setTodos(
          props.todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        setEdit(false);
      };

      useEffect(() => {
        inputRef.current?.focus();
      }, [edit]);

    return ( <form className="todos_single_form" onSubmit={(e) => handleEdit(e, props.todo.id)}>
        
        {/* conditional rendering */}
        {
                edit ? (
                    <input
                      value={editTodo}
                      onChange={(e) => setEditTodo(e.target.value)}
                      className="todos_single_test"
                      ref={inputRef}
                    />
                  ) : 
                    props.todo.isDone ? (
                        <s className="todos_single_text">{props.todo.todo}</s>
                    ) : (
                        <span className="todos_single_text">{props.todo.todo}</span>
                    )
        }
        <div>
            <span className="icon" onClick={() => { handleDelete(props.todo.id)}}><AiFillDelete/></span>
            <span className="icon" onClick={(e) => {  if (!edit && !props.todo.isDone) {
                  setEdit(!edit);
                } }}><AiFillEdit/></span>
            <span className="icon" onClick={() => { handleDone(props.todo.id)}}><MdDone/></span>
        </div>
    </form>
     );
}
 
export default SingleTodo;