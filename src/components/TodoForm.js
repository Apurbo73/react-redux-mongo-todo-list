import React, { useState } from "react";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const handleSubmit = e => {};
  return (
    <div>
      <form action="" onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="enter todo title"
          onChange={e => {
            setTodo(e.target.value);
          }}
        /> <br />
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
};

export default TodoForm;
