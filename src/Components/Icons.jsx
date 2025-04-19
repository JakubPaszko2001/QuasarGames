import { useState, useEffect } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import { TbMoon } from "react-icons/tb";
import Logo from "../assets/Abyss-Logo2.webp";
import LogoAbyss from "../assets/Abyss-Logo-Napis.webp";
const Icons = ({ menuOpen }) => {
  return (
    <div className="flex items-center text-4xl gap-4 md:gap-2">
      <img className="w-[100px] xl:w-[80px] xl:!pt-4" src={Logo} alt="Logo" />
    </div>
  );
};

export default Icons;
