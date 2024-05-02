import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://strapi-store-server.onrender.com/api/products/${id}`
        );
        const data = await response.json();
        setProducts(data.data.attributes);
        console.log();
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={product.image}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
          alt=""
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{product.title}</h1>
          <h2 className="text-xl text-neutral-content font-bold mt-2">
            {product.company}
          </h2>
          <p className="mt-3 text-xl">{product.price}$</p>
          <p className="mt-6 leading-8">{product.description}</p>
          <div>
            <div className="mt-6">
              <h4 className="text-md font-medium tracking-wider capitalize">
                Colors
              </h4>
              <div className="mt-2">
                <button
                  type="button"
                  className="badge w-6 h-6 mr-2 border-2 border-secondary"
                ></button>
                <button
                  type="button"
                  className="badge w-6 h-6 mr-2 border-2 border-secondary "
                ></button>
              </div>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <h4 className="text-md font-medium -tracking-wider capitalize"></h4>
              </label>
              <select
                name=""
                className="select select-secondary select-bordered select-md"
                id=""
              ></select>
            </div>
            <div className="mt-10">
              <button className="btn btn-secondary btn-md capitalize">
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
