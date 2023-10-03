import { Button, InputNumber } from "antd";
import { Link } from "react-router-dom";
import PriceLabel from "../../components/product/PriceLabel";
import ProductImage from "../../components/product/ProductImage";
import SpecSelect from "../../components/product/SpecSelect";
import { getProduct } from "../../apis/product";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";

import { useEffect, useState } from "react";
import { getSpec } from "../../apis/spec";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [specs, setSpecs] = useState([]);
  const [selectedSpec, setSelectedSpec] = useState("S");
  const [quantity, setQuantity] = useState(1);

  const handleSelect = (value) => {
    setSelectedSpec(value);
  };

  const currentSpec = specs
    ? specs.find((spec) => spec.size === selectedSpec)
    : null;

  useEffect(() => {
    getProduct(productId)
      .then((record) => {
        console.log("record", record);
        const newProduct = {
          ...record.fields,
          fieldId: record.id,
          specIds: record.fields.Spec,
        };
        setProduct(newProduct);
        return newProduct;
      })
      .then((product) => {
        console.log("product", product);
        const specIds = product.Spec;
        return Promise.all(specIds.map((specId) => getSpec(specId)));
      })
      .then((specs) => {
        console.log("specs", specs);
        const newSpecs = specs.map((spec) => {
          return {
            fieldId: spec.id,
            id: spec.fields.id,
            size: spec.fields.name,
            inventory: spec.fields.inventory,
          };
        });
        setSpecs(newSpecs);
        setSelectedSpec(newSpecs[0].size);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

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
              {specs ? (
                <SpecSelect
                  value={selectedSpec}
                  specs={specs}
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
        <div>Loading ...</div>
      )}
    </DefaultLayout>
  );
};

export default ProductDetailsPage;
