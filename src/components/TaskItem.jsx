import PropTypes from "prop-types";

function TaskItem({ task, onDeleteTask }) {
    return (
        <li
          className="list-group-item d-flex justify-content-between align-items-center position-relative"
          style={{ transition: "background-color 0.3s" }}
          onMouseEnter={(e) => e.currentTarget.querySelector("button").style.display = "block"}
          onMouseLeave={(e) => e.currentTarget.querySelector("button").style.display = "none"}
        >
          {task.text}
          <button
            className="btn btn-sm btn-danger"
            style={{ display: "none" }} // Oculto por defecto
            onClick={() => onDeleteTask(task.id)}
          >
            ✖
          </button>
        </li>
      );
}
TaskItem.propTypes = {
    task: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
    onDeleteTask: PropTypes.func.isRequired,
  };

export default TaskItem;
