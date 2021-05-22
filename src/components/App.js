import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <form>
        <input data-testid = 'name' type="text" placeholder="Name"/><br></br>
        <input data-testid = 'email' type="email" placeholder="Email ID"/><br></br>
        <label for="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select><br></br>
        <input data-testid = 'phoneNumber' type="number" placeholder="Phone Number"/><br></br>
        <input data-testid = 'password' type="password" placeholder="Password"/><br></br>
        <button data-testid = 'submit' type="button">Submit</button>
      </form>
      
    </div>
  )
}


export default App;
