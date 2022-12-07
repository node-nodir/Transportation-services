
import React from 'react'
import OurServices from '../OurServices/OurServices'
import React from "react";
import Hero from "../Hero/Hero";
import Wedo from "../Wedo/Wedo";
import AboutUs from "../AboutUs/AboutUs";
import OurServices from "../OurServices/OurServices";
import Shipping from "../Shipping/Shipping";
import Frequently from "../Frequently/Frequently";

function Main() {
  return (
    <main>
      <Hero />
      <OurServices />
      <Wedo />
      <AboutUs />
      <Shipping />
      <Frequently />
    </main>
  );
}

export default Main;
