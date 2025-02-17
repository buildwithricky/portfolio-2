import { Socials } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const HeroButtons = ({url,icon,name,isDarkMode}:Socials)=>{
    return (
      <div
        className={`border w-12 h-12 flex  justify-center items-center rounded-md ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <a href={url} className="text-gray-600 hover:text-gray-800">
          {/* {item.name} */}
          <Image src={icon} alt={name} />
        </a>
      </div>
    );
}

export default HeroButtons;