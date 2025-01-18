import React from "react"; 
import { useParams } from "react-router-dom"; 
import "../App.css"; 

const TaskDetailPage = ({ tasks }) => { 
  const { id } = useParams();
  const task = tasks.find((task) => task.id === parseInt(id)); 
    if (!task) 
      return <div><h1 style={{color: "white"}}>Task not found</h1></div>; 
    return ( 
    <div className="task-detail"> 
    <h1>Details:</h1>
      <h2>Task - {task.title}</h2> 
      <p>Description - {task.description}</p> 
      <p>Task status - {task.completed ? "Completed" : "Incomplete"}</p> 
    </div> 
    );
  }; 
export default TaskDetailPage