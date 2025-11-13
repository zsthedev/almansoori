import React from "react";
import { headerMenu } from "../data/menu";
import { Link, useLocation } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
const Header = () => {
  const location = useLocation();
  return (
    <header className="w-full flex items-center section-padding py-2! fixed top-0 left-0 z-50 bg-brand-primary justify-between lg:gap-4">
      <div className="flex items-center gap-2 flex-1">
        <img src="/images/logo.svg" alt="" />
        <span className="font-primary text-brand-primary-950 text-lg leading-5 mt-2">
          Almansoori
        </span>
      </div>

      <div className="flex-1 items-center gap-1 justify-center hidden lg:flex">
        {headerMenu.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={`primary-btn ${
              item.link == location.pathname ? "bg-brand-primary-200!" : ""
            }`}
          >
            <span className="">{item.name}</span>
          </Link>
        ))}
      </div>

      <div className="flex items-center flex-1 justify-end">
        <Link className="primary-btn md:px-8! py-3!">
          <span className="font-medium!">Book Appointment</span>
        </Link>

        <div className="hidden md:flex w-[42px] h-[42px] rounded-full primary-overlay  items-center justify-center">
          <IoArrowForwardOutline className="text-lg text-shadow-brand-primary-950 -rotate-45" />
        </div>
      </div>
    </header>
  );
};

export default Header;
