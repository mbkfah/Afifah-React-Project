import { useState } from "react";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const consolesernameandpass = () => {
    console.log(username, password);
  };

  return (
    <div>
      <h1> Signup </h1>
      <label> Username:</label>
      <input
        type="username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        className="bg-blue-400 border-2"
      />
      <label> Password :</label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        className="bg-blue-400 border-2"
      />
      <button onClick={consoleUsernameandPass}> Sign Me Up </button>
    </div>
  );
};
