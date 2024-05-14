import { Link, useLoaderData } from "react-router-dom";
import { customFetch, generateAmountOptions } from "../utils";
import { formatPrice } from "../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
export const loader = async ({ params }) => {
  const request = await customFetch(`products/${params.id}`);
  return { product: request.data.data };
};
const SingleProduct = () => {
  const dispatch = useDispatch();
  const { product } = useLoaderData();
  const { image, description, title, colors, company, price } =
    product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const dollarAmount = formatPrice(price);
  const [amount, setAmount] = useState(0);

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount: Number(amount),
    productColor,
    company,
  };
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
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

      <div
        key={product.id}
        className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16"
      >
        <img
          src={image}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
          alt=""
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h2 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h2>
          <p className="mt-3 text-xl">{dollarAmount}$</p>
          <p className="mt-6 leading-8">{description}</p>
          <div>
            <div className="mt-6">
              <h4 className="text-md font-medium tracking-wider capitalize">
                Colors
              </h4>
              <div className="mt-2">
                {colors.map((color) => {
                  return (
                    <button
                      key={color}
                      className={`badge w-6 h-6 mr-2 ${
                        color == productColor && " border-2 border-secondary"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setProductColor(color)}
                    ></button>
                  );
                })}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <h4 className="text-md font-medium tracking-wider capitalize">
                    Amount
                  </h4>
                </label>
                <select
                  name=""
                  className="select select-secondary select-bordered select-md"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                >
                  {generateAmountOptions(20)}
                </select>
              </div>
              <div className="mt-10">
                <button
                  onClick={()=>addToCart()}
                  className="btn btn-secondary btn-md capitalize"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
