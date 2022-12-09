import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter(); console.log(router);


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black-header_bg backdrop-blur-[25px] py-4 lg:py-5">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
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
            <li className={'header__nav-item'}>
              <Link
                href={"/"}
                className={`header__nav-link font-medium text-base text-white uppercase ${router.pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className={`header__nav-link font-medium text-base text-white uppercase ${router.pathnamew === "/#our-services" ? "active" : ""}`}
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
          </Link>
          <button className="block lg:hidden cursor-pointer p-1">
            <Image src={"/Images/Header_Img/menu.svg"} width={30} height={25} alt="burger-image" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
