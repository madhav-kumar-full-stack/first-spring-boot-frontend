import { useEffect, useState } from "react";

import styles from "./Users.module.css";
import { Link, useNavigate } from "react-router";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showDelete, setShowDelete] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users`);
    const users = await response.json();
    setUsers(users);
  };

  const handleEdit = async (event, id) => {
    event.stopPropagation();
    event.preventDefault();

    navigate(`/edit-user/${id}`);

    setUsers(users.filter((user) => user.id !== id));
  };

  const handleDelete = async (event, id) => {
    event.stopPropagation();
    event.preventDefault();

    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/user/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      fetchUsers();
    } else {
      alert("Failed to delete user:");
      return;
    }

    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <div className="container-fluid row d-flex">
        <div className="row justify-content-end">
          <div className="col-4 d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          {users.map((user) => (
            <Link
              key={user.id}
              className={`${styles.card} col-3 mx-4 my-4 p-3 py-4`}
              to={`${user.id}`}
            >
              <div className="position-relative text-center">
                <img
                  src="https://i.imgur.com/stD0Q19.jpg"
                  width="100"
                  className="rounded-circle"
                />
                <button
                  onClick={(event) => handleEdit(event, user.id)}
                  className="rounded-circle position-absolute top-0 start-0"
                  role="button"
                >
                  <i className="p-2 fa fa-pencil"></i>
                </button>

                <button
                  onClick={(event) => handleDelete(event, user.id)}
                  className="rounded-circle position-absolute top-0 end-0"
                  role="button"
                >
                  <i className="p-2 fa fa-solid fa-trash"></i>
                </button>
                <h3 className="mt-2">
                  {user.fName} {user.lName}
                </h3>
                <span className="mt-1 clearfix">{user.profession}</span>

                <div className="row mt-3 mb-3">
                  <div className="col-md-4">
                    <h5>Projects</h5>
                    <span className="num">10</span>
                  </div>
                  <div className="col-md-4">
                    <h5>Projects</h5>
                    <span className="num">10</span>
                  </div>
                  <div className="col-md-4">
                    <h5>Projects</h5>
                    <span className="num">10</span>
                  </div>
                </div>

                <hr className="line" />

                <small className="mt-4">
                  I am an android developer working at google Inc at
                  california,USA
                </small>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
