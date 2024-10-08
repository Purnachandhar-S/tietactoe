import React from "react";

const TodoItems = (props) => {
  const { todoDetails, deleteTodo } = props; // Extract deleteTodo from props
  const { id, title } = todoDetails;

  const onDelete = () => {
    deleteTodo(id); // Call deleteTodo with the correct id
  };

  return (
    <li>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p>{title}</p>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItems;

import React, { useState } from "react";
import TodoItems from "./TodoItems";

const initialTodosList = [
  {
    id: 1,
    title: "Book the ticket for today evening",
  },
  {
    id: 2,
    title: "Rent the movie for tomorrow movie night",
  },
];

const SimpleTodos = () => {
  const [todosList, setList] = useState(initialTodosList); // Renaming the state to avoid conflict

  const deleteTodo = (id) => {
    const filteredTodoList = todosList.filter((each) => each.id !== id); // Correct filter logic
    setList(filteredTodoList); // Update state with filtered list
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Simple Todos</h1>
      <ul style={{ listStyle: "none" }}>
        {todosList.map((todo) => (
          <TodoItems
            key={todo.id}
            todoDetails={todo}
            deleteTodo={() => deleteTodo(todo.id)} // Pass the function without `this`
          />
        ))}
      </ul>
    </div>
  );
};

export default SimpleTodos;

// import React, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // Initialize the state
//     this.state = {
//       count: 0,
//     };
//   }

//   // Method to increase count
//   increase = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };

//   // Method to decrease count
//   decrease = () => {
//     this.setState((prevState) => ({
//       count: prevState.count > 0 ? prevState.count - 1 : 0, // Optional check to prevent negative values
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>Counter: {this.state.count}</h1>
//         <button onClick={this.increase}>Increase</button>
//         <button onClick={this.decrease}>Decrease</button>
//       </div>
//     );
//   }
// }

// export default Counter;
