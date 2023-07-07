import { TbWorld } from "react-icons/tb"; 
import { GiCook } from "react-icons/gi"; 
import { FaHotel } from "react-icons/fa"; 
import React from 'react'
import ServiceCard from '../ServiceCard'
import { MdOutlineLocationOn } from "react-icons/md";



const Services = () => {
    const data = [
        {
            icon: <MdOutlineLocationOn/>,
            name: "Venue"
        },
        {
            icon: <TbWorld />,
            name: "Transport"
        },
        {
            icon: <FaHotel />,
            name: "hotel"
        },
        {
            icon: <GiCook />,
            name: "Restaurant"
        },
    ]
  return (
    <div className='w-full bg-[#f8f9fa] py-32'>
        <div className="max flex justify-between flex-wrap">
            {
                data.map((item,index)=>{
                    return(
                        <ServiceCard key={index+1} icon={item.icon} name={item.name} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Services