import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Newsletter from "./components/Newsletter/Newsletter";
import Singleproduct from "./components/Singleproduct/Singleproduct";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Appcontext from "./config/context";
import Specificproduct from "./components/Specificproduct/Specificproduct";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Appcontext>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/singleproduct/:id" element={<Singleproduct />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/specificproduct/:category"
              element={<Specificproduct />}
            />
          </Routes>
          <Newsletter />
          <Footer />
        </Appcontext>
      </Router>
    </div>
  );
}
export default App;
