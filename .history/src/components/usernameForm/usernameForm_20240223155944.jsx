import React, { useState } from "react";
import { useGameContext } from "../context";

const UsernameForm = () => {

  const [inputUsername, setInputUsername] = useState("");

  const handleInputChange = (event) => {
    setInputUsername(event.target.value);
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
