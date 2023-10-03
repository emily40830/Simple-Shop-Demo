import { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { getProductList } from "../../apis/product";
import ProductCard from "../../components/product/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductList()
      .then((records) => {
        const products = records.map((record) => {
          return {
            fieldId: record.id,
            ...record.fields,
          };
        });
        setProducts(products);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 mb-3">
        {products.map((product) => {
          return (
            <ProductCard
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          );
        })}
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
