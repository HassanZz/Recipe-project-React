import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
//styles
import "./Navbar.css";

//components
import Searchbar from "./Searchbar";

const Navbar = () => {
  const { color } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Coocking blog</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
