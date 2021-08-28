import axios from "axios";
import React, { useState } from "react";
import Home from "./Home";
​
function Loging() {
  const [userObject, setUserObject] = useState({ id: "", password: "" });
  const [loggedObject, setLoggedObject] = useState({ id: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleForm = (e) => {
    setUserObject({ ...userObject, [e.target.name]: e.target.value });
  };
​
  const login = async (e) => {
    e.preventDefault();
    let res = await axios.get(`http://localhost:8095/login/${userObject.id}`);
    console.log(res.data);
    if (
      userObject.id === res.data.id &&
      userObject.password === res.data.password
    ) {
      setIsLoggedIn(true);
    }
  };
​
  if (isLoggedIn) {
    return <Home />;
  } else {
    return (
      <div
        className="container border border-info w-50 p-5 mt-5 text-light shadow-lg p-3 mb-5 bg-white rounded"
        style={{
          background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        }}
      >
        <h1 className="text-center">Login</h1>
        <form className="my-2">
          <div className="form-group row align-items-center">
            <label htmlFor="email" className="col-sm-5">
              User Name:
            </label>
            <input
              type="text"
              id="email"
              className="form-control w-50 my-2 col-sm-6"
              placeholder="abc@gmail.com"
              name="id"
              required
              onChange={handleForm}
            />
          </div>
          <div className="form-group row align-items-center">
            <label htmlFor="password" className="col-sm-5">
              {" "}
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="form-control w-50 my-2 col-sm-6"
              placeholder="Abcd9\#"
              name="password"
              required
              onChange={handleForm}
            />
          </div>
​
          <div className="text-center row">
            <div className="col-sm-5"></div>
            <button
              className="btn btn-outline-info my-4 col-sm-6"
              type="submit"
              onClick={login}
            >
              Login
            </button>
            {/* <Link to="/home" className="btn btn-outline-info my-4">
            Login
          </Link> */}
          </div>
        </form>
      </div>
    );
  }
}