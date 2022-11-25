import React from "react";
import Button from "../../UtilityComponents/Button";
import { red } from "../../utils";

function Hero() {
  return (
    <div className="py-7 px-4 hero lg:px-32">
      <Header />
      <HeaderContent />
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div>
            <img src="/assets/click-seeker-large.png" alt="logo" />
          </div>
        </div>
        <div>
          <div>
            <img src="/assets/menu.png" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

function HeaderContent() {
  return (
    <div className="mt-[150px] mb-[120px] max-w-lg">
      <h4 className={`text-base text-[#D4494C]`}>Improve Online Preformance</h4>
      <h1 className="mt-4 mb-6 text-white ">
        The Ultimate Digital Growth Strategy
      </h1>
      <p className="text-white ">
        Personalized Service packages for any online business
      </p>
      <Button className={"mt-6 rounded hero-btn"}>Get Started</Button>
    </div>
  );
}

export default Hero;
