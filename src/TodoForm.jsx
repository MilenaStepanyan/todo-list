import { useState } from "react";

const ToDoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAdd(text);
          setText("")
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>add</button>
      </form>
    </div>
  );
};

export default ToDoForm;