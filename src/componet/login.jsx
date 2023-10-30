import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password
    };
    console.log(data);
    axios.post("https://pleasant-garment-jay.cyclic.app/users/login", data).then((res) => {
        console.log(res.data.loginSuccessful)
        localStorage.setItem("token", res.data.loginSuccessful)
    }).catch((err) => {
        console.log(err)
    })
  };

  return (
    <div>
    <form action="" onSubmit={handleSubmit}>
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Login