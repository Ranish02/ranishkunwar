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
import About from "./components/About";
import Interest from "./components/Interest";
import ListPage from "./components/ListPage";

import { languagesData } from "./components/data/languagesdata";
import { skills } from "./components/data/skillsdata";
import { sideskillsdata } from "./components/data/sideskillsdata";
// import {  } from "./data/skillsdata";

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

                  <ListPage
                    title="FRAMEWORKS"
                    description=" Here are a few notable framework that I been using to create
                    apps."
                    imageUrl="https://cdn.discordapp.com/attachments/979623779477123122/1053339351079211019/IMG-20220411-WA0032.jpg"
                    backgroundColor="#A555EC"
                    cardColor="#D09CFA"
                    textColor="black"
                    data={skills}
                  />
                  <ListPage
                    title="LANGUAGES"
                    description=" Also, here are few languages I use."
                    imageUrl="https://cdn.discordapp.com/attachments/979623779477123122/1052896368907276328/Screenshot_20220731-021934_Gallery.jpg"
                    backgroundColor="#FCE9F1"
                    cardColor="#73BBC9"
                    headingColor="black"
                    textColor="white"
                    data={languagesData}
                  />
                  <PotatoGram />
                  <ListPage
                    title="SIDE SKILLS"
                    description="  Here are few of the side skills that I have gained over the past few years"
                    imageUrl="https://cdn.discordapp.com/attachments/979623779477123122/1054025801655402587/FB_IMG_1671369699209.jpg"
                    backgroundColor="#2d2727"
                    cardColor="#413543"
                    textColor="white"
                    data={sideskillsdata}
                  />
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
                  <ListPage
                    title="FRAMEWORKS"
                    description=" Here are a few notable framework that I been using to create
                    apps."
                    imageUrl="https://cdn.discordapp.com/attachments/979623779477123122/1053339351079211019/IMG-20220411-WA0032.jpg"
                    backgroundColor="#A555EC"
                    cardColor="#D09CFA"
                    textColor="black"
                    data={skills}
                  />
                  <ListPage
                    title="LANGUAGES"
                    description=" Also, here are few languages I use."
                    imageUrl="https://cdn.discordapp.com/attachments/979623779477123122/1052896368907276328/Screenshot_20220731-021934_Gallery.jpg"
                    backgroundColor="#FCE9F1"
                    cardColor="#73BBC9"
                    headingColor="black"
                    textColor="white"
                    data={languagesData}
                  />

                  <ListPage
                    title="SIDE SKILLS"
                    description="  Here are few of the side skills that I have gained over the past few years"
                    imageUrl="https://cdn.discordapp.com/attachments/979623779477123122/1054025801655402587/FB_IMG_1671369699209.jpg"
                    backgroundColor="#2d2727"
                    cardColor="#413543"
                    textColor="white"
                    data={sideskillsdata}
                  />
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
