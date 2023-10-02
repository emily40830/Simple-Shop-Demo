import { Layout } from "antd";
import Container from "../components/common/Container";

const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <Layout.Header>
        <h1 className="c-white text-center text-white">Simple Shop</h1>
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
