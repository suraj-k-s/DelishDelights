import { Routes, Route } from "react-router-dom";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Recipie from "./Recipie/App";



function App() {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/Recipie/" element={<Recipie />} />
          <Route path="/write" element={<Write />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
