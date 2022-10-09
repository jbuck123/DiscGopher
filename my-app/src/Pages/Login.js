import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth-form">
      <h1 className="section-title">Log in</h1>
      <form className="section-form">
        <input className="section-input"></input>
        <input className="section-input"></input>
      </form>
      <div className="section-content">
        <p>New user?</p>
        <button>
          <Link className="link" to="/Register">
            Register account here
          </Link>
        </button>
      </div>
    </div>
  );
}
