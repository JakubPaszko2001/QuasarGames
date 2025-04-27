import React from "react";
import NavUl from "./NavUl";
import { useState, useRef } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import gsap from "gsap";
import Icons from "./Icons";
import Logo from "../assets/Abyss-Logo2.webp";

const MobileNav = () => {
  gsap.registerPlugin();
  const [menuOpen, setMenuOpen] = useState(false);
  const asideRef = useRef();

  function handleMenuOpen() {
    setMenuOpen(!menuOpen);
    gsap.to(asideRef.current, { y: "0%", duration: 0.8, ease: "power1.inOut" });
  }

  function handleMenuClose() {
    setMenuOpen(!menuOpen);
    gsap.to(asideRef.current, {
      y: "-100%",
      duration: 0.8,
      ease: "power1.inOut",
    });
  }

  return (
    <nav className="xl:hidden">
      <div className="fixed top-0 left-0 w-screen h-16 bg-black/15 backdrop-blur-sm z-40">
        <button
          aria-label="Logo"
          className="absolute top-5 left-5 w-[25px] h-[25px]"
        >
          <div
            id="borderParent"
            className="relative w-full h-full flex justify-center items-center"
          >
            <img className="w-[100px]" loading="eager" src={Logo} alt="Abyss Logo" />
          </div>
        </button>
        <button
          aria-label="Open Menu"
          onClick={handleMenuOpen}
          className="fixed top-5 right-5"
        >
          <IoMdMenu className="w-[25px] h-[25px] text-white" />
        </button>
      </div>
      <aside
        ref={asideRef}
        className="box fixed top-0 right-0 w-full h-full bg-black/80 backdrop-blur-sm -translate-y-[100%] z-50"
      >
        <button
          aria-label="Close Menu"
          tabIndex={menuOpen === true ? 0 : -1}
          onClick={handleMenuClose}
          className="absolute top-10 right-10"
        >
          <IoMdClose className="w-[50px] h-[50px] text-white" />
        </button>
        <NavUl menuOpen={menuOpen} handleClose={handleMenuClose} />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <Icons menuOpen={menuOpen} />
        </div>
      </aside>
    </nav>
  );
};

export default MobileNav;
