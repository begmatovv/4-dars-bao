import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";
import ProductsContainer from "../components/ProductsContainer";
import { Filters } from "../components";
const url = "/products";
export const loader = async ({ request }) => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.data;
  return { products, meta };
};
const Products = () => {
  const { products } = useLoaderData();

  return (
    <div>
      <Filters />
      <ProductsContainer />
    </div>
  );
};

export default Products;
