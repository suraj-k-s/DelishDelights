import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import LoginBg from "./Components/LoginBg";
import RegisterBg from "./Components/RegisterBg";
import ContactBg from "./Components/ContactBg";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactBg />} />
        <Route path="/login" element={<LoginBg />} />
        <Route path="/register" element={<RegisterBg />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
