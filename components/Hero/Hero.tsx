import Image from "next/image";
import React, { useEffect, useState } from "react";
import Third from "../BaseComponents/FormInput/Third";
import HeroForm from "../BaseComponents/FormInput/HeroForm";
import QuoteForm from "../BaseComponents/FormInput/QuoteForm";

function Hero() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);

  return (
    <>
      {/* ----- First ----- */}
      {first ? (
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
              <HeroForm
                setFirst={() => setFirst(false)}
                setSecond={() => setSecond(true)}
              />
            </div>
          ) : null
        }
        {/* ----- Second ----- */}
        {
          second ? (
            <div className="container flex flex-col-reverse items-center lg:flex lg:items-start lg:flex-row lg:justify-between py-24 space-x-5">
              <div className="max-w-hero_Form_W w-full bg-heroFormMoblie sm:bg-black-hero_Form_Bg backdrop-blur-[15px] rounded-10 p-4 pb-7 sm:p-25 mb-8">
                <h2 className="flex items-center font-semibold text-20 sm:text-28 text-white mb-2">
                  <Image
                    width={25}
                    height={25}
                    alt="arrow-left"
                    className="mr-16 cursor-pointer"
                    src={"/Images/Quote/direct.svg"}
                    onClick={() => {
                      setFirst(true);
                      setSecond(false);
                    }}
                  />
                  Shipping Cost Calculator
                </h2>
                <p className="font-normal text-base text-black-gray">
                  Information about your car
                </p>
                <span className="w-full h-[1px] inline-block bg-black-line_bg mt-4 mb-3"></span>
                <QuoteForm />
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
        {/* {
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
      ) : null}
      {/* ----- Second ----- */}
      {second ? (
        <section className="hero bg-heroBgMobile sm:bg-heroBg bg-no-repeat bg-bottom-left bg-fixed bg-cover bg-left-right pt-28 md:pt-160 pb-0 md:pb-80">
          <div className="container flex flex-col-reverse items-center lg:flex lg:items-start lg:flex-row lg:justify-between py-24 space-x-5">
            <div className="max-w-hero_Form_W w-full bg-heroFormMoblie sm:bg-black-hero_Form_Bg backdrop-blur-[15px] rounded-10 p-4 pb-7 sm:p-25 mb-8">
              <h2 className="flex items-center font-semibold text-20 sm:text-28 text-white mb-2">
                <Image
                  className="mr-16"
                  src={"/Images/Quote/direct.svg"}
                  width={25}
                  height={25}
                  alt="arrow-left"
                />{" "}
                Shipping Cost Calculator
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
              <Image
                src={"/Images/Quote/us.png"}
                width={443}
                height={336}
                alt="us"
              />
            </div>
          </div>
        </section>
      ) : null}
      {/* ----- Thrird ----- */}
      {three ? (
        <section className="hero bg-heroBgMobile sm:bg-hero3 bg-no-repeat bg-bottom-left bg-fixed bg-cover bg-left-right pt-28 md:pt-160 pb-0 md:pb-80">
          <div className="container flex flex-col-reverse items-center lg:flex lg:items-start lg:flex-row  py-24 ">
            <div className="max-w-hero_Form_W  w-full bg-heroFormMoblie sm:bg-quoteform backdrop-blur-lg rounded-10 py-5 px-6 mb-8 leading-8">
              <h2 className="flex items-start font-semibold text-20 sm:text-28 text-white mb-2">
                <Image
                  className="mr-16 mt-2"
                  src={"/Images/Quote/direct.svg"}
                  width={23}
                  height={23}
                  alt="arrow-left"
                />{" "}
                Where should we send your quote?
              </h2>
              <p className="font-normal text-base leading-5 text-black-gray">
                Get your estimate quote in seconds
              </p>
              <span className="w-full h-[1px] inline-block bg-black-line_bg mt-4 mb-3"></span>
              <Third />
            </div>
            <div className="text-start  md:text-center lg:text-start max-w-heroRightW ml-14  pb-12 lg:mb-0 ">
              <h3 className="font-semibold text-white text-2xl">
                Estimation Details
              </h3>
              <div className="flex items-start">
                <Image
                  src={"/Images/Quote/us.png"}
                  width={407}
                  height={308}
                  alt="us"
                  className="mt-4"
                />

                <div className="flex flex-col items-start ml-8 mt-9">
                  <section className="flex text-white font-thin">
                    <Image
                      src={"/Images/Hero_Img/location.svg"}
                      width={24}
                      height={24}
                      alt="call img"
                    />
                    <p className="ml-3">Rome, Italy</p>
                  </section>
                  <Image
                    src={"/Images/Hero_Img/line.svg"}
                    width={6}
                    height={10}
                    alt="call img"
                    className="py-1 ml-2"
                  />
                  <section className="flex text-white font-thin">
                    <Image
                      src={"/Images/Hero_Img/location.svg"}
                      width={24}
                      height={24}
                      alt="call img"
                    />
                    <p className="ml-3">Paris, France</p>
                  </section>

                  <section className="mt-8 font-semibold ml-4 text-white text-base">
                    Estimate time:
                    <span className="font-thin text-base">10.12.2022</span>
                  </section>
                </div>
              </div>
              <div className="w-316 mt-4">
                <h3 className="text-2xl text-white font-semibold">
                  Vehicle details
                </h3>
                <section className="border-y-2 border-gray-line my-4  flex flex-col gap-3 py-3 px-3 text-base text-white">
                  <section className="flex justify-between">
                    Year:
                    <span>2020</span>
                  </section>
                  <section className="flex justify-between">
                    Make:
                    <span>BMW</span>
                  </section>
                  <section className="flex justify-between">
                    Model:
                    <span>X6 M</span>
                  </section>
                </section>
                <h3 className="text-2xl text-white font-semibold">
                  Shipping Details
                </h3>
                <p className="text-xl text-white mt-3">$2500</p>
              </div>
            </div>
          ) : null
        } */}
      </section>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default Hero;
