import { useContext, memo } from "react";
import { UsersContext } from "../Users";

const UsersBack = ({ address }) => {
  const { vonceq } = useContext(UsersContext);

  return (
    <div className="users-back">
      <p>
        address:{address && address.city} {vonceq}
      </p>
    </div>
  );
};

export default memo(UsersBack);
