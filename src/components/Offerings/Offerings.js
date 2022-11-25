import classNames from "classnames";
import React from "react";
import Button from "../../UtilityComponents/Button";
import ContentStrategy from "./ContentStrategy";
import WebsiteAnalytics from "./WebsiteAnalytics";
import WebsiteOptimization from "./WebsiteOptimisation";

function Offerings() {
  return (
    <div>
      <div className="text-white bg-[#233454]  lg:px-32 px-4">
        <p className="mb-0.5 text-center">Title</p>
        <h2 className="text-center">What We Are Offering</h2>
        <div className="mt-10 md:flex md:flex-wrap md:justify-center  lg:items-start  lg:flex  lg:space-x-4  lg:flex-nowrap">
          <Card
            icon={"/assets/seo.png"}
            title={"Website Optimization"}
            description={
              "Building a personalized On-site Optimization strategy to improve sales funnel & increase customer conversion"
            }
          />
          <Card
            icon={"/assets/seo.png"}
            title={"Website Optimization"}
            description={
              "Building a personalized On-site Optimization strategy to improve sales funnel & increase customer conversion"
            }
            className="sm:mt-8 md:mt-8 lg:mt-16 mt-4"
          />
          <Card
            icon={"/assets/seo.png"}
            title={"Website Optimization"}
            description={
              "Building a personalized On-site Optimization strategy to improve sales funnel & increase customer conversion"
            }
            className="sm:mt-8 md:mt-8  lg:mt-32 mt-4"
          />
        </div>
      </div>
      <WebsiteOptimization />
      <div className="-mt-32">
        <div className="aquamarine-path bg-[#233454]  "></div>
      </div>
      <ContentStrategy />
      <div className="md:h-36">
        <div className="wave-path bg-[#527A9A]  "></div>
      </div>
      <WebsiteAnalytics />
    </div>
  );
}

function Card({ icon, title, description, link, className }) {
  return (
    <div className={classNames("card rounded-2xl px-8 py-10", className)}>
      <div>
        <img className="w-12 h-12" src={icon} alt={title} />
      </div>
      <div className="mt-8 mb-4">
        <h3 className="">Webiste Optimisation</h3>
      </div>
      <div>
        <p>
          Building a personalized On-site Optimization strategy to improve sales
          funnel & increase customer conversion
        </p>
      </div>
      <div className="mt-16 mb-9">
        <Button className={"rounded-xl px-4 py-4"}>
          <img src="/assets/arrow-right.png" alt="arrow-icon" />
        </Button>
      </div>
    </div>
  );
}

export function CardDetails({ title, heading, description }) {
  return (
    <div className="">
      <p>Title</p>
      <div className="mt-0.5">
        <h3 className="">Webiste Optimisation</h3>
      </div>
      <div className="mt-3  mb-4">
        <p>
          Optimizing your website is critical to long-term growth. In the battle
          for visitors and conversions, we are your ultimate solution for
          analyzing, strategizing, and improving your websites effectiveness.
        </p>
      </div>
      <div>
        <ul className="list-disc px-4">
          <li>
            <p>UX Audit & Design</p>
          </li>
          <li>
            <p>Mobile Usabilty</p>
          </li>
          <li>
            <p>Page Speed</p>
          </li>
          <li>
            <p>Search Engine Optimization (SEO)</p>
          </li>
          <li>
            <p>Conversion Rate Optimization (CRO)</p>
          </li>
          <li>
            <p>On-page and technical SEO</p>
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <Button>Learn More</Button>
      </div>
    </div>
  );
}
export default Offerings;
