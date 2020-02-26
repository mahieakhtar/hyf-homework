import React from 'react';
import './index.css';
import FetchUser from './components/FetchUser';
//import Repo from './components/Repo';

function App() {
  return (
    <div className="App">
     <h1 className = 'App-header'>Github user searcher</h1>
     <FetchUser/> 
   {/*<Repo/>*/}
    </div>
  );
}

export default App;