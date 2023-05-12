import { useState } from "react";

// Todo List Component 
function Todos({ todos, addTodo}){
  return (
    <>
      <ul className="todoTaskList">
      {todos.map((todo) => {
        return <li key={todo?.id}><p>{todo?.task}</p><span className="button btn-primary-outlined btn-sm" onClick={() => addTodo(todo?.id)}>Remove</span></li>
      })}
      </ul>
    </>
  );
};

export default Todos

