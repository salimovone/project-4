import { BiMenu } from "react-icons/bi"; 
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [isOpened, setIsOpened] = useState(false);

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

  const handleResize = () => {
    setDeviceWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const windowHeight = window.innerHeight;


  const hamburger = () =>{
    if(isOpened){
        setIsOpened(false)
    }else{
        
        setIsOpened(true)
    }
  }

  if (deviceWidth > 994) {
    return (
      <div
        className={`w-full flex items-center bg-[#fff] h-[70px] px-[120px] ${
          scrollPosition > windowHeight ? "fixed top-0 z-50" : null
        }`}
      >
        <div className="flex justify-between w-full">
          <a className="text-[20px]" href="./">
            Even<span className={`font-black`}>Talk.</span>
          </a>
          <div className="flex gap-8 text-[#000] items-center text-[16px]">
            <div>
              <NavLink
                className={({ isActive }) => isActive && "active"}
                to={"/"}
              >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink to={"/about"}>About</NavLink>
            </div>
            <div>
              <NavLink to={"/speackers"}>Speakers</NavLink>
            </div>
            <div>
              <NavLink to={"/schedule"}>Schedule</NavLink>
            </div>
            <div>
              <NavLink to={"/blog"}>Blog</NavLink>
            </div>
            <div>
              <NavLink to={"/contact"}>Contact</NavLink>
            </div>
            <button className="py-2 px-6 text-[14px] bg-[#6c55f9] text-[#ffffff]">
              Buy Ticket
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`z-[${9**999}] px-[120px] w-full ${deviceWidth<640?"px-[20px]":"px-[120px]"} ${
        scrollPosition > windowHeight ? "bg-[#fff] fixed top-0 z-50" : "bg-black text-white"
      }`}>
        <div
          className={`w-full flex z-50 items-center h-[70px] bg-inherit`}
        >
          <div className="flex justify-between w-full">
            <a className="font-bold text-[20px]" href="./">
              Even<span className={`font-black`}>Talk.</span>
            </a>
          </div>
          <button onClick={()=>hamburger()} className="text-[30px] flex items-center rounded-sm"><BiMenu /> <span className="text-base">MENU</span></button>
        </div>
        {isOpened?(

            <div className={`w-full bg-inherit py-2 border-t-[1px]`}>
              <div className="text-[#645f88bf] text-[16px]">
                <div className="mt-1">
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </div>
                <div className="mt-1">
                  <NavLink to={"/about"}>About</NavLink>
                </div>
                <div className="mt-1">
                  <NavLink to={"/services"}>Services</NavLink>
                </div>
                <div className="mt-1">
                  <NavLink to={"/blog"}>Blog</NavLink>
                </div>
                <div className="mt-1">
                  <NavLink to={"/contact"}>Contact</NavLink>
                </div>
                <button className="py-2 px-6 text-[14px] bg-[#6c55f9] mt-2 text-[#ffffff] rounded-[4px]">
                  Free Analytics
                </button>
              </div>
            </div>
            ):null}
      </div>
    );
  }
};

export default Navbar;