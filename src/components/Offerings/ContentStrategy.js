import React from "react";
import { CardDetails } from "./Offerings";

function ContentStrategy() {
  return (
    <div className="bg-[#527A9A] text-white py-7 px-4 lg:flex lg:flex-row-reverse lg:px-32 items-center ">
      <div className="flex-1 md:w-[80%] md:mx-auto">
        <div>
          <CardDetails />
        </div>
      </div>
      <div className="flex-1 flex justify-end -mt-40 -mb-12 lg:justify-start lg:mt-0">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/assets/light-tower.png"}
            alt="animal-whale"
          />
        </div>
      </div>
    </div>
  );
}

export default ContentStrategy;
