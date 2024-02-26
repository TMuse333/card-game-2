import React, { useContext, useState } from "react";
import axios from "axios";
import { useGameContext } from "../context";
import './usernameForm.css'

const UsernameForm = () => {
  const [inputUsername, setInputUsername] = useState("");
  const { username, setUsername } = useGameContext();

  const handleInputChange = (event) => {
    setInputUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the username in the context
    setUsername(inputUsername);

    // Additional logic, if needed
    // For example, you can make an API call to your backend to save the username
    // using axios.post or any other method as per your requirements
  };

  return (
    <form onSubmit={handleSubmit}
    className='username-container'>
      <label>
        Enter your username:
        <input
          type="text"
          value={inputUsername}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit"
      >Submit</button>
    </form>
  );
};

export default UsernameForm;
