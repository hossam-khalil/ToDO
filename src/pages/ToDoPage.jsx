import { useRef, useState } from "react";

export default function TodoPage() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "task1", description: "Go To Work" },
    { id: 2, name: "task2", description: "Go To Sleep" },
    { id: 3, name: "task3", description: "Go To Gym" },
  ]);

  const tName = useRef();
  const tDescription = useRef();

  const [newTaskName, setNewTaskName] = useState([]);
  const [newTaskDescription, setNewTaskDescription] = useState([]);
  function addTask(event) {
    event.preventDefault();
    let oldTasks = [...tasks];
    let taskObj = {
      id: tasks.length + 1,
      name: newTaskName,
      description: newTaskDescription,
    };
    oldTasks.push(taskObj);
    setTasks(oldTasks);
    tName.current.value = "";
    tDescription.current.value = "";
  }
  function removeTask(Task_id){
    let oldTasks = [...tasks];
   let task_index = oldTasks.findIndex((el)=>{return el.id==Task_id});
   oldTasks.splice(task_index,1);
   setTasks(oldTasks);
  }
  return (
    <div className="col-12">
      <form
        onSubmit={(e) => {
          addTask(e);
        }}
        className="col-12"
      >
        <input
          ref={tName}
          className="form-control"
          onKeyUp={(e) => {
            setNewTaskName(e.target.value);
          }}
          type="text"
          placeholder="Enter New Task Name"
        />
        <input
          ref={tDescription}
          className="form-control"
          onKeyUp={(e) => {
            setNewTaskDescription(e.target.value);
          }}
          type="text"
          placeholder="Enter New Task Description"
        />
        <button className="btn btn-success">Add</button>
      </form>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="col-2 text-center">#</th>
            <th className="col-3 text-center">Name</th>
            <th className="col-4 text-center">Description</th>
            <th className="col-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr className="text-center" key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>
                <a className="btn btn-primary" onClick={(el)=>{removeTask(el.id)}}>Update</a>
                <a className="btn btn-danger">Remove</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
