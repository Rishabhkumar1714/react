import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Users from './User';
import User from './User1';// Here Users is the function name and User is the file name.
import User2 from './User2';
import User3 from './User3';
import {useState} from 'react'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

let data="rishabh kumar singh"
let data1="rishabh kumar singh1714"
function apple(){
  data="rishabh"//when we want to update the values we do not use variables and we use State.
  alert(data)
}


// const [data14,setData]=useState("rishabh1714")
function updateData(){
  data1="rish"
  alert(data1)


}
// function updateData14(){
//   setData("rishz")
// }



root.render(
  <React.StrictMode>
   <Users />
   <User/>
   <User2/>
   <User3/>
   <h1>{data}</h1>
   {/* <h1>{data14}</h1> */}
   {/* <button onClick={apple()}>Click me</button> */}
   <button onClick={apple}>Click me</button>
   {/* <button onClick={alert("hello")}>Click me</button> */}
   <button onClick={()=>alert("hello")}>Click me</button>//Arrow function is not called automatically
   <h1>{data1}</h1>
   <button onClick={updateData}>Update Data</button>

   {/* <button onClick={updateData14}>Update Data</button> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
