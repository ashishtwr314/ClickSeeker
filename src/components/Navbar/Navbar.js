import React, { useState } from "react";
import Button from "../../UtilityComponents/Button";

const navItems = [
  {
    label: "Home",
    link: "/home",
  },
  {
    label: "About",
    link: "/home",
  },
  {
    label: "Services",
    link: "/home",
  },
  {
    label: "Contact",
    link: "/home",
  },
  {
    label: "Contact Us",
    link: "/home",
    isButton: true,
  },
];
function Navbar() {
  const [showModalNav, setShowModalNav] = useState(false);
  const handleModalClick = (e) => {
    if (e.target.classList.contains("link")) return;
    setShowModalNav(false);
  };
  return (
    <div className="">
      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setShowModalNav(true)}
      >
        <img src={process.env.PUBLIC_URL + "/assets/menu.png"} alt="menu" />
      </div>

      <div className="hidden xs:hidden sm:hidden md:hidden  lg:flex">
        <div className="flex items-center space-x-7">
          {navItems.map((item) =>
            item.isButton ? (
              <Button className={"bg-[#233454] py-3 px-6"}>{item.label}</Button>
            ) : (
              <div>
                <a className="link" href={"#"}>
                  {item.label}
                </a>
              </div>
            )
          )}
        </div>
      </div>
      {showModalNav && (
        <div
          onClick={(e) => handleModalClick(e)}
          className="sm:flex lg:hidden fixed left-0 top-0  w-full h-full bg-[rgba(0,0,0,0.8)] text-white flex items-center justify-center "
        >
          <div className="text-center space-y-2">
            {navItems.map((item) => (
              <div>
                <a className="link" href={"#"}>
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
