import React, { useState } from "react";
import { useGameContext } from "../context";

const UsernameForm = () => {
  const { setUsername } = useGameContext();
  const [inputUsername, setInputUsername] = useState("");

  const handleInputChange = (event) => {
    setInputUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Update the context with the username
    setUsername(inputUsername);

    // Send the username to the database
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: inputUsername }),
      });

      if (response.ok) {
        console.log("Username registered successfully");
        // Optionally, you can perform additional actions after successful registration
      } else {
        console.error("Failed to register username");
      }
    } catch (error) {
      console.error("Error during username registration:", error);
    }
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
