import React from "react";
import Typed from "react-typed";

const About = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-xl md:text-2xl xl:text-4xl font-bold text-left text-white poppins p-8">
        <div>This project is still under progress.</div>
        This web app will be receiving update in the coming days.
        <ul>
          <li>
            <div className="text-lg my-2">Published on Dec 19, 2022.</div>
          </li>
          <li>
            <div className="text-xl">Last Updated on May 19, 2023.</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
