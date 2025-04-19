import { useEffect } from "react";
import NavUl from "./NavUl";
import Icons from "./Icons";
const DesktopNav = () => {
  const menuOpen = true;
  useEffect(() => {
    const nav = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("-translate-x-[100%]");
      } else {
        nav.classList.remove("-translate-x-[100%]");
      }

      lastScrollY = window.scrollY;
    });
  });
  return (
    <nav className="hidden fixed top-1/2 -translate-y-1/2 left-0 xl:block z-50">
      <div className="navbar flex flex-col justify-center items-center w-full h-[60vh] px-10 bg-black/10 rounded-br-xl rounded-tr-xl border-y-1 border-gray-500 backdrop-blur-md transition-transform duration-300">
        <Icons menuOpen={menuOpen} />
        <NavUl menuOpen={menuOpen} />
      </div>
    </nav>
  );
};

export default DesktopNav;
