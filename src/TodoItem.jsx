const ToDoItem = ({ toDo, onChange, onDelete }) => {
    return (
      <div>
        <label>
        <input type="checkbox" checked={toDo.isCompleted} onChange={() => {
                    onChange(toDo.id);
                }}/>
          {toDo.text}
          <button onClick={() => onDelete(toDo)}>x</button>
        </label>
      </div>
    );
  };
  
  export default ToDoItem;