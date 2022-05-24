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
      setError("Los campos son obligatorios");
      return;
    }

    if (name === "") {
      setError("El nombre del usuario es obligatorio");
      return;
    }

    if (password === "") {
      setError("La contraseña es obligatoria");
      return;
    }

    if (password.length < 8) {
      setError("La contraseña debe contener al menos 8 caracteres");
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
      setError("Los campos son obligatorios");
      return;
    }

    if (name === "") {
      setError("El nombre del usuario es obligatorio");
      return;
    }

    if (password === "") {
      setError("La contraseña es obligatoria");
      return;
    }
    setError("");

    const data = { username: name, password: hashedPassword };

    const response = await axiosInstance.post("/login", data);

    if (response.data.msg === "NO") {
      toast.error(`${response.data.msg}`);
    } else {
      toast.success(`${response.data.msg}`);
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
