import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import OurServices from "../OurServices/OurServices";
import Wedo from "../Wedo/Wedo";
import React from 'react'

import FormikContainer from '../BaseComponents/FormInput/FormikContainer'

import Hero from '../Hero/Hero'

import OurServices from '../OurServices/OurServices'

function Main() {
  return (
    <main>

      <FormikContainer />
        {/* <OurServices/> */}

      <Hero />
      <OurServices />
      <Wedo />
      <AboutUs />

    </main>
  );
}

export default Main;
