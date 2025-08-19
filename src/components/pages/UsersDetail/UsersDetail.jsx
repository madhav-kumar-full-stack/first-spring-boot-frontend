import { useEffect, useState } from "react";
import { useParams } from "react-router";

const UsersDetail = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/user/${id}`
      );
      const userData = await response.json();
      setUser(userData);
    })();
  }, []);

  return <div>{user && <pre>{JSON.stringify(user, null, 2)}</pre>}</div>;
};

export default UsersDetail;
