import { getSingleUser } from "../../api/api";
import { useEffect, useState, useCallback } from "react";
import Loading from "../loading/Loading";

import "./SingleUser.scss";

const SingleUser = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({});

  const getData = useCallback(async () => {
    try {
      const { data } = await getSingleUser(id);
      setUserData(data);
      if (error) {
        setError(false);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [error, id]);

  useEffect(() => {
    getData();
  }, [id]);
  return (
    <div>
      {loading && <Loading />}
      {!loading && !error && (
        <>
          <h1>{userData && userData.name}</h1>
          <p>City-{userData && userData.address && userData.address.city}</p>
          <p>
            ZipCode-{userData && userData.address && userData.address.zipcode}
          </p>
          <p>Phone-{userData && userData.phone}</p>
          <p>
            CompanyName-{userData && userData.company && userData.company.name}
          </p>
          <p>
            CompanyCatchPhrase-
            {userData && userData.company && userData.company.catchPhrase}
          </p>
        </>
      )}
    </div>
  );
};

export default SingleUser;
