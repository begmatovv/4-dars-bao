import { customFetch } from "../utils";
import { Filters, ProductPagination, ProductsContainer } from "../components";
const url = "/products";
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch(url, { params });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};
const Products = () => {
  return (
    <div className="py-20">
      <Filters />
      <ProductsContainer />
      <ProductPagination />
    </div>
  );
};

export default Products;
