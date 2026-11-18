import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Legal from "./pages/Legal";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";

// App privacy policies served from /public/<app>/privacy_policy.html
const PRIVACY_POLICY_APPS = [
  "basstuningwatch",
  "businesscardholder",
  "cellotuningwatch",
  "cplusplusqanda",
  "cryptotradesimulator",
  "cybersecurityqanda",
  "datascienceqanda",
  "dicewatch",
  "drivingtestsg",
  "famousartquiz",
  "guitartuningwatch",
  "javascriptqanda",
  "linuxcmdqanda",
  "nationalflagquiz",
  "oddcolorpicker",
  "pingponggame",
  "rlanguageqanda",
  "swingtradesimulator",
  "ukuleletuningwatch",
  "violintuningwatch",
  "wallpapernow",
];

function App() {
  return (
    <div className="grain min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Legal doc="privacy" />} />
          <Route path="/terms" element={<Legal doc="terms" />} />
          {PRIVACY_POLICY_APPS.map((app) => (
            <Route
              key={app}
              path={`/${app}/privacy_policy.html`}
              element={
                <iframe
                  src={`/${app}/privacy_policy.html`}
                  className="mt-20 w-full bg-white"
                  style={{ height: "100vh", border: "none" }}
                />
              }
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
