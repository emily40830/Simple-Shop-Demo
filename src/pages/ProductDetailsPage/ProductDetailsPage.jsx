import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, InputNumber, Skeleton } from "antd";

import PriceLabel from "../../components/product/PriceLabel";
import ProductImage from "../../components/product/ProductImage";
import SpecSelect from "../../components/product/SpecSelect";
import DefaultLayout from "../../layouts/DefaultLayout";

import { useProduct } from "../../hooks";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { product, productSpecs, selectedSpec, changeSelectedSpec } =
    useProduct(productId);

  const [quantity, setQuantity] = useState(1);

  const handleSelect = (value) => {
    changeSelectedSpec(value);
  };

  const currentSpec = productSpecs
    ? productSpecs.find((spec) => spec.size === selectedSpec)
    : null;

  return (
    <DefaultLayout>
      {product ? (
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 p-5 mb-3">
          <ProductImage src={product.imageUrl} />
          <div className="px-3">
            <h2 className="text-lg">{product.title}</h2>
            <p className="mb-5 mt-5">{product.description}</p>

            <PriceLabel className="mb-3">NT$ {product.price}</PriceLabel>
            <div className="mb-3 flex items-center">
              {productSpecs ? (
                <SpecSelect
                  value={selectedSpec}
                  specs={productSpecs}
                  onSelect={handleSelect}
                  className="mr-5"
                />
              ) : (
                <div>....</div>
              )}

              <h3>剩餘 {currentSpec ? currentSpec.inventory : 0} 件</h3>
            </div>
            <div className="mb-3 flex items-center">
              <div>購買數量：</div>
              <InputNumber
                className="mr-2"
                min={1}
                max={10}
                value={quantity}
                onChange={(value) => setQuantity(value)}
                addonAfter="件"
              />
            </div>
            <Link to="/cart">
              <Button type="primary" block className="bg-primary">
                立即購買
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <Skeleton />
      )}
    </DefaultLayout>
  );
};

export default ProductDetailsPage;
