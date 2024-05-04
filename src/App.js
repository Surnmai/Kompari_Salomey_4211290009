// import react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Moodboard from "./pages/Moodboard";
import Color_Pallete from "./pages/Color_Pallete";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/moodboard" element={<Moodboard />} />
          <Route path="/color-pallete" element={<Color_Pallete />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
