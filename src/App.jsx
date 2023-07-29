 import { useState, useReducer } from 'react';
import './App.css';
import ToDoList from './TodoList';
import ToDoForm from './TodoForm';
import ToDoFooter from './TodoFooter';

const reducer = (state, action) => {
    if (action.type === "add") {
      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload.text,
          isCompleted: false,
        }
      ]
    } else if (action.type === "delete") {
      return state.filter((t) => t.id !== action.payload.id);
    } else if (action.type === "clear") {
      return state.filter((todo) => !todo.isCompleted);
    }else if(action.type == "update"){
      return state.map(todo => todo.id === action.payload.id ? {...todo, isCompleted: !todo.isCompleted} : todo)
    }
  }

function App() {
  const [toDos, dispatch] = useReducer(reducer, [
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false,
    },
  ]);

  return (
    <div>
      <ToDoForm
        onAdd={(text) => {
          dispatch({
            type: "add",
            payload: {
              text: text
            }
          });
        }}
      />
      <ToDoList
        todo={toDos}
        onChange={(id) => {
          dispatch({
            type: "update",
            payload: {
              id
            }
          });
        }}
        onDelete={(todo) => {
          dispatch({
            type: "delete",
            payload: {
              id: todo.id
            }
          });
        }}
        onClearCompleted={() => {
          dispatch({
            type: "clear"
          });
        }}
      />
      <ToDoFooter
        todo={toDos}
        onClearCompleted={() => {
          dispatch({
            type: "clear"
          });
        }}
      />
    </div>
  );
}

export default App