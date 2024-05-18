import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Headphones",
    link: "/headphones",
  },
  {
    id: 3,
    text: "Speakers",
    link: "/speakers",
  },
  {
    id: 4,
    text: "Earphones",
    link: "/cart",
  },
  {
    id: 5,
    text: "Checkout",
    link: "/checkout",
  },
  {
    id: 6,
    text: "Orders",
    link: "/orders",
  },
];
function Navlinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            className="p-2 px-4 focus:bg-neutral focus:text-white hover:bg-neutral-content  rounded-lg  "
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
