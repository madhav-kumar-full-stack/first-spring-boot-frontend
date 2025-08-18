import Dashboard from "../Dashbaord/Dashboard";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <Header />
      <Dashboard />
    </div>
  );
};

export default Layout;
