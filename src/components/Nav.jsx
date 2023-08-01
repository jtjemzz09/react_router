// Import the "Link" component from "react-router-dom"
import {Link} from "react-router-dom"
// Define the Nav component as a function
export default function Nav(){
      // Return JSX to render the navigation bar with links
    return(
<nav>
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/yellow">Yellow</Link>
</nav>
    )}