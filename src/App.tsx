import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { CustomNeon } from "./pages/CustomNeon";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { Pricing } from "./pages/Pricing";

export const App = () => {
  const basename = import.meta.env.BASE_URL;
  
  return (
    <BrowserRouter basename={basename}>
      <div className="min-h-screen bg-ivory font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/custom-neon" element={<CustomNeon />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
