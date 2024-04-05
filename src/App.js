// import react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Components
import Home from "./pages/Home";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
