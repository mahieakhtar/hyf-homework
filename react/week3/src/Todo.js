
import React from "react";

const Todo = (props) => {
 
  return (
    
    <form id="myForm" onSubmit ={props.onSubmit} >
      <label>Todo Description:</label>
      <input type="text"  name="description"  placeholder="Add task here!" /> <br /><br />
      <label>Deadline:</label>
      <input type="date" name="deadline"  width="100px" />  <br /><br />
      <button type="submit" >Add Todo</button> 
    </form>
  );
}
export default Todo;
