import Image from "next/image";
import Link from "next/link";
import React from "react";
import Main from "./main.svg";
import FaceB from "./fc.svg";
import LinD from "./In.svg";
import YouT from "./yt.svg";
import Twit from "./tw.svg";
import Insta from "./ins.svg";

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
            <h1 className="font-light text-[#ffffff61] mt-[55px]  text-xs text-center my-8 text-start">
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

// <footer className="w-full max-h-[402px]">
//   <div className="container">
//     <div className="md:flex mt-[95px] md:justify-between gap-2 sm:grid-cols-2 grid grid-cols-1">
//       <div className="max-w-[354px] w-full flex-shrink-0" >
//         <Image src={Main} width={120} height={25} alt="logo" />
//         <p className="font-light text-base leading-[26px] lg:mt-6 lg:mb-8 text-[#182F43]">
//           Praesent sapien massa, convallis a pellentesque nec, egestas non
//           nisi. Sed porttitor lectus nibh.
//         </p>
//         <div className="flex items-center text-center justify-start">
//           <Link
//             href="https://www.instagram.com/"
//             className="lg:mr-3 w-[30px] h-[30px] flex items-center justify-center  hover:scale-105 transition-all"
//           >
//             <Image src={FaceB} alt="logo" />
//           </Link>
//           <Link
//             href="https://www.instagram.com/"
//             className="lg:mr-3 w-[30px] h-[30px] flex items-center justify-center hover:scale-105 transition-all"
//           >
//             <Image src={Twit} alt="logo" />
//           </Link>
//           <Link
//             href="https://www.instagram.com/"
//             className="lg:mr-3 w-[30px] h-[30px] flex items-center justify-center hover:scale-105 transition-all"
//           >
//             <Image src={LinD} alt="logo" />
//           </Link>
//           <Link
//             href="https://www.instagram.com/"
//             className="lg:mr-3 w-[30px] h-[30px] flex items-center justify-center hover:scale-105 transition-all"
//           >
//             <Image src={YouT} alt="logo" />
//           </Link>
//           <Link
//             href="https://www.instagram.com/"
//             className="w-[30px] h-[30px] flex items-center justify-center hover:scale-105 transition-all "
//           >
//             <Image src={Insta} alt="logo" />
//           </Link>
//         </div>
//       </div>
//       <div className="max-w-[155px] max-h-[197px] w-full">
//         <h1 className="text-lg font-semibold leading-7 text-[#182F43]">
//           Our Services
//         </h1>
//         <ul className="text-[#2E5A81] mt-4">
//           <li className="text-sm hover:scale-105 transition-all hover:underline underline-offset-2">
//             <a href="#">Car Shipments</a>
//           </li>
//           <li className="mt-3 text-sm hover:scale-105 transition-all hover:underline underline-offset-2">
//             <a href="#">Motorcycle shipments</a>
//           </li>
//           <li className="mt-3 text-sm hover:scale-105 transition-all hover:underline underline-offset-2">
//             <a href="#">Heavy Equipment</a>
//           </li>
//           <li className="mt-3 text-sm hover:scale-105 transition-all hover:underline underline-offset-2">
//             <a href="#">Luxury Cars shipment</a>
//           </li>
//           <li className="mt-3 text-sm hover:scale-105 transition-all hover:underline underline-offset-2">
//             <a href="#"></a>All Services
//           </li>
//         </ul>
//       </div>
//       <div className="max-w-[166px] max-h-[131px] w-full">
//         <h1 className="text-lg font-semibold leading-7 text-[#182F43]">
//           Shipping Methods
//         </h1>
//         <ul className="text-[#2E5A81] mt-4">
//           <li className="text-sm  hover:scale-105 transition-all hover:underline underline-offset-2">
//             <a href="#">Rail Freight</a>
//           </li>
//           <li className="mt-3 text-sm  hover:scale-105 transition-all hover:underline underline-offset-2">
//             <a href="#">Truck Transport</a>
//           </li>
//           <li className="mt-3 text-sm  hover:scale-105 transition-all hover:underline underline-offset-2">
//             <a href="#">Air Transport</a>
//           </li>
//         </ul>
//       </div>
//       <div className="max-w-[155px] max-h-[197px] w-full">
//         <h1 className="text-lg font-semibold leading-7 text-[#182F43]">
//           About US
//         </h1>
//         <ul className="text-[#2E5A81] mt-4">
//           <li className="text-sm  hover:scale-105 transition-all hover:underline underline-offset-2">
//             <a href="#">Our Company</a>
//           </li>
//           <li className="mt-3 text-sm  hover:scale-105 transition-all hover:underline underline-offset-2">
//             <a href="#">F.A.Q.</a>
//           </li>
//           <li className="mt-3 text-sm  hover:scale-105 transition-all hover:underline underline-offset-2">
//             <a href="#">Contact us</a>
//           </li>
//           <li className="mt-3 text-sm  hover:scale-105 transition-all hover:underline underline-offset-2">
//             <a href="#">Terms of Service</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//     <hr className="lg:mx-[165px] mt-8"></hr>

//     <div>
//       <h1 className="font-light text-xs text-center my-8">
//         Copyright © All rights reserved
//       </h1>
//     </div>
//   </div>
// </footer>
