import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://strapi-store-server.onrender.com/api/products?featured=true"
        );
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="align-element pt-24 py-20">
      <h3 className="text-3xl border-b border-base-300 pb-5 font-medium tracking-wider capitalize">
        Featured Products
      </h3>

      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={product.attributes.image}
                alt={product.attributes.title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">
                {product.attributes.title}
              </h2>
              <span className="text-secondary">
                ${product.attributes.price}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
