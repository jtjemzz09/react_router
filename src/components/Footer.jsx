// Import the "Link" component from "react-router-dom"
import { Link } from "react-router-dom";
// Define the Footer component as a function
function Footer() {
// Return JSX to render the footer with navigation links
  return (
    <footer>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to ="/yellow">Yellow</Link>
      </nav>
    </footer>
  );
}

export default Footer;