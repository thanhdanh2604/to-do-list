import React, { useState } from 'react'
import './App.css';
import Add_new_task from './components/Add_new_task';
import Task_list from './components/Task_list';
import Title from './components/Title';
function App() {

  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Code for me", status: true },
    { id: "task_2", title: "Code for me 2", status: false },
  ]);
  return (
    <div className="main-to-do">
      <Title title={"Every thing MUST be done"} />
      {/* Task List */}
      <Task_list tasks={tasks} setTasks={setTasks} />
      {/* Add new task */}
      <Add_new_task tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App