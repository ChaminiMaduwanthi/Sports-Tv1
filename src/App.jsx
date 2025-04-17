import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import About from "./pages/About1";
import Live1 from "./pages/Live1";
import Schedule from './pages/Schedule';
import Ondemand from './pages/Ondemand';
import Nav1 from './components/nav1/Nav1';
import Nav2 from './components/nav2/Nav2';
import Nav3 from './components/nav3/Nav3';
import Footer from './components/footer/Footer';
import Stream from './components/stream/Stream';
import Signin from './pages/Signin1';



function Layout() {
  const location = useLocation();
  const path = location.pathname;
  
  return (
    <>
     
      {path === "/" && <Nav1 />}
      {path === "/about" && <Nav2 />}
      {path === "/live" && <Nav3 />}
      
      
      {/* All Routes */}
      <Routes>
        <Route path="/" element={<Stream />} />
        <Route path="/about" element={<About />} />
        <Route path="/live" element={<Live1/>} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      
      {path !== "/signin" && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;