import { useRef } from 'react';
import './styles.css';


interface Props {
    todo : string, 
    setTodo : React.Dispatch<React.SetStateAction<string>>
    handleAdd : (e: React.FormEvent) => void
}
const InputField : React.FC<Props> = (props : Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return ( 
        <form onSubmit={(e) => {
            props.handleAdd(e);
            inputRef.current?.blur();
        }} className="input">
            <input type="input" placeholder="Enter a task" className="input__box" value={props.todo} onChange={(e) => {props.setTodo(e.target.value)}}/>
            <button className="input_submit" type="submit">Add</button>
        </form>
     );
}
 
export default InputField;