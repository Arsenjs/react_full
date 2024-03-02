import { useState } from "react";

import UsersBack from "../usersBack/UsersBack";
import UsersFront from "../usersFront/UsersFront";

const UsersItem = ({ id, name, username, address }) => {
  const [back, setBack] = useState(false);

  return (
    <div>
      {back ? (
        <UsersBack address={address} />
      ) : (
        <UsersFront name={name} username={username} id={id} />
      )}
      <button
        className="btn"
        onClick={() => {
          setBack((prev) => !prev);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default UsersItem;
