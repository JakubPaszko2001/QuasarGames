import { useState, useEffect } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import { TbMoon } from "react-icons/tb";
import Logo from "../assets/Abyss-Logo2.webp";
const Icons = ({ menuOpen }) => {
  return (
    <div className="flex items-center text-4xl gap-4 md:gap-2">
      <img className="w-[100px]" src={Logo} alt="Logo" />
    </div>
  );
};

export default Icons;
