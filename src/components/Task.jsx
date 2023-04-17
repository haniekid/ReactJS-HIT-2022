import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Task = ({ task, taskCompleted }) => {
  return (
    <div className="task">
      <p onClick={() => taskCompleted(task.id)} className={`task.comp`}></p>
    </div>
  );
};

export default Task;
