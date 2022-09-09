import React, { useState } from 'react'

function Add_new_task({ tasks, setTasks }) {

  const [newTask, setNewTask] = useState("");
  const handlenewTask = (e) => {
    if (e.target.value) {
      setNewTask(e.target.value);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask !== "") {
      const objnewTask = {
        id: Date.now(),
        title: newTask,
        status: true
      };
      setTasks([...tasks, objnewTask])
    } else {
      alert("Empty input!")
    }
    setNewTask("");
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} action="#" className="form">
      <label htmlFor="newitem">Add new to do list</label>
      <input onChange={handlenewTask} value={newTask} type="text" className="newitem" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Add_new_task