import Image from "next/image";
import React from "react";
import HeroForm from "../BaseComponents/FormInput/HeroForm";

function Hero() {
  return (
    <section className="hero bg-heroBgMobile sm:bg-heroBg bg-no-repeat bg-bottom-left bg-fixed bg-cover bg-left-right pt-28 md:pt-160 pb-0 md:pb-80">
      <div className="container flex flex-col-reverse items-center lg:flex lg:items-start lg:flex-row lg:justify-between py-24 space-x-5">
        <div className="max-w-hero_Form_W w-full bg-heroFormMoblie sm:bg-black-hero_Form_Bg backdrop-blur-[15px] rounded-10 p-4 pb-7 sm:p-25 mb-8">
          <h2 className="font-semibold text-20 sm:text-28 text-white mb-2">
            Shipping Cost Calculator
          </h2>
          <p className="font-normal text-base text-black-gray">
            Get your estimate quote in seconds
          </p>
          <span className="w-full h-[1px] inline-block bg-black-line_bg mt-4 mb-3"></span>
          <HeroForm />
        </div>
        <div className="text-start md:text-center lg:text-start max-w-heroRightW pb-12 lg:mb-0 !ml-0 md:mt-0 lg:mt-11 w-full">
          <blockquote className="hidden lg:flex items-center font-medium text-sm text-white uppercase">
            <Image
              className="mr-10"
              src={"/Images/Hero_Img/star.svg"}
              width={24}
              height={24}
              alt="star"
            />{" "}
            World Top Rated Shipping Company
          </blockquote>
          <h1 className="font-bold text-white text-35 leading-42 md:text-56 md:leading-68">
            Transportation Services that you can trust
          </h1>
          <p className="text-white font-normal text-20 mt-5">
            Transport your vehicle with PROs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
