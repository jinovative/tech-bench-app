import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-form">
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
