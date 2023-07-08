import { BsInstagram } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../assets/images/speaker-1.jpg";
import img2 from "../../assets/images/speaker-2.jpg";
import img3 from "../../assets/images/speaker-3.jpg";
import img4 from "../../assets/images/speaker-4.jpg";
import img5 from "../../assets/images/speaker-5.jpg";
import img6 from "../../assets/images/speaker-6.jpg";

const data = [
  {
    img: img1,
    name: "John Adams",
  },
  {
    img: img2,
    name: "Paul George",
  },
  {
    img: img3,
    name: "James Smith",
  },
  {
    img: img4,
    name: "John Adams",
  },
  {
    img: img5,
    name: "Paul George",
  },
  {
    img: img6,
    name: "James Smith",
  },
];

const Carousel = () => {
  return (
    <div className="w-full pt-16 bg-white pb-16">
      <div className="max">
        <p className="text-[#999999] text-center">speaker</p>
        <h1 className="text-center text-[40px]">
          Our <span className="font-extrabold">Speakers</span>
        </h1>
      </div>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="mt-10 carousel1"
        breakpoints={{
          "600": {
            slidesPerView: 2
          },
          "1020": {
            slidesPerView: 3
          },
        }}
      >
        {data.map(({ img, name }, idx) => (
          <SwiperSlide key={idx + 1}>
            <div className="text-center">
              <img
                style={{ borderBottom: "1px solid #6b76ff" }}
                src={img}
                alt=""
              />
              <h1 className="text-2xl mt-4 font-medium">{name}</h1>
              <p className="text-[#999]">Web Developer</p>
              <div className="hidden card-icon gap-3 text-[#6b76ff] cursor-pointer justify-center mt-8 pb-4">
                <AiOutlineTwitter />
                <CgFacebook />
                <BsInstagram />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
