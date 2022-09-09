import React, { useState } from 'react'

function Task_list({ tasks, setTasks }) {

  const [showIncomplete, setshowIncomplete] = useState(false);

  const handleComplete = (taskid, status) => {
    setTasks(tasks.map((task) => {
      status = status ? false : true;
      if (task.id === taskid) {
        return { ...task, status }
        //copy cái task thoả điều kiện rồi ghi đè cái status vào
      } else {
        return task; // Nếu không thì trả về nguyên trạng1
      }
    }));
  };
  const handleDelete = (taskid) => {
    setTasks(tasks.filter((task) => {
      return taskid !== task.id ? true : false
    }));
  }
  return (
    <>
      <ul className="task-list">
        {tasks.filter((task) => (showIncomplete ? task.status == true : true)).map(task => (
          <li key={task.id} className={task.status === false ? "done" : ""} >
            <span className="label">{task.title}</span>
            <div className="actions">
              <input onChange={(e) => handleComplete(task.id, e.target.checked)} type="checkbox" checked={!task.status} className="btn-action btn-action-done1" />
              <button onClick={() => handleDelete(task.id)} className="btn-action-delete">x</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="filter-wraper">
        <label className="filter-label"> Show only incompleted to do list </label>
        <input onChange={() => { showIncomplete ? setshowIncomplete(false) : setshowIncomplete(true) }} checked={showIncomplete} type="checkbox" id="filter" />
      </div>
    </>
  )
}

export default Task_list