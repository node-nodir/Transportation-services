import { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import Wedo from "../Wedo/Wedo";
import AboutUs from "../AboutUs/AboutUs";
import Shipping from "../Shipping/Shipping";
import Frequently from "../Frequently/Frequently";
import GetTouch from "../GetTouch/GetTouch";
import OurServices from "../OurServices/OurServices";

function Main() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);
    if (isMobileDevice) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <main>
      <Hero />
      <OurServices mobile={mobile} />
      <Wedo />
      <AboutUs />
      <Shipping />
      <Frequently />
      {/* <GetTouch /> */}
    </main>
  );
}

export default Main;
