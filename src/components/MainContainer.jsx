// Import the required components from "react-router-dom"
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blue from "./Blue";
import Red from "./Red";
import Yellow from "./Yellow";

// Define the MainContainer component as a function
function MainContainer() {
    // Return JSX to render the main section with routes
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/yellow" element ={<Yellow/>}/>
      </Routes>
    </div>
  );
}

export default MainContainer;