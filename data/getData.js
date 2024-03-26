import data from "./data.json";

const getProductData = () => {
  return data;
};

const getProductDataByID = (id) => {
  const matchedProduct = data.products.filter((product) => product.id === id);

  const isValidId = id === matchedProduct[0]?.id;

  if (!matchedProduct[0] && !isValidId) {
    matchedProduct[0] = { isValidId };
  }

  return matchedProduct.length > 0 ? matchedProduct[0] : null;
};

const getProductDataByCategory = (category) => {
  if (category === "all") {
    return data.products;
  }

  const matchedProducts = data.products.filter(
    (product) => product.category === category
  );

  return matchedProducts;
};

export { getProductData, getProductDataByCategory, getProductDataByID };
