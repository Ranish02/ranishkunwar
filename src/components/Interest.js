import React from "react";
import Typed from "react-typed";
const Interest = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="text-3xl md:text-4xl xl:text-4xl font-bold text-left text-white poppins">
        <Typed
          strings={[
            "Interested in girls",
            "haha!! just joking this section will be coming soon",
          ]}
          typeSpeed={70}
          startDelay={300}
          backSpeed={50}
          backDelay={300}
          loop
        />
      </div>
    </div>
  );
};

export default Interest;
