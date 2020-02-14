import React from 'react';
import Todos from './Todos';
import WatchCount from './WatchCount';


 function App(){
   
  return (
      <div className ='App'> 

      <h1>Todolist</h1>

      <WatchCount />
      <Todos /> 
      
    </div>
  );
  }
export default App;
