import React, { useState, useEffect } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './models/model';
import TodoList from './components/TodoList';

const App:React.FC = () => {
  
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  //hanlde adding task
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
    setTodo("");
  };


  return (
    <div className="App">
      <span className="heading">Mini Todo</span>
      <InputField todo = {todo} setTodo = {setTodo} handleAdd = {handleAdd}/>
      {/* conditional message */}
      {todos.length == 0 && <p className='empty_task_text'>No Task yet...</p>}
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;