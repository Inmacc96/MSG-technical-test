import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <main className="container-main">
        <Outlet />
      </main>
      
      <footer>
        <p>&copy; 2022 - Realizado por Inma Caballero</p>
      </footer>
    </>
  );
};

export default Layout;
