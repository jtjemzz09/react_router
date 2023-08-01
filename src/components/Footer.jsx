import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to ="/yellow">Yellow</Link>
        {/* Add more links for other routes if you have them */}
      </nav>
    </footer>
  );
}

export default Footer;