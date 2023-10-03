import { Layout } from "antd";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";

const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <Layout.Header>
        <Link to="/">
          <h1 className="c-white text-center text-white">Simple Shop</h1>
        </Link>
      </Layout.Header>

      <Layout.Content className="py-5">
        <Container>{children}</Container>
      </Layout.Content>
      <Layout.Footer className="text-center">
        ©{new Date().getFullYear()} Simple Shop
      </Layout.Footer>
    </Layout>
  );
};

export default DefaultLayout;
