import {Link} from "react-router-dom"
export default function Nav(){
    return(
<nav>
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/yellow">Yellow</Link>
</nav>
    )}