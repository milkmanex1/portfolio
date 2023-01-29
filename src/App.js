import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Particle from "./components/Particle";
import Canvas from "./components/Canvas";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="h-screen w-screen overflow-hidden absolute">
                <Header />
                <Particle></Particle>
                <Home />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <Header />

                <About />
              </div>
            }
          />
          <Route
            path="/skills"
            element={
              <div>
                <Header />

                <Skills />
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <div className=" h-screen w-screen overflow-x-hidden">
                <Header />

                <Projects />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div>
                <Header />

                <Contact />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
