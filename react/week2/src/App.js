import React, {useState,useEffect, Fragment} from "react"; 
import Header from "./Header";
import WatchCount from "./WatchCount";
import TodoForm from "./TodoForm";
import Todo from "./Todo";


const todos = [
  {
    "id": 1,
    "description": "Get out of bed ",
    "done": false
  },
  {
    "id": 2,
    "description": "Brush teeth",
    "done": false
  },
  {
    "id": 3,
    "description": "Eat breakfast",
    "done": false
  }
];
const App = () => {

    const [tasks, setTasks] = useState(todos);
    const [inputValue, setInputValue] = useState("");

useEffect(() => {
    let count = 0;
    tasks.map(task => (!task.done ? count++ : null));
    document.title = `${count} ${count > 1 ? "s" : ""} `;
    
  });

  const submit = e => {
    e.preventDefault();
    
    const newArray = tasks.slice();
    console.log(tasks);
    newArray.splice(0, 0, { id: tasks.length+1, description: inputValue, done: false });
    console.log(newArray);
    console.log(newArray.length);
    if (newArray.length === 0) {return alert('No items')};
    setTasks(newArray);
    setInputValue("");
  };

  const buttonClick = (index) => {
    console.log(index);
    const newArray = [...tasks];
    console.log(newArray);
    newArray.splice(index-1, 1);
    console.log(newArray.length);
    setTasks(newArray);
  };

  const handleInputChange = (event, key) => {
    const newToDos = [...tasks];
    console.log(...tasks);
    console.log(event.target.checked);

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
   
    console.log(value);
    console.log(key);

    newToDos[key-1].done = value;
    setTasks(newToDos);
  };
  
  
  return ( 
      <Fragment >
      <Header / >
      < WatchCount / >
      < Todo onSubmit = {submit} value = { inputValue} onChange = { e => setInputValue(e.target.value) } />  
   
    <ul>
      {
        tasks.length===0 ? <p>No items....</p> :
        tasks.map((task, id) => ( <TodoForm key = {task.id} 
          tasks = {task} 
          handleInputChange = {(e) => handleInputChange(e, task.id)} 
          delete = {() => buttonClick(task.id)}         
          />
      ))} 
    </ul>
    </Fragment> 
  );
}

export default App;
