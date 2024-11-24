import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import MyProfile from "./pages/MyProfile";
import MyAppoinment from "./pages/MyAppoinment";
import Appoinment from "./pages/Appoinment";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="w-[80%] m-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/doctors" element={<Doctors />}/>
        <Route path="/doctors/:speciality" element={<Doctors />}/>
        <Route path="/my-profile" element={<MyProfile />}/>
        <Route path="/my-appoinment" element={<MyAppoinment />}/>
        <Route path="/appoinment/:docId" element={<Appoinment />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
