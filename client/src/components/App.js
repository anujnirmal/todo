import React from "react";
import AddTask from "./AddTask.js";
import "../styles.css";
import axios from 'axios';
import {useState} from 'react';


function App() {
// const [user, setUser] = useState("");

// function handleChange(event){
//   console.log(event.target.value);
//   setUser(event.target.value);
// }
  
// function handleSubmit(event){
//   const info = {"username": user};
//   axios.post('http://localhost:5000', info)
//     .then(response => console.log(response.status))
//     .catch(error => {
//         console.error('There was an error!', error);
//     })

//   console.log("submitted");
//   event.preventDefault();
// }

  return (
    <div className="container">
      <div className="ui"><AddTask /></div>
    </div>
  );
}

export default App;
