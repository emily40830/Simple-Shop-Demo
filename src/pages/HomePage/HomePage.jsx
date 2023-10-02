import { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { getProductList } from "../../apis/product";
import ProductCard from "../../components/product/ProductCard";

const productData = getProductList();

const HomePage = () => {
  const [products, setProducts] = useState(productData);
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
