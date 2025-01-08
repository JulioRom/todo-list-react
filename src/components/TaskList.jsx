import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

function TaskList({ tasks, onDeleteTask }) {
    return (
        <ul className="list-group w-50">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onDeleteTask={onDeleteTask} />
          ))}
        </ul>
      );
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDeleteTask: PropTypes.func.isRequired,
  };

export default TaskList;
