import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskDetailPage from "./pages/TaskDetailPage";


const App = () => {
  const [tasks, setTasks] = useState(()=>{
    const savedTasks=localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : []
  }); //conditionally checking if there are tasks in local storage

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);

  console.log(tasks);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage tasks={tasks} setTasks={setTasks} />}/>
          <Route path="/task/:id" element={<TaskDetailPage tasks={tasks} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
