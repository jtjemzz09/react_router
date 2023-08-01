
import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red"
import Blue from "./components/Blue"
import Home from "./components/Home"

export default function App(){

return(
<div id="container">
      <div id="navbar"> 
      <Link to="/blue">blue</Link>
      <Link to="/red">red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path ="/" element ={}/>
          <Route path="/blue" element= {<Blue/>}/>
          <Route path="/red" element= {<Red/>}/>
        </Routes>
        </div>
    </div>
)

}