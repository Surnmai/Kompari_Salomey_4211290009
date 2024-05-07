// import react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Moodboard from "./pages/Moodboard";
import ColorPallete from "./pages/Color_Pallete";
import FabricBoard from "./pages/Fabric_board";
import Flats from "./pages/Flats";
import Croquis from "./pages/Croquis";
import DesignBrief from "./pages/Design_brief";

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
          <Route path="/color-pallete" element={<ColorPallete />} />
          <Route path="/fabric-board" element={<FabricBoard />} />
          <Route path="/flats" element={<Flats />} />
          <Route path="/croquis" element={<Croquis />} />
          <Route path="/design-brief" element={<DesignBrief />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
