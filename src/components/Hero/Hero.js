import React from "react";
import Button from "../../UtilityComponents/Button";
import { red } from "../../utils";
import Navbar from "../Navbar/Navbar";

function Hero() {
  return (
    <div className="py-7 px-4 hero lg:px-32 2xl:bg-cover 2xl:bg-[center_-11rem] ">
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
          <div className="flex items-center space-x-2">
            <img
              src={
                process.env.PUBLIC_URL + "/assets/click-seeker-large-logo.png"
              }
              alt="logo"
            />
            <img
              src={
                process.env.PUBLIC_URL + "/assets/click-seeker-large-text.png"
              }
              alt="logo"
            />
          </div>
        </div>
        <div>
          <Navbar />
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
