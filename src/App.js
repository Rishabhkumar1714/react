import logo from './logo.svg';
import './App.css';
import React from 'react'
//import Users from './User';
// import User2 from './User2';

function App() {
  const[status,setStatus]=React.useState(true)

  return (
    <div className="App">
      {
        status? <h1>Hello World</h1>:null
      }

      <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Show</button>
      <button onClick={()=>setStatus(!status)}>Toggle</button>

     
      {/* <Users /> */}
      {/* <User2 /> */}
      {/* <button>Click me</button> */}
     
    </div>
  );
}

export default App;
