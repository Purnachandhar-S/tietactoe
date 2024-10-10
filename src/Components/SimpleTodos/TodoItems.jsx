const TodoItem = (props) => {
  const { todoDetails, deleteTodo } = props;
  const { id, title } = todoDetails;

  const onDeleteTodo = () => {
    deleteTodo(id);
  };

  return (
    <li>
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

// import React from "react";

// const TodoItems = (props) => {
//   const { todoDetails, deleteTodo } = props;
//   const { id, title } = todoDetails;
//   const onDelete = () => {
//     deleteTodo(id);
//   };
//   return (
//     <li>
//       <div style={{ display: "flex", alignItems: "space-between" }}>
//         <p>{title}</p>
//         <button onClick={onDelete}>delete</button>
//       </div>
//     </li>
//   );
// };

// export default TodoItems;
