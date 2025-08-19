import { Outlet } from "react-router";
import Dashboard from "../pages/Users/Users";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
