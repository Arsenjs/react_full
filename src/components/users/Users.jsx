import { createContext, useEffect, useState } from "react";
import { getUsers } from "../../api/api";
import UsersItem from "./usersItem/UsersItem";
import Loading from "../loading/Loading";

import "./Users.scss";

export const UsersContext = createContext(null);

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [usersData, setUsersData] = useState([]);

  const vonceq = "VONC EQ????";

  async function getData() {
    try {
      const { data } = await getUsers();
      setUsersData(data);
      if (error) {
        setError(false);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="users">
      {loading && <Loading />}
      {error && <h1>something went wrong</h1>}

      <UsersContext.Provider value={{ vonceq }}>
        {!loading &&
          !error &&
          usersData.map(({ id, name, username, address }) => {
            return (
              <UsersItem
                id={id}
                key={id}
                name={name}
                username={username}
                address={address}
              />
            );
          })}
      </UsersContext.Provider>
    </div>
  );
};

export default Users;
//component sra mej 2 ktor dimayin u hetevi hatvacner karan komponent linen /front/ back/ unenuma mihat false i depqum cuyc tam kam demy kam hetevy
