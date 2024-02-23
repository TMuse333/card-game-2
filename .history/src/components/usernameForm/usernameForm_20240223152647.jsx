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

    try {
      // Make a POST request to submit the username
      const response = await fetch('/submit-username', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: inputUsername }),
      });

      const data = await response.json();

      if (response.ok) {
        // If the server successfully processed the request, update the context
        setUsername(inputUsername);
      } else {
        console.error('Failed to register username:', data.message);
        // Handle the case where the server returns an error
      }
    } catch (error) {
      console.error('Error submitting username:', error);
      // Handle network or other errors
    }
  };

  return (
    <div className="username-container">
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
    </div>
  );
};

export default UsernameForm;
