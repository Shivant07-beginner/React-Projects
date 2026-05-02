import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Agence01 from "../Componets/Agence/Agence01";

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  const imageDivref = useRef(null);
  const imageRef = useRef(null);
  const imageArray = [
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
  ];

 useGSAP(() => {
    const el = imageDivref.current;

    // 🔥 Preload images (one time)
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    let lastIndex = -1;

    gsap.to(el, {
      y: 200,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top 30%",
        end: "top -100%",
        pin: true,
        scrub: true,

        onUpdate: (self) => {
          const index = Math.min(
            imageArray.length - 1,
            Math.floor(self.progress * imageArray.length)
          );

          // ✅ update only if changed
          if (index !== lastIndex) {
            imageRef.current.src = imageArray[index];
            lastIndex = index;
          }
        },
      },
    });
  }, []); // ✅ important


  return (
    <div>
      <div className="Section1 ">
        
        <div
          ref={imageDivref}
          className="absolute w-[15vw] h-[19vw] top-44 left-[35vw] overflow-hidden"
        >
          <img
            ref={imageRef}
            className="rounded-3xl w-full h-full object-cover justify-center "
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt="image1"
          />
        </div>
        <div className=" mt-[20vw] relative">
          <h1 className="text-[20vw] uppercase font-[font1] leading-[18vw] text-center text-black">
            Soixan7e <br />
            &nbsp;&nbsp;Douze
          </h1>

          <div>
            <p className="w-[53.5vw] font-[font2] ml-[45vw] text-[3.3vw] gap-0.5 leading-[3.5vw] text-black">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="Section2 h-screen  ">
         <Agence01/>
      </div>
      <div className="Swction3 min-h-screen w-screen"></div>
      
    </div>
  );
};

export default Agence;
