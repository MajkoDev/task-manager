import React from "react";

function Task({task}) {
  return (
    <li className='list-item'>
      <span>{task.title}</span>
      <div>
        <button className='btn-delete task-btn'>D</button>
        <button className='btn-edit task-btn'>E</button>
      </div>
    </li>
  );
}

export default Task;
