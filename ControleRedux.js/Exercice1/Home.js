import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "./actions";
import { Link } from "react-router-dom";

export default function Home() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Todo List</h1>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.text}</td>
                <td>
                  <Link className="btn btn-success" to={`/edit/${task.id}`}>Edit</Link>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
