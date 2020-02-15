import React, {useState} from 'react';

const TodoForm = (props) => {
  
  const [checked, setChecked] = useState(false)
  const handleClick = () => setChecked(!checked)

  return (
      <li className= {`${checked ? "checked" : ""}`}>
       {props.todos.isEditing ?
       <span> <input value={props.todos.description} type="text" onChange={props.handleInputChange}/></span>:
        <span>
        {props.todos.description}
        </span>
        }&nbsp;&nbsp; | &nbsp;&nbsp;
       {props.todos.deadline} &nbsp;&nbsp;

       <input type="checkbox" name={props.todos.description} checked={checked} onChange={handleClick}  /> 
      < button onClick={props.delete} > Delete </button>
      {props.todos.isEditing ? <button onClick={props.update}>Update</button> : <button onClick={props.edit}>Edit</button>}
    </li>
  );
}
export default TodoForm; 