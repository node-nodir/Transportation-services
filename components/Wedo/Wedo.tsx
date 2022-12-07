import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Wedo() {
  const [CounterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section className="bg-weDoBg bg-center py-16 bg-no-repeat bg-cover">
        <div className="container">
          <div className="flex flex-col text-center lg:text-left lg:flex lg:items-center lg:flex-row lg:justify-between">
            <div className="lg:w-weDoContent mb-8 lg:mb-0 mx-auto lg:mx-0">
              <h2 className="font-semibold text-white text-2xl sm:text-4xl mb-2 leading-wedoTitile">
                We’re Pro’s at what we DO
              </h2>
              <p className="text-white text-sm sm:text-base leading-6 font-normal">
                Cras ultricies ligula sed magna dictum porta. Quisque velit
                nisi, pretium ut lacinia
              </p>
            </div>
            <ul className="flex flex-wrap justify-center gap-9 sm:flex sm:flex-nowrap sm:items-center sm:justify-center lg:justify-start sm:space-x-9">
              <li className="flex flex-col items-center">
                <span className="w-12 h-12 rounded-lg bg-weDoNumber inline-block mb-2"></span>
                <strong className="font-semibold text-white text-4xl sm:text-5xl leading-numberWeDo mb-2">
                  {CounterOn && (
                    <CountUp start={0} end={10} duration={1} delay={0} />
                  )}
                  K
                </strong>
                <p className="font-normal text-sm sm:text-base leading-6 text-white">
                  Client Served
                </p>
              </li>
              <li className="flex flex-col items-center">
                <span className="w-12 h-12 rounded-lg bg-weDoNumber inline-block mb-2"></span>
                <strong className="font-semibold text-white text-4xl sm:text-5xl leading-numberWeDo mb-2">
                  {CounterOn && (
                    <CountUp start={0} end={23} duration={1} delay={0} />
                  )}
                  K
                </strong>
                <p className="font-normal text-sm sm:text-base leading-6 text-white">
                  Vehicle shipped
                </p>
              </li>
              <li className="flex flex-col items-center">
                <span className="w-12 h-12 rounded-lg bg-weDoNumber inline-block mb-2"></span>
                <strong className="font-semibold text-white text-4xl sm:text-5xl leading-numberWeDo mb-2">
                  {CounterOn && (
                    <CountUp start={0} end={96} duration={1} delay={0} />
                  )}
                  %
                </strong>
                <p className="font-normal text-sm sm:text-base leading-6 text-white">
                  Satisfied customer
                </p>
              </li>
              <li className="flex flex-col items-center">
                <span className="w-12 h-12 rounded-lg bg-weDoNumber inline-block mb-2"></span>
                <strong className="font-semibold text-white text-4xl sm:text-5xl leading-numberWeDo mb-2">
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
