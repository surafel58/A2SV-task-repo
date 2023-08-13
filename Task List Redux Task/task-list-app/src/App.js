import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { taskAdd, taskUpdate, taskDelete, taskComplete } from './Reducers/TaskSlice';
import { nanoid } from '@reduxjs/toolkit';
import TaskList from './components/TaskList';

function App() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [input_task, setInputTask] = useState("");
  

  return (
    <div className="App">
      <h1 className="mt-4 text-red-900 text-3xl font-bold">Taskify</h1>
      
      {!tasks && <span>No task yet ...</span>}

      <div className="flex flex-col gap-9 items-center justify-center mt-6">
        <div className="task_input flex items-start">
          <textarea className="border-red-900 border-2 rounded" type="text" value={input_task} onChange={e => {setInputTask(e.target.value)}}/>
          <button className=" bg-red-900 rounded-full p-2 ml-3 text-white" onClick= {e => {
            dispatch(taskAdd(
            {id:nanoid(), content:input_task, isComplete: false}
          ))
          setInputTask("");
          }}>Add</button>
        </div>
        {/* task list */}
        {tasks && <TaskList tasks={tasks}/>}
      </div>
    </div>
  );
}

export default App;
