import Image from "next/image";
import React, { useState } from "react";
import Third from "../BaseComponents/FormInput/Third";
import HeroForm from "../BaseComponents/FormInput/HeroForm";
import QuoteForm from "../BaseComponents/FormInput/QuoteForm";

function Hero() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [three, setThree] = useState(false);

  return (
    <>
      <section className="hero bg-heroBgMobile sm:bg-heroBg bg-no-repeat bg-bottom-left bg-fixed bg-cover bg-left-right pt-28 md:pt-160 pb-0 md:pb-80">
        {/* ----- First ----- */}
        {
          first ? (
            <div className="container flex flex-col-reverse items-center lg:flex lg:items-start lg:flex-row lg:justify-between py-24 space-x-5">
              <div className="max-w-hero_Form_W w-full bg-heroFormMoblie sm:bg-black-hero_Form_Bg backdrop-blur-[15px] rounded-10 p-4 pb-7 sm:p-25 mb-8">
                <h2 className="font-semibold text-20 sm:text-28 text-white mb-2">
                  Shipping Cost Calculator
                </h2>
                <p className="font-normal text-base text-black-gray">
                  Get your estimate quote in seconds
                </p>
                <span className="w-full h-[1px] inline-block bg-black-line_bg mt-4 mb-3"></span>
                <HeroForm setFirst={() => setFirst(false)} setSecond={() => setSecond(true)} />
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
          ) : null
        }
        {/* ----- Second ----- */}
        {
          second ? (
            <div className="container flex flex-col-reverse items-center lg:flex lg:items-start lg:flex-row lg:justify-between py-24 space-x-5">
              <div className="max-w-hero_Form_W w-full bg-heroFormMoblie sm:bg-black-hero_Form_Bg backdrop-blur-[15px] rounded-10 p-4 pb-7 sm:p-25 mb-8">
                <h2 className="flex items-center font-semibold text-20 sm:text-28 text-white mb-2">
                  <Image className="mr-16" src={"/Images/Quote/direct.svg"} width={25} height={25} alt="arrow-left" /> Shipping Cost Calculator
                </h2>
                <p className="font-normal text-base text-black-gray">
                  Information about your car
                </p>
                <span className="w-full h-[1px] inline-block bg-black-line_bg mt-4 mb-3"></span>
                <QuoteForm setSecond={() => setSecond(true)} />
              </div>
              <div className="text-start md:text-center lg:text-start max-w-heroRightW pb-12 lg:mb-0 !ml-0 w-full">
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
                <Image src={"/Images/Quote/us.png"} width={443} height={336} alt="us" />
              </div>
            </div>
          ) : null
        }
        {/* ----- Thrird ----- */}
        {
          three ? (
            <div className="container flex flex-col-reverse items-center lg:flex lg:items-start lg:flex-row lg:justify-between py-24 space-x-5">
              <div className="max-w-hero_Form_W w-full bg-heroFormMoblie sm:bg-quoteform backdrop-blur-lg rounded-10 p-4 pb-7 sm:p-25 mb-8">
                <h2 className="flex items-start font-semibold text-20 sm:text-28 text-white mb-2">
                  <Image className="mr-16 mt-2" src={"/Images/Quote/direct.svg"} width={25} height={25} alt="arrow-left" /> Where should we send your quote?
                </h2>
                <p className="font-normal text-base text-black-gray">
                  Get your estimate quote in seconds
                </p>
                <span className="w-full h-[1px] inline-block bg-black-line_bg mt-4 mb-3"></span>
                <Third />
              </div>
              <div className="text-start md:text-center lg:text-start max-w-heroRightW pb-12 lg:mb-0 !ml-0 w-full">
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
                <Image src={"/Images/Quote/us.png"} width={443} height={336} alt="us" />
              </div>
            </div>
          ) : null
        }
      </section>
    </>
  );
}

export default Hero;
