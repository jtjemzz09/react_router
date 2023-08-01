
// Import the required components
import Nav from "./components/Nav";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer"

// Define the App component as a function
export default function App() {
  // Return JSX to render the main content of the application
  return (
    <div id="container">
      <Nav />
      <MainContainer />
      <Footer/>
    </div>
  );
}