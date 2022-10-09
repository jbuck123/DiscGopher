import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Signup() {
  // states for registration
  const [username, setUsername] = useState("");
  const [password, setPasswword] = useState("");

  // states for checking errors
  const [message, setMessage] = useState("");
  
  // handle submit 
  console.log(message)
  const handleSubmit = async (event) => {
    console.log(username)
    console.log(password)
    event.preventDefault();
    try {
      let res = await fetch("/users", {
        method: "POST",
        // also it wont work with out headers, you need to tell fetch that youre sending json
        headers: {
          "Content-Type": "application/json"
        },
        // When you send a fetch you need to send it as a JSON. thats why we JSON.stringify
        body: JSON.stringify({
          name: username,
          password: password
        }),
      });
 
      const resJson = await res.json();
      console.log(...resJson)
      if (res.status === 200) {
        setUsername("");
        
        setMessage(" User was created successfully")
      } else {
        setMessage( "an error has occured")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="auth-form">
      <h1 className="section-title">Register</h1>
      <form onSubmit={handleSubmit} className="section-form">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="UserName"
          className="section-input"
        ></input>
        <input
          value={password}
          onChange={(e) => setPasswword(e.target.value)}
          placeholder="Password"
          className="section-input"
        ></input>
        <button type="submit"> Submit</button>
      <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
      <div className="section-content">
        <p>Already Have an account?</p>
        <button>
          <Link className="link" to="/Login">
            Login up here
          </Link>
        </button>
      </div>
    </div>
  );
}
