import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Image from "next/image";

function Wedo() {
  const [CounterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section className="bg-weDoBg sm:bg-center py-16 bg-no-repeat bg-cover">
        <div className="container">
          <div className="flex flex-col text-center lg:text-left lg:flex lg:items-center lg:flex-row lg:justify-between">
            <div className="w-[80%] sm:max-w-weDoContent text-left mb-8 lg:mb-0">
              <h2 className="font-semibold text-white text-2xl sm:text-4xl mb-2 leading-wedoTitile">
                We’re PROs at what we DO
              </h2>
              <p className="text-white text-sm sm:text-base leading-6 font-normal">
                Hire professional carriers for your shipments needs
              </p>
            </div>
            <ul className="flex flex-wrap gap-9 sm:flex sm:flex-nowrap sm:items-center sm:justify-center lg:justify-start sm:space-x-9">
              <li className="flex flex-col">
                <span className="w-10 h-10 rounded-2xl flex items-center justify-center bg-weDoNumber cursor-pointer mb-2">
                  <Image
                    src={"/Images/wedoImgs/avatar.svg"}
                    width={22}
                    height={25}
                    alt="avatar img"
                  />
                </span>
                <strong className="font-semibold text-left text-white text-4xl sm:text-5xl leading-numberWeDo mb-2">
                  {CounterOn && (
                    <CountUp start={0} end={10} duration={1} delay={0} />
                  )}
                  K
                </strong>
                <p className="font-normal text-sm sm:text-base leading-6 text-white">
                  Client Served
                </p>
              </li>
              <li className="flex flex-col">
                <span className="w-10 h-10 rounded-2xl flex items-center justify-center bg-weDoNumber cursor-pointer mb-2">
                  <Image
                    src={"/Images/wedoImgs/avatar.svg"}
                    width={22}
                    height={25}
                    alt="avatar img"
                  />
                </span>
                <strong className="font-semibold text-left text-white text-4xl sm:text-5xl leading-numberWeDo mb-2">
                  {CounterOn && (
                    <CountUp start={0} end={23} duration={1} delay={0} />
                  )}
                  K
                </strong>
                <p className="font-normal text-sm sm:text-base leading-6 text-white">
                  Vehicle shipped
                </p>
              </li>
              <li className="flex flex-col">
                <span className="w-10 h-10 rounded-2xl flex items-center justify-center bg-weDoNumber cursor-pointer mb-2">
                  <Image
                    src={"/Images/wedoImgs/avatar.svg"}
                    width={22}
                    height={25}
                    alt="avatar img"
                  />
                </span>
                <strong className="font-semibold text-left text-white text-4xl sm:text-5xl leading-numberWeDo mb-2">
                  {CounterOn && (
                    <CountUp start={0} end={96} duration={1} delay={0} />
                  )}
                  %
                </strong>
                <p className="font-normal text-sm sm:text-base leading-6 text-white">
                  Satisfied customer
                </p>
              </li>
              <li className="flex flex-col">
                <span className="w-10 h-10 rounded-2xl flex items-center justify-center bg-weDoNumber cursor-pointer mb-2">
                  <Image
                    src={"/Images/wedoImgs/avatar.svg"}
                    width={22}
                    height={25}
                    alt="avatar img"
                  />
                </span>
                <strong className="font-semibold text-left text-white text-4xl sm:text-5xl leading-numberWeDo mb-2">
                  {CounterOn && (
                    <CountUp start={0} end={7} duration={1} delay={0} />
                  )}
                  +
                </strong>
                <p className="font-normal text-sm sm:text-base leading-6 text-white">
                  Years in operation
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
}

export default Wedo;
