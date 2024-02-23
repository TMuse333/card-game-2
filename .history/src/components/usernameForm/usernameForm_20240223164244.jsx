import React, { useContext, useState } from "react";
import axios from "axios"; // Import Axios library
import { useGameContext } from "../context";

const UsernameForm = () => {
  const [inputUsername, setInputUsername] = useState("");

  const {username, setUsername} = useGameContext()

  const handleInputChange = (event) => {
    setInputUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to your server to submit the username
      const response = await axios.post("http://localhost:9000/", {
        username: inputUsername,
      });

      // Handle the response if needed
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error("Error submitting username:", error.message);
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
