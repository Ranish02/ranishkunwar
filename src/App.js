import React from "react";

import Board from "./components/Board";
import Nav from "./components/Nav";
import {
  HashRouter as BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Info from "./components/Info";
import Languages from "./components/Languages";
import PotatoGram from "./components/PotatoGram";
import Testfile from "./test/Testfile";
import Tobeadded from "./components/Tobeadded";
import SideSkills from "./components/SideSkills";
import About from "./components/About";
import Interest from "./components/Interest";

function App() {
  // const scrolling = () => {
  //   console.log(window.scrollY);
  // };
  // window.addEventListener("scroll", scrolling);
  return (
    <div>
      {/* <div className='snap-y snap-mandatory h-screen w-screen overflow-visible overflow-x-hidden'> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="snap-y snap-mandatory h-screen w-screen overflow-visible overflow-x-hidden">
                  <Nav />
                  <Board />
                  <Info />
                  <Languages />
                  <PotatoGram />
                  <SideSkills />
                </div>
              </>
            }
          />
          <Route
            path="/skills"
            element={
              <>
                <div className="snap-y snap-mandatory h-screen w-screen overflow-visible overflow-x-hidden">
                  <Nav />
                  <Info />
                  <Languages />
                </div>
              </>
            }
          />
          <Route
            path="/interest"
            element={
              <>
                <div className="snap-y snap-mandatory h-screen w-screen overflow-visible overflow-x-hidden">
                  <Nav />
                  <Interest />
                </div>
              </>
            }
          />
          <Route
            path="/potatogram"
            element={
              <>
                <div className="snap-y snap-mandatory h-screen w-screen overflow-visible overflow-x-hidden">
                  <Nav />
                  <PotatoGram />
                </div>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <div className="snap-y snap-mandatory h-screen w-screen overflow-visible overflow-x-hidden">
                  <Nav />
                  <About />
                </div>
              </>
            }
          />
          <Route
            path="/test"
            element={
              <>
                <Testfile />
              </>
            }
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        {/* <Nav /> */}
      </BrowserRouter>
    </div>

    // </div >
  );
}

export default App;
