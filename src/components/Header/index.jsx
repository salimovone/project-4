import React, { useEffect, useState } from "react";
import { Main } from "./style";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Main scroll={scrollPosition} className="w-full relative mt-[-70px]">
      <div className="header-overlay fixed"></div>
      <div className="max flex items-center h-full">
        <div className="banner">
          <h1 className="text-[64px] font-extralight">
            Developer <br /> <span className="font-black">Conference 2019</span>
          </h1>
          <p className="mt-3 text-black">December 21-24, 2019. Paris, Italy</p>
          <div className="flex justify-between mt-5">
            <div className="">
              <p className="text-[38px] font-extralight">-1294</p>
              <p className="font-extralight text-black">Days</p>
            </div>
            <div className="--border">
              <p className="text-[38px] font-extralight">01</p>
              <p className="font-extralight text-black">Hours</p>
            </div>
            <div className="--border">
              <p className="text-[38px] font-extralight">39</p>
              <p className="font-extralight text-black">Minutes</p>
            </div>
            <div className="--border">
              <p className="text-[38px] font-extralight">10</p>
              <p className="font-extralight text-black">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Header;
