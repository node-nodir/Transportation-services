import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function OurServices() {
  const allList: {
    id: number;
    name: string;
    text: string;
    leanMore: string;
    src: string;
    fullText: string;
    carHero: string;
    carContentImg: string;
  }[] = [
      {
        id: 1,
        name: "Car Shipments",
        text: "One of the most widely-known segment of the freight industry is Auto Transport. It offers car shipping services to individuals and organizations who require a car to be transferred from one place to another.",
        leanMore: "Подробнее",
        src: "/Images/ServicesImg/car.jpg",
        carHero: "/Images/singleImgs/car-hero.jpg",
        carContentImg: "/Images/singleImgs/car-hero2.jpg",
        fullText:
          "One of the most widely-known segment of the freight industry is Auto Transport. It offers car shipping services to individuals and organizations who require a car to be transferred from one place to another. This could be because of employment reasons, seasonal travel, or the purchase of a new car.Are you having similar situations and need to ship your car? You are on the right Place; Optimum Auto Shipping offers you all types of auto transport services with full coverage of insurance and Door to Door delivery.Optimum Auto Shipping is specialized in transporting Sedans, SUVs, Pickup trucks, Vans and other type of vehicles.Ship your car with PROs anytime and anywhere.",
      },
      {
        id: 2,
        name: "Motorcycle shipments",
        text: "Motorcycle shipments are as popular as regular vehicles. People might need motorcycle shipments due to some reasons like moving to another state, buying or selling purposes, and the most popular one “Vintage motorcycle shows”.",
        leanMore: "Подробнее",
        src: "/Images/ServicesImg/moto.jpg",
        carHero: "/Images/singleImgs/moto-hero.jpg",
        carContentImg: "/Images/singleImgs/moto-hero2.jpg",
        fullText:
          "Motorcycle shipments are as popular as regular vehicles. People might need motorcycle shipments due to some reasons like moving to another state, buying or selling purposes, and the most popular one “Vintage motorcycle shows”.How to Ship a Motorcycle | Tips & Solutions It is very important to choose a reliable shipping company for your motorcycle shipment. After choosing a company you need to clarify whether you want to ship your motorcycle with an open carrier or with an enclosed one. Usually, people choose enclosed shipments for their motorcycle shipments because it gives protection to your bike from the elements and from thieves. Open carriers are also fine for those who have a small budget. Optimum Auto Shipping offers both enclosed and open carriers for your motorcycle shipments.Ship your motorcycle with PROs anytime and anywhere.",
      },
      {
        id: 3,
        name: "Heavy Equipment",
        text: "Shipping Heavy equipment is not always an easy process to do. Heavy machinery plays an important role in your business.",
        leanMore: "Подробнее",
        src: "/Images/ServicesImg/truc.jpg",
        carHero: "/Images/singleImgs/heavy-hero.jpg",
        carContentImg: "/Images/singleImgs/heavy-hero2.jpg",
        fullText:
          "Shipping Heavy equipment is not always an easy process to do. Heavy machinery plays an important role in your business. So that’s why you will need a professional heavy equipment transporter to ship your machinery. Heavy equipment is a wide term that refers to a number of devices used in several industries. This equipment is defined by both its weight and size. Heavy equipment can be Tractors, Forklifts, Cranes, Industrial equipment, and others. Measurements and the weight of the heavy equipment are one of the crucial aspects of shipping process. Dimensions impact the shipping price dramaticall ",
      },
      {
        id: 4,
        name: "HI / AK Shipments",
        text: "Therefore, it is obvious that you should bring a car with you on your trip to Hawaii. Unavoidably, you may rent a car, use ride-sharing services, or take the dreaded public transportation.",
        leanMore: "Подробнее",
        src: "/Images/ServicesImg/beach.jpg",
        carHero: "/Images/singleImgs/hawii-hero.jpg",
        carContentImg: "",
        fullText:
          "It can be difficult to locate a firm that offers car transportation to Alaska because several auto shippers only cover the lower 48 states. We'll first go over the procedure for transporting a car to Alaska in order to make things clearer before moving on to typical charges andThe challenging winter weather in Alaska often makes it more difficult to ship cars across the state, causing delays and additional expenditures. While the summers are often mild and rainy, the winters are chilly and covered in snow. Be ready for road conditions to cause transit times to be extended if you intend to send an automobile to Alaska during the winter. Although the weather can have a significant impact on shipping cars across Alaska, this varies by region. For instance, Juneau and most of southeast Alaska have milder weather than the rest of the state, which means that transportation problems are far less common there. However, with average lows in January reaching minus 17 degrees Fahrenheit, Fairbanks is the coldest major city in theOptimum Auto Shipping offers professional Alaska Car shipping from any state to Alaska. Our professional drivers and vessels will guarantee you safe and fastShip your vehicle with PROs anytime and anywhere.",
      },
      {
        id: 5,
        name: "Boat Shipments",
        text: "You might have purchased a boat after making the trip to a far-off boat show, read about a great offer on a far-off yacht, or purchased a boat directly from the manufacturer.",
        leanMore: "Подробнее",
        src: "/Images/ServicesImg/boat.jpg",
        carHero: "/Images/singleImgs/boat-hero.jpg",
        carContentImg: "/Images/singleImgs/boat-hero2.jpg",
        fullText:
          "You might have purchased a boat after making the trip to a far-off boat show, read about a great offer on a far-off yacht, or purchased a boat directly from the manufacturer. There's a strong probability that in either of these scenarios, you'll now need to make plans for shipping your boat to your house or marina. Although it might seem like a big deal, long-distance boat deliveries are actually extremely routine and simple to arrange. When shipping a boat, the dimensions play a very important role. Because the boat can be on its own trailer or without a trailer. Boats with their own trailer give flexibility to the drivers when shipping it Optimum Auto Shipping offers professional Boat shipping from any state. Our professional drivers will guarantee you a safe and fast shipment Ship your Boat with PROs anytime and anywhere.",
      },
      {
        id: 6,
        name: "Door to Door delivery",
        text: "Optimum Auto Shipping offers Door to Door delivery to all the services we offer to our valuable customers. Regular cars and even Heavy equipment shipping will be delivery to your front door.",
        leanMore: "Подробнее",
        src: "/Images/ServicesImg/man.jpg",
        carHero: "/Images/singleImgs/man-hero.jpg",
        carContentImg: "/Images/singleImgs/man-hero2.jpg",
        fullText:
          "Optimum Auto Shipping offers Door to Door delivery to all the services we offer to our valuable customers. Regular cars and even Heavy equipment shipping will be delivery to your front Your vehicle will be fully insured bumper to bumper by carriers.   Ship your car with PROs anytime and anywhere..",
      },
    ];
  useEffect(() => {
    window.localStorage.setItem("elList", JSON.stringify(allList));
  });
  return (
    <section
      id="our-services"
      className="pt-20 pb-100 md:pt-118 services md:pb-173"
    >
      <div className="container">
        <div className=" text-center mb-20 mx-auto">
          <h2 className="font-bold text-28 sm:text-4xl mb-2">Our Services</h2>
          <p className="font-normal text-sm text-black-servicesTextColor">
            Optimum Auto Shipping is specialized in shipping different type of
            ...
          </p>
        </div>
        <ul className="hidden sm:flex sm:items-center sm:flex-wrap sm:justify-between">
          {allList.map((item) => (
            <li
              key={item.id}
              className="w-330 h-450 lg:w-354 lg:h-458 mb-33 mx-auto md:mx-0 shadow-md list overflow-hidden cursor-pointer relative"
            >
              <img
                className="absolute services-img z-10"
                src={item.src}
                width={354}
                height={458}
                alt="img"
              />
              <div className="flex p-5 flex-col z-10 absolute bottom-0 space-y-5">
                <strong className="font-bold text-2xl text-white leading-7">
                  {item.name}
                </strong>
                <a
                  className="text-white pr-5 font-medium text-base cursor-pointer relative after:bg-learnMoreAfterImg after:absolute after:w-[13px]
                       after:h-[12px] after:top-0 after:bottom-0 after:my-auto after:ml-2  after:bg-no-repeat"
                  href="#link"
                >
                  Read more
                </a>
              </div>
              <div className="absolute z-20 rounded-b-xl item-content p-5 bg-white w-full right-0 left-0 mx-auto -bottom-full">
                <h2 className="font-bold text-2xl mb-2.5">{item.name}</h2>
                <p className="font-normal mb-5 text-sm leading-5 text-black-serModalText">
                  {item.text}
                </p>
                <Link
                  href={`/${item.id}`}
                  className="text-orange-main pr-5 font-medium text-base cursor-pointer relative after:bg-learnMoreModalImg after:absolute after:w-[13px]
                       after:h-[12px] after:top-0 after:bottom-0 after:my-auto after:ml-2  after:bg-no-repeat"
                >
                  Read more
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex sm:hidden">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            className="mySwiper"
          >
            {allList.map((item) => (
              <SwiperSlide key={item.id}>
                <li
                  key={item.id}
                  className="w-[321px] mb-33 shadow-md list cursor-pointer h-[448px] relative"
                >
                  <Image
                    className="absolute z-10"
                    src={item.src}
                    width={354}
                    height={458}
                    alt="img"
                  />
                  <div className="absolute z-20 rounded-b-xl p-5 bg-white w-full right-0 left-0 mx-auto bottom-0">
                    <h2 className="font-bold text-xl mb-2.5">{item.name}</h2>
                    <p className="font-normal mb-5 text-sm leading-5 text-black-serModalText">
                      {item.text}
                    </p>
                    <Link
                      href={`/${item.id}`}
                      className="text-orange-main pr-5 font-medium text-base cursor-pointer relative after:bg-learnMoreModalImg after:absolute after:w-[13px]
                       after:h-[12px] after:top-0 after:bottom-0 after:my-auto after:ml-2  after:bg-no-repeat"
                    >
                      Read more
                    </Link>
                  </div>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
