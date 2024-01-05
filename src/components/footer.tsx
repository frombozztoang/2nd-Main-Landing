"use client";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import MainLogo from "../../public/icons/mainLogo.svg";
import Mail from "../../public/icons/mail.svg";
import Instagram from "../../public/icons/Instagram.svg";
import Depth from "../../public/icons/DEPth.svg";

const footer = () => {
  return (
    <div className="bottom-0 bg-[#00000030] w-full py-24 px-12 box-border tablet:p-64">
      <div>
        <MainLogo className=" object-contain" />
      </div>

      <div className="tablet:mt-32 mt-10 flex items-center">
        <Link
          className="flex flex-col tablet:flex-row items-start mr-13 tablet:mr-50"
          href="www.google.com"
          target="_blank"
        >
          <Instagram />
          <div className="tablet:ml-3 tablet:text-12 text-[10.5px]">
            depth_mju.co.kr
          </div>
        </Link>
        <Link
          className="flex flex-col tablet:flex-row items-start mr-13 tablet:mr-50 "
          href="www.google.com"
          target="_blank"
        >
          <Mail />
          <div className="tablet:ml-3 tablet:text-12 text-[10.5px]">
            2022depth@gmail.com
          </div>
        </Link>
        <Link
          className="flex flex-col  tablet:flex-row items-start tablet:items-center "
          href="www.google.com"
          target="_blank"
        >
          <Depth width="41" height="13" />
          <div className="tablet:ml-3 tablet:text-12 text-10 ">
            뎁스 홈페이지
          </div>
        </Link>
      </div>
    </div>
  );
};

export default footer;
