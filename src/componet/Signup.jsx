import React, { useState } from "react";
import axios from 'axios'

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [is_married, setis_married] = useState(false);
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      city,
      age,
      is_married,
    };
    console.log(data);
    axios.post("https://pleasant-garment-jay.cyclic.app/users/register", data).then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err)
    })
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          placeholder="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          placeholder="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label htmlFor="">
          Is is_married
          <input
            type="checkbox"
            checked={is_married}
            onChange={(e) => setis_married(e.target.checked)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
