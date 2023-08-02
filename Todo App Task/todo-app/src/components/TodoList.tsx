import "./styles.css";
import { Todo } from "../models/model";
import { Dispatch, SetStateAction } from "react";
import SingleTodo from "./SingleTodo";

//interface for props
interface Props {
    todos : Todo[]
    setTodos : Dispatch<SetStateAction<Todo[]>>
}

const TodoList : React.FC<Props> = (props : Props) => {
    return ( 
        //list out all todos
        <div className="todos">
            {
                props.todos.map((todo) => (
                    <SingleTodo todo={todo} todos={props.todos} setTodos={props.setTodos} key={todo.id} />))
            }
        </div>
     );
}
 
export default TodoList;