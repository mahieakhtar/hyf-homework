import React from "react";

const Todo = (props) => {
  return (
    
    <form onSubmit ={props.onSubmit} style={{ paddingLeft: 40, marginTop: 16 }}>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Add task here!"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
export default Todo;

