import { useParams } from "react-router-dom";
import SingleUser from "../components/singleUser/SingleUser";
import Layout from "../layout/Layout";

const SingleUserPage = () => {
  const { id } = useParams();

  return (
    <Layout>
      {/* {
      t("x")
    } */}
      <SingleUser id={id} />
    </Layout>
  );
};

export default SingleUserPage;
