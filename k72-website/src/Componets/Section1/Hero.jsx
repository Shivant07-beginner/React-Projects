import React from "react";
import Video from "../Section1/Video";
 
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-white">
      
      <div className=" pt-0 text-center justify-center">
        <div className="leading-[10vw] font-[font1] text-[9vw] uppercase justify-center items-center">
          {" "}
          L'étincelle
        </div>
        <div className="leading-[8vw] font-[font1] text-[9vw] uppercase justify-center items-center flex">
          qui
          <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden">
            <Video />
          </div>
          génère
        </div>
        <div className="leading-[8vw] font-[font1] text-[9vw] uppercase justify-center items-center">
          la créativité
        </div>
      </div>
    </div>
  );
};

export default Hero;
