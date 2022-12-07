import Image from "next/image";
import Link from "next/link";
import React from "react";
import Main from "./main.svg";


function Footer(): any {
 return (
    <footer className="w-full max-h-[250px] bg-[#282828]">
      <div className="container">
        <div className="md:flex md:justify-between gap-2 sm:grid-cols-2 grid grid-cols-1">
          <div className="max-w-[354px] w-full flex-shrink-0 my-[50px] ">
            <Image src={Main} width={245} height={43} alt="logo" />
            <p className="font-light text-base leading-[19px] lg:mt-3 lg:mb-8 text-[#ffffffde]">
              Transportation Services that you can trust
            </p>
            <h1 className="font-light text-[#ffffff61] mt-[55px]  text-xs my-8 text-start">
              Copyright © All rights reserved
            </h1>
          </div>
          <div className="max-w-[155px] max-h-[197px] w-full my-[50px]">
            <h1 className="text-lg font-semibold leading-7 text-[#ffffffde]">
              Our Services
            </h1>
            <ul className="text-[#ffffffad] mt-[20px]">
              <li className="text-sm hover:scale-105 transition-all hover:underline underline-offset-2">
                <a href="#">Car Shipments</a>
              </li>
              <li className="mt-3 text-sm hover:scale-105 transition-all hover:underline underline-offset-2">
                <a href="#">Motorcycle shipments</a>
              </li>
              <li className="mt-3 text-sm hover:scale-105 transition-all hover:underline underline-offset-2">
                <a href="#">Heavy Equipment</a>
              </li>
              <li className="mt-3 text-sm hover:scale-105 transition-all hover:underline underline-offset-2">
                <a href="#"></a>All Services
              </li>
            </ul>
          </div>
          <div className="max-w-[166px] max-h-[131px] w-full my-[50px]">
            <h1 className="text-lg font-semibold leading-7 text-[#ffffffde]">
              Shipping Methods
            </h1>
            <ul className="text-[#ffffffad] mt-[20px]">
              <li className="text-sm  hover:scale-105 transition-all hover:underline underline-offset-2">
                <a href="#">Rail Freight</a>
              </li>
              <li className="mt-3 text-sm  hover:scale-105 transition-all hover:underline underline-offset-2">
                <a href="#">Truck Transport</a>
              </li>
              <li className="mt-3 text-sm  hover:scale-105 transition-all hover:underline underline-offset-2">
                <a href="#">Air Transport</a>
              </li>
            </ul>
          </div>
          <div className="max-w-[155px] max-h-[197px] w-full  my-[50px]">
            <h1 className="text-lg font-semibold leading-7 text-[#ffffffde]">
              About US
            </h1>
            <ul className="text-[#ffffffad] mt-[20px]">
              <li className="text-sm  hover:scale-105 transition-all hover:underline underline-offset-2">
                <a href="#">Our Company</a>
              </li>
              <li className="mt-3 text-sm  hover:scale-105 transition-all hover:underline underline-offset-2">
                <a href="#">F.A.Q.</a>
              </li>
              <li className="mt-3 text-sm  hover:scale-105 transition-all hover:underline underline-offset-2">
                <a href="#">Contact us</a>
              </li>
              <li className="mt-3 text-sm  hover:scale-105 transition-all hover:underline underline-offset-2">
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


