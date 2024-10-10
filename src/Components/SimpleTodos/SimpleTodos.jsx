//using Classs Compoonents
import { Component } from "react";

import TodoItem from "./TodoItems";

const initialTodosList = [
  {
    id: 1,
    title: "Book the ticket for today evening",
  },
  {
    id: 2,
    title: "Rent the movie for tomorrow movie night",
  },
  {
    id: 3,
    title: "Confirm the slot for the yoga session tomorrow morning",
  },
  {
    id: 4,
    title: "Drop the parcel at Bloomingdale",
  },
  {
    id: 5,
    title: "Order fruits on Big Basket",
  },
  {
    id: 6,
    title: "Fix the production issue",
  },
  {
    id: 7,
    title: "Confirm my slot for Saturday Night",
  },
  {
    id: 8,
    title: "Get essentials for Sunday car wash",
  },
];

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  };

  deleteTodo = (id) => {
    const { todosList } = this.state;
    const updatedTodosList = todosList.filter((eachTodo) => eachTodo.id !== id);

    this.setState({
      todosList: updatedTodosList,
    });
  };

  render() {
    const { todosList } = this.state;

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todos-list">
            {todosList.map((eachTodo) => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={() => this.deleteTodo(eachTodo.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SimpleTodos;

// using functin

// import React, { useState } from "react";
// import TodoItems from "./TodoItems";

// const initialTodosList = [
//   {
//     id: 1,
//     title: "Book the ticket for today evening",
//   },
//   {
//     id: 2,
//     title: "Rent the movie for tomorrow movie night",
//   },
//   {
//     id: 3,
//     title: "Confirm the slot for the yoga session tomorrow morning",
//   },
//   {
//     id: 4,
//     title: "Drop the parcel at Bloomingdale",
//   },
//   {
//     id: 5,
//     title: "Order fruits on Big Basket",
//   },
//   {
//     id: 6,
//     title: "Fix the production issue",
//   },
//   {
//     id: 7,
//     title: "Confirm my slot for Saturday Night",
//   },
//   {
//     id: 8,
//     title: "Get essentials for Sunday car wash",
//   },
// ];

// const SimpleTodos = () => {
//   const [todoList, setList] = useState(initialTodosList);
//   const deleteTodo = (id) => {
//     const filteredTodoList = todoList.filter((each) => each.id !== id);
//     setList(filteredTodoList);
//   };
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>SimpleTodos</h1>
//       <ul style={{ listStyle: "none" }}>
//         {todoList.map((todo) => (
//           <TodoItem
//             key={todo.id}
//             todoDetails={todo}
//             deleteTodo={() => deleteTodo(todo.id)}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SimpleTodos;
