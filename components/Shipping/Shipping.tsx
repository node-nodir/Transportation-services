import React from "react";
import Image from "next/image";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import ButtonRead from "../BaseComponents/Buttons/ButtonRead";

function Shipping() {
  return (
    <section className="pt-70 pb-196 before:bg-shippingBeforeImg before:bg-no-repeat before:absolute before:left-0 before:bottom-0 before:w-[450px] before:h-[516px]  relative after:absolute after:w-450 after:h-112 after:bg-black-shippingAfter after:top-0 after:right-0">
      <div className="container">
        <div className="max-w-shippingTop text-center mx-auto mb-20">
          <h2 className="font-bold text-aboutTitle mb-4">
            Shipping <span className="text-orange-main">Method</span>
          </h2>
          <p className="font-normal text-base text-black-serModalText">
            Car transportation services can fall under several different
            categories depending on the shipping company employed to move the
            car. Vehicle transport services may use any number of transportation
            methods to get a vehicle from one point to another.
          </p>
        </div>
        <ul className="space-y-12">
          <li className="flex justify-between">
            <Image
              className="w-[49%]"
              src={"/Images/shippingImgs/train.png"}
              width={542}
              height={297}
              alt="train"
            />
            <div className="w-[49%] p-6">
              <h2 className="font-semibold text-2xl mb-4">Rail Transport</h2>
              <p className="font-normal text-base mb-5">
                Railway shipping companies focus on getting cars from one point
                to another using the vast interconnected rail network around the
                US. They are either shipped open-air or within freight
                containers. Its a pretty quick way of getting a car from one
                point to another, but the speed has its attached cost.
                Unfortunately, because of the complexities of rail transport,
                not every shipping company offers rail freight as an option.
              </p>
              <ButtonRead />
            </div>
          </li>
          <li className="flex justify-between flex-row-reverse">
            <div className="w-[49%] relative">
              <Image
                className="w-full"
                src={"/Images/shippingImgs/pupularBus.png"}
                width={542}
                height={297}
                alt="train"
              />
              <a
                className="absolute hover:bg-mostButtonHover duration-200 w-151 py-4 bg-orange-main text-center top-5 font-semibold text-base text-white"
                href="#link"
              >
                Most popular
              </a>
            </div>
            <div className="w-[49%] p-6">
              <h2 className="font-semibold text-2xl mb-4">Truck Transport</h2>
              <p className="font-normal text-base mb-5">
                One of the most well-known vehicle shipping services that youll
                find is ordinary truck transport. Its a basic way to transport a
                car and takes a little more time. However, the vehicle gets to
                its destination safe and sound. It’s also the most convenient
                method of moving a car between locations. Another advantage of a
                truck is that the truck can get right up to the final point
                before the owner gets the car.
              </p>
              <ButtonRead />
            </div>
          </li>
          <li className="flex justify-between">
            <Image
              className="w-[49%]"
              src={"/Images/shippingImgs/palane.png"}
              width={542}
              height={297}
              alt="train"
            />
            <div className="w-[49%] p-6">
              <h2 className="font-semibold text-2xl mb-4">Air Transport</h2>
              <p className="font-normal text-base mb-5">
                Another category of vehicle transport service is air transport.
                This is the fastest way to get a car from origin to destination,
                regardless of where in the US it is. On the other hand, air
                transport is much more expensive and may cost quite a lot,
                depending on where the car needs to be delivered. The safest way
                to move a car is by air, and there are many airports and
                airstrips across the state, so its simple to discover one with a
                landing strip close to you.
              </p>
              <ButtonRead />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Shipping;
