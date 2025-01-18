import React from 'react'; 
import PropTypes from 'prop-types'; 
import TaskItem from './TaskItem'; 

const TaskList = ({tasks, onToggle, onDelete}) => { 
    return ( 
    <div className='task-list'> 
    { tasks.map(task =>
     ( <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete}/> )
     ) 
    } 
     </div> 
     ); 
    } 

TaskList.propTypes = { 
    tasks: PropTypes.array.isRequired, 
    onToggle: PropTypes.func.isRequired, 
    onDelete: PropTypes.func.isRequired 
} 
export default TaskList;
