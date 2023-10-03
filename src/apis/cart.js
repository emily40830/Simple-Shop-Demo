import appAxios from "./appAxios";

export const getCartProducts = async () => {
  const { records } = await appAxios.get("/Cart");

  return records;
};

export const createCartProduct = async ({ count, productFieldId }) => {
  const payload = {
    records: [
      {
        fields: {
          count,
          product_id: productFieldId,
        },
      },
    ],
  };
  const { records } = await appAxios.post("/Cart", payload);

  return records;
};

export const patchCartProduct = async ({
  count,
  cartProductId,
  productFieldId,
}) => {
  const payload = {
    records: [
      {
        id: cartProductId,
        fields: {
          count,
          product_id: productFieldId,
        },
      },
    ],
  };

  const { records } = await appAxios.patch("/Cart", payload);

  return records;
};

export const deleteCartProduct = async (cartProductFieldId) => {
  const data = await appAxios.delete(`/Cart/${cartProductFieldId}`);
  return data;
};
