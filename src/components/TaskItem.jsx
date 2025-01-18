import React from "react";
import PropTypes from "prop-types";//for validation
import { Link } from "react-router-dom";
import '../App.css'

const TaskItem=({task, onToggle, onDelete})=>{
    return(
        <div className="task-item">
            <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <Link className="view-details-btn" to={`/task/${task.id}`}>View Details</Link>
            </div>
            
            <div className="task-item-cdn">
                <div>
                    <label> 
                        <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} /> 
                            {task.completed ? 'Its completed' : 'Yet to be done'} 
                    </label>
                    
                </div>
                <button onClick={()=>onDelete(task.id)}>Delete</button>
            </div>  
        </div>
    )
}

TaskItem.propTypes = { 
    task: PropTypes.shape({ 
        id: PropTypes.number.isRequired, 
        title: PropTypes.string.isRequired, description: 
        PropTypes.string, completed: 
        PropTypes.bool.isRequired, 
    }).isRequired, 
    onToggle: PropTypes.func.isRequired, 
    onDelete: PropTypes.func.isRequired,
};

export default TaskItem;