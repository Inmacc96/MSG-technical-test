import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <header className="bg-dsg">
        <h1>Prueba</h1>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-dsg">
        <p>&copy; 2022 - Realizado por Inma Caballero</p>
      </footer>
    </>
  );
};

export default Layout;
