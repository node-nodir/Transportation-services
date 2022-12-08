import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black-header_bg backdrop-blur-[25px] py-5">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <Image
            className="w-245 h-43"
            src="/Images/Header_Img/site_logo.svg"
            width={245}
            height={43}
            alt="site-logo"
            priority={true}
          />
        </Link>
        <div className="flex items-center space-x-[50px]">
          <ul className="space-x-[25px] flex items-center">
            <li className="header__nav-item">
              <Link
                className="header__nav-link font-medium text-base text-white uppercase"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link font-medium text-base text-white uppercase"
                href={"#our-services"}
              >
                Services
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link font-medium text-base text-white uppercase"
                href={"#about-us"}
              >
                About Us
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link font-medium text-base text-white uppercase"
                href={"#shipping"}
              >
                Shipping Methods
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link font-medium text-base text-white uppercase"
                href={"#faq"}
              >
                FAQ
              </Link>
            </li>
          </ul>
          <Link
            className="flex items-center space-x-[10px] font-medium text-base text-white"
            href={"tel:+998970130322"}
          >
            <Image
              src={"/Images/Header_Img/call.svg"}
              width={38}
              height={38}
              alt="call-image"
              priority={true}
            />
            <p>224-218-2949</p>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
