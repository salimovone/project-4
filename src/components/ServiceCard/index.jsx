import React from "react";

const ServiceCard = ({ icon, name }) => {
  return (
    <div>
      <div data-aos="fade-up" className="mb-5 max-md:w-full max-lg:w-[150px] max-xl:w-[210px] xl:w-[250px]" style={{lineHeight: '2.7', letterSpacing: '2.7'}}>
        <div className="ml-2 w-16 h-16 relative rounded-full bg-[#ebecff] text-[#6b76ff] text-[60px]">
          <span className="absolute bottom-[-15px] left-[-15px]">{icon}</span>
        </div>
        <p className="mt-5">{name}</p>

        <p className="mt-8 text-[#999999]">
          A small river named Duden flows by their place and supplies.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
