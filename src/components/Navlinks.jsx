import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "About",
    link: "/about",
  },
  {
    id: 3,
    text: "Cart",
    link: "/cart",
  },
  {
    id: 4,
    text: "Checkout",
    link: "/checkout",
  },
  {
    id: 5,
    text: "Products",
    link: "/products",
  },
];
function Navlinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            className="p-2 px-4 hover:bg-neutral-content rounded-lg "
            key={link.id}
            to={link.link}
          >
            {link.text}
          </Link>
        );
      })}
    </>
  );
}
export default Navlinks;
