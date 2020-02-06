import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class TodoItem extends React.Component {
  render() {
    const { task, date } = this.props;
    return (
      <li>
        <h3>
          {task} :: {date}
        </h3>
      </li>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {this.props.tasks.map(task => {
            return <TodoItem task={task.task} date={task.date} />;
          })}
        </ul>
      </div>
    );
  }
}

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
ReactDOM.render(<TodoList tasks = {tasks} />, rootElement);
