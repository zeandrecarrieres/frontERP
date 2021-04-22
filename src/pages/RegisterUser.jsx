import React, { useState } from "react";
import { Redirect } from 'react-router-dom'
import "./register.css";

function RegisterUser() {
  const [type, setType] = useState("");
  const [register_number, setRegister_number] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect,setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    await fetch(process.env.REACT_APP_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        register_number,
        name,
        email,
        password
      }),
    });

  
      return <Redirect to="/" />;
  

  };
  return (
    <div className="add-client">
      <h1>Add new User</h1>
      <div className="form-group">
        <form onSubmit={submit}>
          <div className="form-line">
            <select
              className="select-field"
              value={type}
              onChange={(e) => setType(e.target.value)}
            > <option value="Admin">...</option>
              <option value="Admin">Administrator</option>
              <option value="User">User</option>
            </select>
            <input
              type="text"
              placeholder="register_number"
              value={register_number}
              onChange={(e) => setRegister_number(e.target.value)}
            />
          </div>

          <div className="form-line">
           
            <input
              type="text"
              placeholder="name"
              required value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-line">
            <input
              type="text"
              placeholder="email"
              required value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              required value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Create User</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;
