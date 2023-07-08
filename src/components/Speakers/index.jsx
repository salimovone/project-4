import React, { useState } from "react";
import img1 from "../../assets/images/person_1.jpg";
import img2 from "../../assets/images/person_2.jpg";
import img3 from "../../assets/images/person_3.jpg";
import img4 from "../../assets/images/person_4.jpg";

const Speakers = () => {
  const [clicked, setClicked] = useState(0);
  return (
    <div className="w-full bg-[#f8f9fa] pb-40">
      <div className="max">
        <div className="py-28">
          <p className="text-[#999999] text-center">Schedule</p>
          <h1 className="text-center text-[40px]">
            Event <span className="font-extrabold">Schedule</span>
          </h1>
        </div>
        <div className="w-full bg-white flex">
          <div
            onClick={() => setClicked(0)}
            className={`flex ${
              clicked === 0 && "bg-[#6b76ff] text-white"
            } relative justify-center items-center text-black hover:text-white h-[120px] hover:bg-[#007bff] w-1/4 text-center font-bold`}
          >
            <div>
              <h1 className="text-[24px]">Day 01</h1>
              <p className="text-sm">21 Dec. 2019</p>
            </div>
            <div className="absolute bottom-[-8px] flex w-full justify-center">
              <div
                className={`w-[16px] h-[16px] rotate-45 ${
                  clicked === 0
                    ? "block bg-[#6b76ff] hover:bg-[#0076ff]"
                    : "hidden"
                }`}
              ></div>
            </div>
          </div>
          <div
            onClick={() => setClicked(1)}
            className={`flex ${
              clicked === 1 && "bg-[#6b76ff] text-white"
            } relative justify-center items-center text-black hover:text-white h-[120px] hover:bg-[#007bff] w-1/4 text-center font-bold`}
          >
            <div>
              <h1 className="text-[24px]">Day 01</h1>
              <p className="text-sm">21 Dec. 2019</p>
            </div>
            <div className="absolute bottom-[-8px] flex w-full justify-center">
              <div
                className={`w-[16px] h-[16px] rotate-45 ${
                  clicked === 1
                    ? "block bg-[#6b76ff] hover:bg-[#0076ff]"
                    : "hidden"
                }`}
              ></div>
            </div>
          </div>
          <div
            onClick={() => setClicked(2)}
            className={`flex ${
              clicked === 2 && "bg-[#6b76ff] text-white"
            } relative justify-center items-center text-black hover:text-white h-[120px] hover:bg-[#007bff] w-1/4 text-center font-bold`}
          >
            <div>
              <h1 className="text-[24px]">Day 01</h1>
              <p className="text-sm">21 Dec. 2019</p>
            </div>
            <div className="absolute bottom-[-8px] flex w-full justify-center">
              <div
                className={`w-[16px] h-[16px] rotate-45 ${
                  clicked === 2
                    ? "block bg-[#6b76ff] hover:bg-[#0076ff]"
                    : "hidden"
                }`}
              ></div>
            </div>
          </div>
          <div
            onClick={() => setClicked(3)}
            className={`flex ${
              clicked === 3 && "bg-[#6b76ff] text-white"
            } relative justify-center items-center text-black hover:text-white h-[120px] hover:bg-[#007bff] w-1/4 text-center font-bold`}
          >
            <div>
              <h1 className="text-[24px]">Day 01</h1>
              <p className="text-sm">21 Dec. 2019</p>
            </div>
            <div className="absolute bottom-[-8px] flex w-full justify-center">
              <div
                className={`w-[16px] h-[16px] rotate-45 ${
                  clicked === 3
                    ? "block bg-[#6b76ff] hover:bg-[#0076ff]"
                    : "hidden"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-4 gap-4">
          <div className="flex bg-white">
            <div
              className={`m-7 rounded-full min-w-[8rem] h-32 bg-cover`}
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className="my-10 mr-7 w-full">
              <p className="text-[#999] mb-2">08:00 - 10:00</p>
              <h3 className="font-bold text-2xl mb-3">Introduction to Wordpress 5.0</h3>
              <p className="flex flex-wrap text-[#999] text-justify" style={{lineHeight:'2.0'}}>
                A small river named Duden flows by their  place  and supplies it
                with the necessary regelialia. It is a paradisematic  country,  in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p className="mt-6 text-2xl text-[#999]">- <a href="./" className="text-[#6b76ff]">Brett Morgan</a> Founder of Wordpress</p>
            </div>
          </div>
          <div className="flex bg-white">
            <div
              className={`m-7 rounded-full min-w-[8rem] h-32 bg-cover`}
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
            <div className="my-10 mr-7 w-full">
              <p className="text-[#999] mb-2">08:00 - 10:00</p>
              <h3 className="font-bold text-2xl mb-3">Introduction to Wordpress 5.0</h3>
              <p className="flex flex-wrap text-[#999] text-justify" style={{lineHeight:'2.0'}}>
                A small river named Duden flows by their  place  and supplies it
                with the necessary regelialia. It is a paradisematic  country,  in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p className="mt-6 text-2xl text-[#999]">- <a href="./" className="text-[#6b76ff]">Brett Morgan</a> Founder of Wordpress</p>
            </div>
          </div>
          <div className="flex bg-white">
            <div
              className={`m-7 rounded-full min-w-[8rem] h-32 bg-cover`}
              style={{ backgroundImage: `url(${img3})` }}
            ></div>
            <div className="my-10 mr-7 w-full">
              <p className="text-[#999] mb-2">08:00 - 10:00</p>
              <h3 className="font-bold text-2xl mb-3">Introduction to Wordpress 5.0</h3>
              <p className="flex flex-wrap text-[#999] text-justify" style={{lineHeight:'2.0'}}>
                A small river named Duden flows by their  place  and supplies it
                with the necessary regelialia. It is a paradisematic  country,  in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p className="mt-6 text-2xl text-[#999]">- <a href="./" className="text-[#6b76ff]">Brett Morgan</a> Founder of Wordpress</p>
            </div>
          </div>
          <div className="flex bg-white">
            <div
              className={`m-7 rounded-full min-w-[8rem] h-32 bg-cover`}
              style={{ backgroundImage: `url(${img4})` }}
            ></div>
            <div className="my-10 mr-7 w-full">
              <p className="text-[#999] mb-2">08:00 - 10:00</p>
              <h3 className="font-bold text-2xl mb-3">Introduction to Wordpress 5.0</h3>
              <p className="flex flex-wrap text-[#999] text-justify" style={{lineHeight:'2.0'}}>
                A small river named Duden flows by their  place  and supplies it
                with the necessary regelialia. It is a paradisematic  country,  in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p className="mt-6 text-2xl text-[#999]">- <a href="./" className="text-[#6b76ff]">Brett Morgan</a> Founder of Wordpress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
