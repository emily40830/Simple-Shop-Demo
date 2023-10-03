import appAxios from "./appAxios";

export const getProductList = async () => {
  const { records } = await appAxios.get("Product");

  return records;
};

export const getProduct = async (productFieldId) => {
  const data = await appAxios.get(`Product/${productFieldId}`);

  return data;
};

// const productIds = ["p001", "p002", "p003", "p004", "p005", "p006"];
// const SIZE_MAP = [
//   {
//     size: "S",
//     inventory: 30,
//   },
//   {
//     size: "M",
//     inventory: 27,
//   },
//   {
//     size: "L",
//     inventory: 36,
//   },
//   {
//     size: "XL",
//     inventory: 60,
//   },
// ];

// export const aGetProduct = async (productId) => {
//   try {
//     const product = {
//       id: productId,
//       title: faker.commerce.productName,
//       price: faker.commerce.price,
//       description: faker.commerce.productDescription,
//       imageUrl: "https://loremflickr.com/640/480/product",
//       specs: SIZE_MAP,
//     };

//     // The timeout simulates a delay to demonstrate the isLoading mechanism
//     setTimeout(() => {
//       return product;
//     }, 3000);
//   } catch (e) {
//     throw Error(e);
//   }
// };

// export const aGetProductList = async () => {
//   try {
//     const products = productIds.map((id) => ({
//       id: id,
//       title: faker.commerce.productName,
//       price: faker.commerce.price,
//       description: faker.commerce.productDescription,
//       imageUrl: "https://loremflickr.com/640/480/product",
//       specs: SIZE_MAP,
//     }));

//     setTimeout(() => {
//       return products;
//     }, 1000);
//   } catch (e) {
//     throw Error(e);
//   }
// };

// export const getProduct = (productId) => {
//   return {
//     id: productId,
//     title: faker.commerce.productName(),
//     price: faker.commerce.price(),
//     description: faker.commerce.productDescription(),
//     imageUrl: "https://loremflickr.com/640/480/product",
//     specs: SIZE_MAP,
//   };
// };
// export const getProductList = () => {
//   const products = productIds.map((id) => ({
//     id: id,
//     title: faker.commerce.productName(),
//     price: faker.commerce.price(),
//     description: faker.commerce.productDescription(),
//     imageUrl: "https://loremflickr.com/640/480/product",
//     specs: SIZE_MAP,
//   }));

//   return products;
// };
