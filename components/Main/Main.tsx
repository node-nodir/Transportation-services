import React from "react";
import Hero from '../Hero/Hero'
import Wedo from "../Wedo/Wedo";
import AboutUs from "../AboutUs/AboutUs";
import OurServices from "../OurServices/OurServices";
import FormikContainer from '../BaseComponents/FormInput/FormikContainer'

function Main() {
  return (
    <main>
      <FormikContainer />
      <Hero />
      <OurServices />
      <Wedo />
      <AboutUs />
    </main>
  );
}

export default Main;
