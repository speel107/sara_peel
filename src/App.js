import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sara_peel" element={<Home />} />
        <Route path="/sara_peel/about" element={<About />} />
        <Route path="/sara_peel/experience" element={<Experience />} />
        <Route path="/sara_peel/projects" element={<Projects />} />
        <Route path="/sara_peel/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
