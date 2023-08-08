import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Navbar from "./Navbar";
import Aboutus from "./pages/Aboutus";
import Footer from "./Footer";
import "./App.css";
function App() {
  return (
    <div className="app-container">
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </div>
    </>
    <Footer />
  </div>
  );
}

export default App;
