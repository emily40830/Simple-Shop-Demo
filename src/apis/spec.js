import appAxios from "./appAxios";

export const getSpecs = async () => {
  const data = await appAxios.get("Spec");

  return data;
};

export const getSpec = async (specFieldId) => {
  const data = await appAxios.get(`Spec/${specFieldId}`);

  return data;
};
