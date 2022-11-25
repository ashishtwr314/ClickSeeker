import React from "react";
import { CardDetails } from "./Offerings";

function WebsiteAnalytics() {
  return (
    <div className="bg-[#2E5F86] text-white py-7 px-4 -mt-1 lg:flex lg:flex-row-reverse lg:px-32 items-center ">
      <div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/assets/radial-chart.png"}
            alt="animal-whale"
            className="sm:mx-auto md:mx-auto "
          />
        </div>
      </div>
      <div className="mt-24 flex-1 md:w-[80%] md:mx-auto">
        <div className=""></div>
        <div>
          <CardDetails />
        </div>
      </div>
    </div>
  );
}

export default WebsiteAnalytics;
