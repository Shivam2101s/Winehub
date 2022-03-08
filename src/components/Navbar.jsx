import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div id="navbar">
      <Link className="link" to={"/"}>
        Home
      </Link>
      <Link className="link" to={"/red"}>
        Red
      </Link>

      <Link className="link" to={"/white"}>
        White
      </Link>

      <Link className="link" to={"/cart"}>
        Cart
      </Link>
      <Link className="link" to={"/checkout"}>
        Checkout
      </Link>
    </div>
  );
};
