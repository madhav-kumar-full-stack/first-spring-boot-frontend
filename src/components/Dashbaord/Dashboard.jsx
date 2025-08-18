import { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users`);
      const users = await response.json();
      setUsers(users);
    })();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.fName}</h2>
          <p>{user.lName}</p>
          <p>{user.profession}</p>
          <p>{user.age}</p>
          <p>{user.salary}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
