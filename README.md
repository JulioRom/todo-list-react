# Todo List Application

This is a simple and interactive Todo List application built with React. The application allows users to manage their tasks efficiently with a clean, minimalistic design inspired by the classic "todos" layout. The app includes key features such as task addition, deletion, and task counters to enhance usability.

## Features

- **Add Tasks**: Users can easily add new tasks by typing into the input field and pressing `Enter`.
- **Delete Tasks**: Tasks can be deleted by clicking the delete button, which only appears when hovering over the task.
- **Task Counter**: A footer displays the number of remaining tasks dynamically.
- **Interactive Design**: Minimalistic styling with hover effects for better user experience.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-list-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Code Overview

### Main Component: `Todo`

- Manages the overall state of the application.
- Stores tasks in a state variable (`useState`).
- Handles adding and deleting tasks.

### Components

1. **`InputField`**:
   - A controlled input field for adding tasks.
   - Updates the state of the parent component when the user presses `Enter`.

2. **`TaskList`**:
   - Displays the list of tasks.
   - Delegates each task to the `TaskItem` component.

3. **`TaskItem`**:
   - Represents an individual task.
   - Includes a delete button that appears only on hover.

4. **Footer**:
   - Displays the number of tasks remaining dynamically.
   - Provides feedback when there are no tasks left.

## File Structure

```plaintext
.
├── src
│   ├── components
│   │   ├── InputField.js  # Input field component
│   │   ├── TaskList.js    # List of tasks
│   │   └── TaskItem.js    # Individual task component
│   ├── App.js             # Main entry point for the app
│   ├── index.js           # React entry point
│   └── styles.css         # Application styling
├── public
│   └── index.html         # Main HTML template
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

## Future Improvements

- **Editing Tasks**: Allow users to edit existing tasks directly.
- **Task Filtering**: Add options to filter tasks (e.g., completed, active).
- **Task Persistence**: Save tasks in local storage to retain them across sessions.

## License

This project is licensed under the MIT License.

## Author

- **Developed by JulioRom**
- **Contact:** [julioandrescampos@gmail.com](email to:julioandrescampos@gmail.com)
- **GitHub:** [https://github.com/JulioRom](https://github.com/JulioRom)

