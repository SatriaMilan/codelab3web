import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from ".src/Components/Hero";
import Home from "./Pages/Home"; // Make sure the filename and path are correct
import AboutUs from "./pages/AbouUs"; // Fix the typo in the filename
import Contact from "./Pages/Contact"; // Make sure the filename and path are correct
import Navbar from ".src/Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
