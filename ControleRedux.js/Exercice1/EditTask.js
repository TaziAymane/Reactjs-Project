import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "./actions";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTask() {
  const { id } = useParams();
  const task = useSelector((state) => state.tasks.find((task) => task.id === parseInt(id)));
  const [text, setText] = useState(task ? task.text : "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!task) return <p>Task not found</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ ...task, text }));
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Task" required />
        <button type="submit" className="btn btn-success">Save Changes</button>
      </form>
    </div>
  );
}
