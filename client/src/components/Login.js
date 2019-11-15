import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  const [ form , setForm] = React.useState({ username: "", password: "" })
 
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  
  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", form)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.payload)
        props.history.push('/dashboard')
      })
      .catch( err =>
        console.log(err)
        )
  }
  return (
    <div>
      <form onSubmit={login}>
        <input 
          type='text'
          name='username'
          onChange={handleChange}
          value={form.username}
          placeholder="Username"
        ></input>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={form.password}
          placeholder="Password"
        ></input>
        <button type="submit">Login</button>

      </form>
    </div>
  );
};

export default Login;