import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiGridFourFill } from "react-icons/pi";
import { useState } from "react";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;

  const [layout, setLayout] = useState("grid");
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };
  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts}product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button>
          <PiGridFourFill  onClick={() => {
                setLayout("grid");
              }}
              className={setActiveStyles("grid")} />
            
          </button>
          <button>
            <RxHamburgerMenu
              onClick={() => {
                setLayout("list");
              }}
              className={setActiveStyles("list")}
            />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5>Sorry,products not matched your search...</h5>
        ) : layout == "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
        <ProductsGrid />
      </div>
    </>
  );
};

export default ProductsContainer;
