import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Signup() {
  const [name, setNameData] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPasswword] = useState("");

  const getData = () => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  useEffect(getData, []);
  return (
    <div className="auth-form">
      <h1 className="section-title">Sign Up</h1>
      <form className="section-form">
        <input className="section-input"></input>
        <input className="section-input"></input>
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
