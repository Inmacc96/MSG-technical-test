import { useState } from "react";
import Error from "../../components/Error/Error";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check the email and password is not empty and the password is at least 8 characters long.
    if (email == "" && password == "") {
      setError("Los campos son obligatorios");
      return;
    }

    if (email === "") {
      setError("El email es obligatorio");
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
    navigate("/fileUpload")
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Introduzca su email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Introduzca su contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <Error error={error} />}

        <input type="submit" value="Iniciar sesión" />
      </form>
    </div>
  );
};

export default Login;
