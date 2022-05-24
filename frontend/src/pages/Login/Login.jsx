import { useState } from "react";
import Error from "../../components/Error/Error";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import axiosInstance from "../../utils/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check the email and password is not empty and the password is at least 8 characters long.
    if (name == "" && password == "") {
      setError("All fields are required");
      return;
    }

    if (password.length < 8) {
      setError("The password must contain at least 8 characters");
      return;
    }

    setError("");
    setName("");
    setPassword("");
    navigate("/fileUpload");
  };

  // Encrypted password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const sendAPI = async () => {
    if (name == "" && password == "") {
      setError("All fields are required");
      return;
    }

    setError("");

    const data = { username: name, password: hashedPassword };
    console.log(hashedPassword);

    const result = await axiosInstance.post("/login", data);

    if (result.data.responseAPI.msg === "NO") {
      toast.error(`${result.data.responseAPI.msg}`);
    } else {
      toast.success(`${result.data.responseAPI.msg}`);
    }

    if (result.data.responseAPI.isValidPassword) {
      toast.success("Correct password")
    } else{
      toast.error("Incorrect password")
    }

    setName("");
    setPassword("");
  };

  return (
    <>
      <div className="container-main">
        <div className="container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-form">
              <label htmlFor="name">Username</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-form">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <Error error={error} />}

            <input type="submit" value="Log In" />
          </form>

          <button className="button-sendAPI" onClick={sendAPI}>
            Send API
          </button>

          <ToastContainer theme="colored" />
        </div>
      </div>

      <footer className="footer-login">
        <p>&copy; 2022 - Made by Inma Caballero</p>
      </footer>
    </>
  );
};

export default Login;
