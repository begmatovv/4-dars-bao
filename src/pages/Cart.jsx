import React from "react";
import { generateAmountOptions } from "../utils";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartItemsList, CartTotal } from "../components";

const Cart = () => {
  const { user } = useSelector((state) => state.userState);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  if (numItemsInCart === 0) {
    return "Your cart is Empty";
  }

  return (
    <div className="py-20">
      <div className="border-b border-base-300 pb-5">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          Shopping Cart
        </h2>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotal />
          {user ? (
            <Link
              className="btn btn-primary btn-block mt-8 uppercase"
              to="/checkout"
            >
              proceed to checkout
            </Link>
          ) : (
            <Link
              className="btn btn-primary btn-block mt-8 uppercase"
              to="/login"
            >
              please login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
