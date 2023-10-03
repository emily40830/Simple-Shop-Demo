import appAxios from "./appAxios";

export const getProductList = async () => {
  const { records } = await appAxios.get("Product");

  return records;
};

export const getProduct = async (productFieldId) => {
  const data = await appAxios.get(`Product/${productFieldId}`);

  return data;
};
