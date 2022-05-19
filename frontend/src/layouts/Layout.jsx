import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>Layout</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
