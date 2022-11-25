import React from "react";
import Button from "../../UtilityComponents/Button";

function Footer() {
  return (
    <>
      <div className="footer py-7 px-4  space-y-[40px] bg-[#233454] text-[#FFFFFFB2] lg:flex lg:items-start lg:space-y-0 lg:px-32 md:flex md:flex-wrap">
        <div className="md:flex-[50%] lg:flex-1">
          <div className="mb-7">
            <img src="/assets/click-seeker-small.png" alt="logo" />
          </div>
          <p className="max-w-[80%]">
            Lorem ipsum dolor sit amet consectetur. Morbi sit eu placerat
          </p>
        </div>

        <div className=" md:flex-[50%] lg:flex-1">
          <div className="mb-6">
            <h2 className="text-xl">Location</h2>
          </div>
          <p>Moon Street Light Avenue, 14/05 Jupiter, JP 80630</p>
          <p>E : info@yourdomain.com</p>
          <p>P : (68) 345 5902</p>
        </div>

        <div className=" md:flex-[50%] lg:flex-1">
          <div className="mb-6">
            <h2 className="text-xl">Quick Links</h2>
          </div>
          <ul>
            <li>
              <p>About us</p>
            </li>
            <li>
              <p>Contact us</p>
            </li>
            <li>
              <p>Projects</p>
            </li>
            <li>
              <p>Terms and Condition</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
          </ul>
        </div>

        <div className="md:flex-[50%] lg:flex-1">
          <div className="mb-6">
            <h2 className="text-xl">Subscribe</h2>
          </div>

          <p>
            Don't miss to subscribe to our new feeds, kindly fill the form
            below.
          </p>
          <div className="mb-4 mt-6">
            <input
              type={"text"}
              placeholder="Email Address"
              className="rounded bg-[#ffffff14] border border-[#eeeeee69] placeholder:text-sm outline-none text-sm p-3 w-full"
            />
          </div>
          <Button className={"py-2 px-6 rounded"}>Subscribe</Button>
        </div>
      </div>
      <SocialMedia />
    </>
  );
}

export default Footer;

function SocialMedia() {
  return (
    <div className="bg-[#14213A] p-7 text-[#FFFFFFCC] text-center md:flex md:flex-row-reverse md:items-center md:justify-between lg:px-32">
      <div className="inline-block mx-auto md:flex md:w-auto md:mx-0">
        <div className="flex space-x-7 md:space-x-0">
          <div class="">
            <SocialIcons
              img={"/assets/fb.png"}
              text="Facebook"
              alt={"fb-icon"}
            />
          </div>
          <div class="">
            <SocialIcons
              img={"/assets/twitter.png"}
              text="Twitter"
              alt={"tweet-cion"}
            />
          </div>
        </div>

        <div className="flex space-x-7 md:space-x-0">
          <div class="">
            <SocialIcons
              img={"/assets/pintrest.png"}
              text="Pinterest"
              alt={"pinterest-cion"}
            />
          </div>
          <div class="">
            <SocialIcons
              img={"/assets/Linkedin.png"}
              text="Linkedin"
              alt={"Linkedin-icon"}
            />
          </div>
        </div>
      </div>
      <p className="text-center mt-4 md:mt-0">
        @ Copyright reserved to Click Seeker
      </p>
    </div>
  );
}

function SocialIcons({ img, alt, text }) {
  return (
    <div className="flex items-center md:mx-2">
      <div className="">
        <img src={img} alt={alt} />
      </div>
      <div className="ml-3 md:ml-2">
        <p>{text}</p>
      </div>
    </div>
  );
}
