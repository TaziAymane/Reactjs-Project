import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./actions";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const tasks = useSelector((state) => state.tasks);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const generateId = () => {
    return tasks.length ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
  };

  const ajouter = (e) => {
    e.preventDefault();
    const newTask = {
      id: generateId(),
      text,
      completed: false,
    };
    dispatch(addTask(newTask));
    navigate("/");
  };

  return (
    <form onSubmit={ajouter}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Task" required />
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
}
