import { Button, InputNumber } from "antd";
import { Link } from "react-router-dom";
import PriceLabel from "../../components/product/PriceLabel";
import ProductImage from "../../components/product/ProductImage";
import SpecSelect from "../../components/product/SpecSelect";
import { getProduct } from "../../apis/product";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";

import { useState } from "react";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [selectedSpec, setSelectedSpec] = useState("S");
  const [quantity, setQuantity] = useState(1);

  const product = getProduct(productId);

  const handleSelect = (value) => {
    setSelectedSpec(value);
  };
  const { id, title, price, description, imageUrl, specs } = product;
  const currentSpecs = specs.filter((spec) => spec.size === selectedSpec);

  return (
    <DefaultLayout>
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 p-5 mb-3">
        <ProductImage src={imageUrl} />
        <div className="px-3">
          <h2 className="text-lg">{title}</h2>
          <p className="mb-5 mt-5">{description}</p>

          <PriceLabel className="mb-3">NT$ {price}</PriceLabel>
          <div className="mb-3 flex items-center">
            <SpecSelect
              value={selectedSpec}
              specs={specs}
              onSelect={handleSelect}
              className="mr-5"
            />
            <h3>剩餘 {currentSpecs ? currentSpecs[0].inventory : 0} 件</h3>
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
    </DefaultLayout>
  );
};

export default ProductDetailsPage;
