import Image from "next/image";
import Links from "next/link";
import {Link} from 'react-scroll'
import { useState } from "react";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const ActiveClick = () => {
    setActive(true);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
  };
  const ActiveClick1 = () => {
    setActive1(true);
    setActive(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
  };
  const ActiveClick2 = () => {
    setActive2(true);
    setActive(false);
    setActive1(false);
    setActive3(false);
    setActive4(false);
  };
  const ActiveClick3 = () => {
    setActive3(true);
    setActive(false);
    setActive1(false);
    setActive2(false);
    setActive4(false);
  };
  const ActiveClick4 = () => {
    setActive4(true);
    setActive(false);
    setActive1(false);
    setActive2(false);
    setActive3(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black-header_bg backdrop-blur-[25px] py-4 lg:py-5">
      <div className="container flex items-center justify-between">
        <Link to="hero" spy={true} smooth={true} offset={0} duration={0}>
          <Image
            className="w-44 h-8 lg:w-245 lg:h-43"
            src="/Images/Header_Img/site_logo.svg"
            width={245}
            height={43}
            alt="site-logo"
            priority={true}
          />
        </Link>
        <div className="flex items-center space-x-[20px] lg:space-x-[50px]">
          <ul className="hidden space-x-[25px] lg:flex items-center">
            <li className="header__nav-item">
              <Link
                to="hero" spy={true} smooth={true} offset={0} duration={0}
                onClick={ActiveClick}
                className="header__nav-link font-medium text-base cursor-pointer text-white uppercase"
              >
                Home
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="our-services" spy={true} smooth={true} offset={15} duration={0}
                onClick={ActiveClick1}
                className="header__nav-link font-medium text-base cursor-pointer text-white uppercase"
              >
                Services
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="about-us" spy={true} smooth={true} offset={0} duration={0}
                onClick={ActiveClick2}
                className="header__nav-link font-medium text-base cursor-pointer text-white uppercase"
              >
                About Us
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="shipping" spy={true} smooth={true} offset={0} duration={0}
                onClick={ActiveClick3}
                className="header__nav-link font-medium text-base cursor-pointer text-white uppercase"
              >
                Shipping Methods
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="faq" spy={true} smooth={true} offset={10} duration={0}
                onClick={ActiveClick4}
                className="header__nav-link font-medium text-base cursor-pointer text-white uppercase"
              >
                FAQ
              </Link>
            </li>
          </ul>
          <Links
            className="hidden sm:flex items-center space-x-[10px] font-medium text-base text-white"
            href={"tel:+998970130322"}
          >
            <Image
              className="w-7 h-7 lg:w-9 lg:h-9"
              src={"/Images/Header_Img/call.svg"}
              width={38}
              height={38}
              alt="call-image"
              priority={true}
            />
            <p className="text-xs lg:text-base">224-218-2949</p>
          </Links>
          <button
            onClick={() => setShowModal(!showModal)}
            className="block lg:hidden cursor-pointer p-1"
          >
            <Image
              src={"/Images/Header_Img/menu.svg"}
              width={30}
              height={25}
              alt="burger-image"
            />
          </button>
        </div>
      </div>
      <div
        className={`absolute duration-300 ${
          showModal ? "translate-x-0" : "-translate-x-[100%]"
        } top-0 w-full h-[100vh] bg-white`}
      >
        <div className="flex p-4 mb-40 items-center justify-between">
          <Links href={"/"}>
            <Image
              src={"/Images/headerModal/logo.svg"}
              width={200}
              height={40}
              alt="modal logo"
            />
          </Links>
          <Image
            onClick={() => setShowModal(false)}
            className="cursor-pointer"
            src={"/Images/headerModal/delete.svg"}
            width={22}
            height={17}
            alt="modal delte"
          />
        </div>
        <nav className="px-6 flex flex-col mb-30 space-y-9 ">
          <Links
            onClick={() => setShowModal(false)}
            className="font-bold text-28"
            href={"/"}
          >
            Home
          </Links>
          <Links
            onClick={() => setShowModal(false)}
            className="font-bold text-28"
            href={"/#our-services"}
          >
            Service
          </Links>
          <Links
            onClick={() => setShowModal(false)}
            className="font-bold text-28"
            href={"/#about-us"}
          >
            About us
          </Links>
          <Links
            onClick={() => setShowModal(false)}
            className="font-bold text-28"
            href={"/#shipping"}
          >
            Shipping methods
          </Links>
          <Links
            onClick={() => setShowModal(false)}
            className="font-bold text-28 border-b-2 pb-30"
            href={"/#faq"}
          >
            FAQ
          </Links>
        </nav>
        <div className="space-y-7 pl-25">
          <a className="flex" href="tel:+15132642969">
            <Image
              src={"/Images/Header_Img/call.svg"}
              width={38}
              height={38}
              alt="call img"
            />
            <strong className="flex ml-5 flex-col">
              <span className="font-normal text-base text-black-modal__tel mb-2">
                Phone Number
              </span>
              <span className="font-semibold text-lg">+1 (513) 264-2969</span>
            </strong>
          </a>
          <a className="flex" href="tel:+15132642969">
            <Image
              src={"/Images/headerModal/email.svg"}
              width={38}
              height={38}
              alt="call img"
            />
            <strong className="flex ml-5 flex-col">
              <span className="font-normal text-base text-black-modal__tel mb-2">
                Email address
              </span>
              <span className="font-semibold text-lg">+1 (513) 264-2969</span>
            </strong>
          </a>
        </div>
        <p className="absolute bottom-0 text-center right-0 left-0 mx-auto">
          Copyright © All rights reserved
        </p>
      </div>
    </header>
  );
}

export default Header;
