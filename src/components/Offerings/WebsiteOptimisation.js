import React from "react";
import { CardDetails } from "./Offerings";

function WebsiteOptimization() {
  return (
    <div className="bg-[#233454] text-white py-7 px-4  lg:flex lg:flex-row-reverse lg:px-32 items-center ">
      <div className="flex-1 ">
        <div>
          <img
            src="/assets/animal.png"
            alt="animal-whale"
            className="md:mx-auto"
          />
        </div>
      </div>
      <div className="flex-1 md:w-[80%] md:mx-auto">
        <div>
          <CardDetails />
        </div>
      </div>
    </div>
  );
}

export default WebsiteOptimization;
