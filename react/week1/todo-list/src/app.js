import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const TodoItem = props => {
    return (
      <li>
        <h3>
          {props.task} :: {props.date}
        </h3>
      </li>
    );
  };
  const TodoList = props => {
    return (
      <div>
        <h1>To do List</h1>
        <ul>
          {props.tasks.map(task => {
            return <TodoItem task={task.task} date={task.date} />;
          })}
        </ul>
      </div>
    );
  };
  
  const tasks = [
    {
      task: "Get out of bed",
      date: "Wed Sep 13 2017"
    },
    {
      task: "Brush teeth",
      date: "Thu Sep 14 2017"
    },
    {
      task: "Eat breakfast",
      date: "Fri Sep 15 2017"
    }
  ];
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<TodoList tasks={tasks} />, document.getElementById("root"));
  