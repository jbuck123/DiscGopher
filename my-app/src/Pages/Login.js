import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  // setting states
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // states for checking errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // setting message that sets error or welcome
  const [message, setMessage] = useState("");

  console.log(message);

  const handleSubmit = async (event) => {
    console.log(name);
    console.log(password);
    event.preventDefault();
    try {
      let response = await fetch("/login", {
        method: "POST",
        // need this everytime
        headers: {
          "Content-Type": "application/json",
        },
        // when you send a fetch you need to send it back as JSON
        body: JSON.stringify({
          name: name,
          password: password,
        }),
      });

      const resJson = await response.json();
      console.log(resJson);
      if (response.status === 200) {
        setName("");
        setMessage(" Logged in seccessfully");
        setSubmitted(true);
        setError(false)
        window.location.assign("/")
      } else {
        setMessage(" an error has occured");
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully logged  in!</h1>
      </div>
    );
  };

  // Showing error messages if error is set to true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="auth-form">
      <h1 className="section-title">Login</h1>
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <form onSubmit={handleSubmit} className="section-form">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="UserName"
          className="section-input"
        ></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="section-input"
        ></input>
        <button type="submit"> Submit</button>
      </form>
      <div className="section-content">
        <p>Don't have an account?</p>
        <button>
          <Link className="link" to="/Register">
            Register here
          </Link>
        </button>
      </div>
    </div>
  );
}
