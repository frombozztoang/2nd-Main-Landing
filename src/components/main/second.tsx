import Image from "next/image";
import React from "react";
import DEPthLogo from "../../../public/images/mainDEPthLogo.png";

const Second = () => {
  return (
    <div className=" text-12 tablet:text-30 px-16">
      <div>
        <Image
          className="w-[233px] h-[74px] tablet:w-[343px] tablet:h-[106px]  object-cover mb-34"
          src={DEPthLogo}
          alt="depthlogo"
        />
        <div className=" font-thin flex pb-20 whitespace-nowrap ">
          뎁스는 2022 년에 창립된 명지대학교 IT 프로젝트형 동아리로,
          <br />
          기획·개발·디자인 분야에 대해 공부하고, <br />
          협업하여 어플리케이션 및 웹 프로젝트를 만들며 <br />
          함께 성장해 나가는 동아리입니다.
        </div>
        <div className=" border-b-1 w-200 tablet:w-400" />
      </div>
    </div>
  );
};

export default Second;
