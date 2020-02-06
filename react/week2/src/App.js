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
    "done": true
  }
];
const App = () => {

    const [tasks, setTasks] = useState(todos);
    const [inputValue, setInputValue] = useState("");

useEffect(() => {
    let count = 0;
    tasks.map(task => (!task.done ? count++ : null));
    
  });

  const submit = e => {
    e.preventDefault();
    if (inputValue === "") return alert("No items");

    const newArray = tasks.slice();
    newArray.splice(0, 0, { description: inputValue, done: false });
    setTasks(newArray);
    setInputValue("");
  };

  const buttonClick = ({ type, index }) => {
    const newArray = tasks.slice();
    if (type === "delete") newArray.splice(index, 1);
    else if (type === "completed") newArray[index].done = true;

    return setTasks(newArray);
  };

  return ( 
      <Fragment >
      <Header / >
      < WatchCount / >

      < Todo onSubmit = {submit} value = { inputValue} onChange = { e => setInputValue(e.target.value) } />  
   
    <ul>
      {
        tasks.map((task, index) => ( <TodoForm key = {index } 
          tasks = {task } 
          delete = {() => buttonClick({type: "delete", index})}         
          completed = {() => buttonClick({ type: "completed",index})} 
          />
      ))} 
    </ul>
    </Fragment> 
  );
}

export default App;