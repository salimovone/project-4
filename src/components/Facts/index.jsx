import { TbLamp } from "react-icons/tb"; 
import { MdChairAlt } from "react-icons/md"; 
import { FaHandshake } from "react-icons/fa"; 
import { MdOutlineManageAccounts } from "react-icons/md"; 
import React from "react";
import { Main } from "./style";

const Facts = () => {
  return (
    <Main className="bg-white w-full">
      <div className="max grid grid-cols-2 max-md:grid-cols-1">
        <div className="left h-[400px] m-auto max-[915px]:w-[300px] w-[350px] max-md:w-full mb-8"></div>
        <div>
          <p className="text-[#999]">Fun Facts</p>
          <p className="text-[#000c] text-[40px] mb-6">
            Fun <span className="font-black">Facts</span>
          </p>
          <p className="text-[#999]">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
          <div className="grid grid-cols-2 mt-8">
                <div className="bg-[#f8f9fa] w-[200px] max-[915px]:w-[150px] m-auto text-center py-6 mb-3">
                    <div className="w-full flex justify-center text-[48px] mb-4 text-[#6b76ff]"><MdOutlineManageAccounts /></div>
                    <span className="font-semibold text-3xl">30</span>
                    <div className="text-[14px]">speakers</div>
                </div>
                <div className="bg-[#f8f9fa] w-[200px] max-[915px]:w-[150px] m-auto text-center py-6 mb-3">
                    <div className="w-full flex justify-center text-[48px] mb-4 text-[#6b76ff]"><FaHandshake /></div>
                    <span className="font-semibold text-3xl">200</span>
                    <div className="text-[14px]">speakers</div>
                </div>
                <div className="bg-[#f8f9fa] w-[200px] max-[915px]:w-[150px] m-auto text-center py-6 mb-3">
                    <div className="w-full flex justify-center text-[48px] mb-4 text-[#6b76ff]"><MdChairAlt /></div>
                    <span className="font-semibold text-3xl">2,500</span>
                    <div className="text-[14px]">speakers</div>
                </div>
                <div className="bg-[#f8f9fa] w-[200px] max-[915px]:w-[150px] m-auto text-center py-6 mb-3">
                    <div className="w-full flex justify-center text-[48px] mb-4 text-[#6b76ff]"><TbLamp /></div>
                    <span className="font-semibold text-3xl">40</span>
                    <div className="text-[14px]">speakers</div>
                </div>
          </div>
        </div>  
      </div>
    </Main>
  );
};

export default Facts;
