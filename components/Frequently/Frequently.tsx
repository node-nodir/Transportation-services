import React, { useState } from "react";
import DropDownFre from "../BaseComponents/DropDownFre/DropDownFre";

function Frequently() {
  return (
    <section>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-bold text-aboutTitle mb-4">
            <span className="text-orange-main">Frequently</span> Asked Questions
          </h2>
          <p className="font-normal text-base">
            Need help? Here are the top questions asked by our Subscribers
          </p>
        </div>
        <ul className="max-w-738 mx-auto">
          <DropDownFre
            name="Is my vehicle insured during transport?"
            text="Yes, you can put your luggage inside your car up to 100lbs in a box or
          a single piece of luggage that will be in the trunk of the car during
          transport for free, for each other 100lbs will be subject to the extra
          charge by the carrier."
          />
          <DropDownFre
            name="Is my vehicle insured during transport?"
            text="Yes, you can put your luggage inside your car up to 100lbs in a box or
          a single piece of luggage that will be in the trunk of the car during
          transport for free, for each other 100lbs will be subject to the extra
          charge by the carrier."
          />
          <DropDownFre
            name="Is my vehicle insured during transport?"
            text="Yes, you can put your luggage inside your car up to 100lbs in a box or
          a single piece of luggage that will be in the trunk of the car during
          transport for free, for each other 100lbs will be subject to the extra
          charge by the carrier."
          />
          <DropDownFre
            name="Is my vehicle insured during transport?"
            text="Yes, you can put your luggage inside your car up to 100lbs in a box or
          a single piece of luggage that will be in the trunk of the car during
          transport for free, for each other 100lbs will be subject to the extra
          charge by the carrier."
          />
        </ul>
      </div>
    </section>
  );
}

export default Frequently;
