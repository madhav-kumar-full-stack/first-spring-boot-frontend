import { Navigate, Route, Routes } from "react-router";
import Layout from "../Layout/Layout";
import Users from "../pages/Users/Users";
import UsersDetail from "../pages/UsersDetail/UsersDetail"
import CreateUser from "../pages/CreateUser/CreateUser";
import EditUser from "../pages/EditUser/EditUser";

const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="user" replace />} />
      <Route path="user" element={<Users />} />
      <Route path="user/:id" element={<UsersDetail />} />
      <Route path="create-user" element={<CreateUser />} />
      <Route path="edit-user/:id" element={<EditUser />} />
    </Route>
  </Routes>
);

export default Router;
