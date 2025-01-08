import { useState } from "react";
import TaskList from "./TaskList";
import InputField from "./InputField";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h1 className="mb-4 text-center">ToDos</h1>
      <InputField onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      <footer>
        {tasks.length > 0 ? `${tasks.length} item${tasks.length > 1 ? "s" : ""} left` : "No hay tareas, añadir tareas"}
      </footer>
    </div>
  );
}

export default Todo;