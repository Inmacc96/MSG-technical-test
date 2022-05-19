import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Introduzca su email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Introduzca su contraseña"
          />
        </div>

        <input type="submit" value="Iniciar sesión" />
      </form>
    </div>
  );
};

export default Login;
