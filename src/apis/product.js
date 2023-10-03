import axios from "axios";

const apiHost = import.meta.env.VITE_API_HOST;
const apiToken = import.meta.env.VITE_TOKEN;

const appAxios = axios.create({ baseURL: apiHost });

appAxios.interceptors.request.use(
  (configs) => {
    const token = apiToken;

    configs.headers.authorization = `Bearer ${token}`;
    return configs;
  },
  (error) => {
    return Promise.reject(error);
  }
);

appAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let { response } = error;
    return Promise.reject(response);
  }
);

export const getProductList = async () => {
  const url = apiHost + "Product";

  const { records } = await appAxios.get(url);

  return records;
};

export const getProduct = async (productFieldId) => {
  const url = `${apiHost}/Product/${productFieldId}`;

  const { records } = await appAxios.get(url);

  return records;
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
