import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { push } = useHistory();

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // useEffect(() => {
  //   // make a post request to retrieve a token from the api
  //   // when you have handled the token, navigate to the BubblePage route
  // });

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log("res", res);
        localStorage.setItem("token", res.data.payload);
        push("/colors");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className="login-form">
      <form onSubmit={login}>
        <label htmlFor="username">UserName:</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={onChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={onChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
