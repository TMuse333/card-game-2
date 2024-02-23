import React, { useState } from "react";
import { useGameContext } from "../context";

const UsernameForm = () => {
  const { username, setUsername } = useGameContext();
  const [inputUsername, setInputUsername] = useState("");

  const handleInputChange = (event) => {
    setInputUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(inputUsername);
    // Now you can send the username to the database or perform any other actions
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your username:
        <input
          type="text"
          value={inputUsername}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UsernameForm;
