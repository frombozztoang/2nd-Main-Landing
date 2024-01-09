"use client";
import Image from "next/image";
import React from "react";
import upBtnImage from "../../public/icons/upBtn.png";

const upBtn = () => {
  const handleUpBtnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className=" z-50 fixed bottom-30 right-30 hover:cursor-pointer"
      onClick={handleUpBtnClick}
    >
      <Image
        className="w-30 h-30 tablet:w-50 tablet:h-50"
        src={upBtnImage}
        alt="upBtn"
      />
    </div>
  );
};

export default upBtn;
