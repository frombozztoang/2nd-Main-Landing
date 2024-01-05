"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/icons/Logo.png";
import Hamburger from "../../public/icons/Hamburger.png";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  const menuItem = [
    { index: 0, label: "Main", href: "/" },
    { index: 1, label: "Services", href: "/services" },
    { index: 2, label: "Help", href: "/help" },
  ];

  const isCurrentPage = (href: string) => {
    return pathname === href;
  };

  return (
    <nav className="fixed w-full top-0 px-28 py-12 tablet:px-64 flex items-center justify-between ">
      <div className="">
        <Image className="w-210 h-auto" src={Logo} alt="logo" />
      </div>

      <div className="hidden tablet:flex ">
        {menuItem.map((i) => (
          <div
            className={`${
              isCurrentPage(i.href) ? "text-white" : "text-[#b2b2b2]"
            } mr-10 hover:text-white font-medium text-18 transition-all flex w-120 h-47 items-center justify-center`}
            key={i.index}
          >
            <Link className="" href={i.href}>
              {i.label}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center tablet:hidden hover:bg-[#ffffff15] hover:cursor-pointer rounded-[50%] w-40 h-40">
        <Image className="" src={Hamburger} alt="hamburger" />
      </div>
    </nav>
  );
};

export default Header;
