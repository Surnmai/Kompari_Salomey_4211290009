// import react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Moodboard from "./pages/Moodboard";
import ColorPalette from "./pages/Color_Palette";
import FabricBoard from "./pages/Fabric_board";
import Flats from "./pages/Flats";
import Croquis from "./pages/Croquis";
import DesignBrief from "./pages/Design_brief";
import WorkingSketches from "./pages/Working_sketches";
import PatternCharts from "./pages/Pattern_Charts";
import DesignSpecification from "./pages/Design_specifications";
import Drafting from "./pages/Drafting";

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
          <Route path="/color-palette" element={<ColorPalette />} />
          <Route path="/fabric-board" element={<FabricBoard />} />
          <Route path="/flats" element={<Flats />} />
          <Route path="/croquis" element={<Croquis />} />
          <Route path="/design-brief" element={<DesignBrief />} />
          <Route path="/working-sketches" element={<WorkingSketches />} />
          <Route path="/pattern-charts" element={<PatternCharts />} />
          <Route
            path="/design-specifications"
            element={<DesignSpecification />}
          />
          <Route path="/drafting" element={<Drafting />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
