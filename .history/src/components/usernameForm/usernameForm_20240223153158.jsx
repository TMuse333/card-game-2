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
      const response = await fetch("/submit-username", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: inputUsername }),
      });

      if (response.ok) {
        console.log("Username submitted successfully");
        // Optionally, you can do something with the response, like redirecting
      } else {
        console.error("Failed to submit username");
      }
    } catch (error) {
      console.error("Error submitting username:", error);
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
