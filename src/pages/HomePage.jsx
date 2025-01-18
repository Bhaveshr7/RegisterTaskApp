import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import '../App.css'
const HomePage = ({ tasks, setTasks }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = (e) => {
    e.preventDefault()
    if (newTaskTitle === '') return; 
    const newTask = { id: Date.now(), title: newTaskTitle, description: newTaskDescription, completed: false }; 
    setTasks([...tasks, newTask]); 
    setNewTaskTitle(''); 
    setNewTaskDescription('')
  }

  const deleteTask = (taskId) => { 
    setTasks(tasks.filter(task => task.id !== taskId)); 
  };


  const toggleTask = (taskId) => { 
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task 
    )); 
  };

  const filteredTasks =tasks.filter(task=>{
    if(filter==='All')return true;
    if(filter==='Completed')return task.completed;
    if(filter==='Incomplete')return !task.completed;
  })


  return (
    <div className="container"> 
      <header className="header"> 
        <h1>RegisterTask App</h1> 
        <form onSubmit={addTask}> 
          <input type="text" placeholder="Enter your task" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} required />
          <input type="text" placeholder="Add any description" value={newTaskDescription} onChange={(e) => setNewTaskDescription(e.target.value)} /> 
          <button type="submit" className="add-task-btn" onClick={addTask}>Add Task</button> 
        </form> 
        <div className="filter-btns">
          <button onClick={()=>setFilter("All")}>ALL</button>
          <button onClick={()=>setFilter("Completed")}>Completed</button>
          <button onClick={()=>setFilter("Incomplete")}>Incomplete</button>
        </div>
        </header> 
        <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};

export default HomePage;