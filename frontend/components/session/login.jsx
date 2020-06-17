import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/session";

const Login = props => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatcher = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatcher(login({username, password}))
      .then(() => props.history.push("/chirps"));
  }

  return <div className="session-form">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <label>Username:
        <input type="text" value={ username } onChange={ event => setUsername(event.target.value) }/>
      </label>
      <label>Password:
        <input type="password" value={ password } onChange={ event => setPassword(event.target.value) }/>
      </label>
      <button>Login</button>
    </form>
  </div>
};

export default Login;