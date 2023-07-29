import React from "react";
import ToDoItem from "./TodoItem";


const ToDoList = ({ todo, onChange, onDelete }) => {
  return (
    <div>
      {todo.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          toDo={toDo}
          onChange={onChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ToDoList;