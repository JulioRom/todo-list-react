import { useState } from "react";
import PropTypes from "prop-types";

function InputField({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      onAddTask(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <input
      type="text"
      placeholder="Add a task..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
      className="input-field"
    />
  );
}

InputField.propTypes = {
    onAddTask: PropTypes.func.isRequired,
  };

export default InputField;
