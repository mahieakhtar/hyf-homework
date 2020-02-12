 
import React from "react";

const TodoForm = (props) => {
  
  return (

    <li style = {{ textDecoration: props.tasks.done ? "line-through" : "" }}>
    
       {props.tasks.description} 
      
       <input type="checkbox" name={props.tasks.description} checked={props.tasks.done} onChange={props.handleInputChange}  /> 
      
      < button onClick={props.delete} > Delete </button>
      
    </li>
  );
}

export default TodoForm; 


