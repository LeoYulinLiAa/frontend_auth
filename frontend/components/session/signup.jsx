import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewUser } from "../../actions/session";

const SignUp = props => {

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createNewUser({ username, email, password}))
      .then(() => props.history.push("/chirps"));
  }

  return <div className="session-form">
    <h2>Sign up</h2>
    <form onSubmit={handleSubmit}>
      <label>Username:
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
      </label>
      <label>Email:
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <label>Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <button>Sign up</button>
    </form>
  </div>
}

export default SignUp;