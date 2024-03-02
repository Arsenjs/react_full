import { Link, useNavigate } from "react-router-dom";
import { ROUTER } from "../../../router/router";

const UsersFront = ({ id, username, name }) => {
  const navigate = useNavigate();

  return (
    <div
      className="users-front"
      key={id}
      onClick={() => {
        // navigate(`${ROUTER.USERS_PAGE_ROUTE}/${id}`); 2-rd tarberak aranc Link-i
      }}
    >
      <h3>
        <Link to={`${ROUTER.USERS_PAGE_ROUTE}/${id}`}>{name}</Link>
      </h3>
      <p>username:{username}</p>
    </div>
  );
};

export default UsersFront;
