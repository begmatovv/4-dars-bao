import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://strapi-store-server.onrender.com/api/products"
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
    <div>
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

export default Products;

