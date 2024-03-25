"use client";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${headerActive ? "h-[100px]" : "h-[124px]"} 
      fixed left-0 right-0 w-full bg-black h-[100px] transition-all`}
      style={{ zIndex: 9999 }}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <Link href="">
          <Image src={"/assets/img/logo.png"} width={90} height={20} alt="" />
        </Link>
        {/* mobile nav */}
        <MobileNav
          containerStyles={`${headerActive ? "top-[90px]" : "top-[124px]"}
        ${
          openNav
            ? "max-h-max pt-8 pb-10 border-t border-white/10"
            : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
        }

        flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0  text-base uppercase font-medium text-white transition-all xl:hidden`}
        />
        {/* desktop nav */}
        <Nav containerStyles="flex gap-4 text-white text-base uppercase font-medium hidden xl:flex" />

        {/* hide/open menu button */}
        <div className="flex items-center gap-4">
          {/* Login & Register */}
          <div className="text-white flex items-center gap-4">
            <span>Call Us:+254-722-549-896</span>
          </div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="text-white xl:hidden"
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
