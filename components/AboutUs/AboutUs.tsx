import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-between">
          <div className="w-[48%] ">
            <h2 className="font-semibold text-xl sm:text-3xl  md:text-aboutTitle md:leading-wedoTitile mb-2 md:mb-4">
              About <span className="text-orange-main">Us</span>
            </h2>
            <p className="font-light text-[11px] md:text-base md:leading-aboutText text-black-dark mb-5 md:mb-9">
              Optimum Auto Transport is a vehicle shipping company in the USA.
              We make sure that our professional drivers serve customers with
              very high quality. Our priorities are putting customers’
              satisfaction first place.
            </p>
            <Image
              className="w-full"
              src={"/Images/aboutUsImgs/bus.png"}
              width={500}
              height={500}
              alt="Site bus img"
            />
          </div>
          <div className="w-[48%]  flex flex-col-reverse">
            <div className="flex-col-reverse">
              <h2 className="font-semibold text-xl sm:text-3xl  md:text-aboutTitle md:leading-wedoTitile mb-2 md:mb-4">
                Our <span className="text-orange-main">Mission</span>
              </h2>
              <p className="font-light text-[11px] md:text-base md:leading-aboutText text-black-dark">
                Our Mission is to help people to ship their cars from state to
                state SAFE, FAST, and AFFORDABLE way. We make sure your vehicle
                will be picked up on time and delivered on time.
              </p>
            </div>
            <Image
              className="w-full mb-5 md:mb-12"
              src={"/Images/aboutUsImgs/misson.png"}
              width={500}
              height={500}
              alt="Site bus img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutUs;
