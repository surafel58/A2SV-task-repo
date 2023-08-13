import SingleTask from './singleTask';

// list the tasks
const TaskList = (props) => {

    return ( 
    <div className="task_list flex flex-col gap-3">
        {props.tasks.map(task => (
          <SingleTask task={task} key={task.id}/>
          ))}
      </div>
     );
}
 
export default TaskList;