// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Education from "./pages/Education";
import SkillsTraining from "./pages/SkillsTraining";
import RationProgram from "./pages/RationProgram";
import Employment from "./pages/Employment";
import Donate from "./pages/Donate";
import Community from "./pages/Community";
import Volunteer from "./pages/Volunteer";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills-training" element={<SkillsTraining />} />
            <Route path="/ration-program" element={<RationProgram />} />
            <Route path="/employment" element={<Employment />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/community" element={<Community />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
