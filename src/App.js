import {Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Protected from "./Components/Protected";
import Header from "./Components/Header";
function App() {
  return (
    <>
    <Header/>
    <Routes>
    
      <Route path="/home" element={<Protected Component={Home} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<Protected Component={About} />} />
      <Route path="/contact" element={<Protected Component={Contact} />} />
    </Routes>
</>
  );
}

export default App;
