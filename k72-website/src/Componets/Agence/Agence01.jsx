import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Agence01 = () => {

  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {

      gsap.from(".head", {
        y: -50,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power3.out",
        delay:1,

        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
         
        }
      });

    }, containerRef);

    return () => ctx.revert();

  }, []);

  return (
    <div ref={containerRef} className="text-black">
      
      <div className="flex justify-between text-center pt-[13vw] pb-[10vw] font-[font2] text-[1.4vw] select-none">
        <div className="ml-[10vw] head">Expertise</div>

        <div className="mr-[29vw] leading-tight">
          <h1 className="head">&nbsp;&nbsp;Strategy</h1>
          <h1 className="head">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising</h1>
          <h1 className="head">&nbsp;&nbsp;&nbsp;Branding</h1>
          <h1 className="head">Design</h1>
          <h1 className="head">&nbsp;Content</h1>
        </div>

        <span></span>
      </div>

      <div className="  flex px-[10vw] font-[font2] text-[1.4vw] leading-tight space-x-3.5">
        <div>
          <p className=" head">
            Our Work_ Born in curiosity, raised by dedication and fed with a
            steady diet of creativity.
          </p>
        </div>
        <div>
          <p className="w-[30vw]  head">
           Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.
          </p>
        </div>
        <div>
          <p className="w-[20vw]  head">
           Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Agence01;