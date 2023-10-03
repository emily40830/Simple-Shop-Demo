import { useEffect, useState } from "react";
import { getProduct } from "./apis/product";
import { getSpec } from "./apis/spec";

const useProduct = (productFieldId) => {
  const [product, setProduct] = useState(null);
  const [specs, setSpecs] = useState([]);
  const [selectedSpec, setSelectedSpec] = useState("S");

  useEffect(() => {
    let ignore = false;
    getProduct(productFieldId)
      .then((record) => {
        console.log("record", record);
        const newProduct = {
          ...record.fields,
          fieldId: record.id,
          specIds: record.fields.Spec,
        };
        if (!ignore) {
          setProduct(newProduct);
        }

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
        if (!ignore) {
          setSpecs(newSpecs);
          setSelectedSpec(newSpecs[0].size);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      ignore = true;
    };
  }, [productFieldId]);

  return {
    product,
    productSpecs: specs,
    selectedSpec,
    changeSelectedSpec: setSelectedSpec,
  };
};

export { useProduct };
