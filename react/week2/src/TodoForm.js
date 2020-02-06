 
import React from "react";

const TodoForm = (props) => {

  const { description, done } = props.tasks;

  return (

    <li style = {{ textDecoration: done ? "line-through" : "" }} >
      {description} 
      { <input type="checkbox" onClick={props.completed} /> }
      < button onClick={props.delete} > Delete </button>
    </li>
  );
}
export default TodoForm; 

