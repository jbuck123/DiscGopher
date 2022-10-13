import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Signup() {
  // states for registration
  const [username, setUsername] = useState("");
  const [password, setPasswword] = useState("");

  // states for checking the errors
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  // states for checking errors
  const [message, setMessage] = useState("");
  
  // handle submit 
  console.log(message)
  const handleSubmit = async (event) => {
    console.log(username)
    console.log(password)
    event.preventDefault();
    try {
      let res = await fetch("/register", {
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
      
      if (res.status === 201) {
        setUsername("");
        
        setMessage(" User was created successfully")
        setSubmitted(true)
      } else {
        setMessage( "an error has occured")
        setError(true)
      }
    } catch (error) {
      console.log(error)
    }
  } 

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {username} successfully registered!</h1>
      </div>
    );
  };

  // Showing error messages if error is set to true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="auth-form">
      <h1 className="section-title">Register</h1>
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
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
