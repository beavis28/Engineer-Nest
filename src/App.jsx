import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Navbar from "./Navbar";

import Footer from "./Footer";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className="app-container">
      <>
        <div
          className={`${scrolled
            ? "bg-white sticky top-0 z-10 px-12 shadow-sm shadow-gray-200"
            : ""
            } sticky top-0 z-10 px-12 `}
        >
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/pingponggame/privacy_policy.html"
              element={
                <iframe
                  src="/pingponggame/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/basstuningwatch/privacy_policy.html"
              element={
                <iframe
                  src="/basstuningwatch/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/businesscardholder/privacy_policy.html"
              element={
                <iframe
                  src="/businesscardholder/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/cellotuningwatch/privacy_policy.html"
              element={
                <iframe
                  src="/cellotuningwatch/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/cplusplusqanda/privacy_policy.html"
              element={
                <iframe
                  src="/cplusplusqanda/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/cryptotradesimulator/privacy_policy.html"
              element={
                <iframe
                  src="/cryptotradesimulator/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/cybersecurityqanda/privacy_policy.html"
              element={
                <iframe
                  src="/cybersecurityqanda/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/datascienceqanda/privacy_policy.html"
              element={
                <iframe
                  src="/datascienceqanda/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/dicewatch/privacy_policy.html"
              element={
                <iframe
                  src="/dicewatch/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/drivingtestsg/privacy_policy.html"
              element={
                <iframe
                  src="/drivingtestsg/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/famousartquiz/privacy_policy.html"
              element={
                <iframe
                  src="/famousartquiz/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/guitartuningwatch/privacy_policy.html"
              element={
                <iframe
                  src="/guitartuningwatch/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/javascriptqanda/privacy_policy.html"
              element={
                <iframe
                  src="/javascriptqanda/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/linuxcmdqanda/privacy_policy.html"
              element={
                <iframe
                  src="/linuxcmdqanda/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/nationalflagquiz/privacy_policy.html"
              element={
                <iframe
                  src="/nationalflagquiz/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/oddcolorpicker/privacy_policy.html"
              element={
                <iframe
                  src="/oddcolorpicker/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/rlanguageqanda/privacy_policy.html"
              element={
                <iframe
                  src="/rlanguageqanda/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/swingtradesimulator/privacy_policy.html"
              element={
                <iframe
                  src="/swingtradesimulator/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/ukuleletuningwatch/privacy_policy.html"
              element={
                <iframe
                  src="/ukuleletuningwatch/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/violintuningwatch/privacy_policy.html"
              element={
                <iframe
                  src="/violintuningwatch/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/wallpapernow/privacy_policy.html"
              element={
                <iframe
                  src="/wallpapernow/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />
            <Route
              path="/pingponggame/privacy_policy.html"
              element={
                <iframe
                  src="/pingponggame/privacy_policy.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              }
            />

          </Routes>
        </div>
      </>
      <Footer />
    </div>
  );
}

export default App;
