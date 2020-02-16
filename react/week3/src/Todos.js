
import React, {useState, useEffect} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
    
function Todos() {
  const [todos, setTodos] = useState([]);

useEffect(function() {
      fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw')
      .then(response => response.json())
      .then(data => {
        setTodos(data)
      });
    },[]);


    const submit = (e) => {
      e.preventDefault();
      const inputs = e.target.getElementsByTagName('input');
      const newArray = [...todos];
      newArray.splice(newArray.length+1, 0, { 
          id: todos.length+1, 
          description: inputs.description.value, 
          deadline:inputs.deadline.value}
      );
      setTodos(newArray);
      clearForm();
    };
  
    const clearForm = () => {
      document.getElementById("myForm").reset(); 
    }
  
    const buttonClick = (type, id) => {
      const newArray = [...todos];
      if(type==='delete'){
        const index = newArray.findIndex(obj => obj.id === id);
        if(index > -1) {
          newArray.splice(index, 1);
        }
      } else if(type==='edit') {
        newArray[id-1].isEditing = !todos.isEditing;
      } else if(type==='update') {
        newArray[id-1].isEditing = false;
      }
      setTodos(newArray);
    };

  
    const handleInputChange = (event, key) => {
      const newTodos = [...todos];
      const target = event.target;
      if(target.type === 'checkbox') {
        newTodos[key-1].done = target.checked;
      } else {
        newTodos[key-1].description = target.value;
      }
      setTodos(newTodos);
    };
  
    return ( 
        < >
        < Todo onSubmit = {submit}  />  
        
      <ul>
        {
          
          todos.length===0 ? <p>No items....</p> :
          
          todos.map((todo, id) => ( <TodoForm key = {todo.id} 
            todos = {todo} 
            handleInputChange = {(e) => handleInputChange(e, todo.id)} 
            delete = {() => buttonClick('delete', todo.id)}         
            edit = {() => buttonClick('edit', todo.id)}        
            update = {() => buttonClick('update', todo.id)}   
            />
        ))} 
      </ul>
      </> 
    );
  }
  export default Todos;
  
  