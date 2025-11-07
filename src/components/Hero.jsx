import React from "react";
import HeaderMarquee from "./HeaderMarquee";
import { avatars } from "../data/hero";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="w-full h-screen lg:max-h-[720px] bg-linear-to-t from-brand-primary-300 to-brand-primary relative">
      <div className="w-full lg:w-1/2 h-[70%] lg:h-[600px] absolute bottom-0 left-[50%] right-[50%] translate-x-[-50%] flex items-end justify-center z-10">
        <img
          className="w-full h-full object-top object-cover"
          src="/images/doctor.png"
          alt=""
        />
      </div>

      <div className="w-full h-full flex items-center relative justify-center">
        <HeaderMarquee />
      </div>

      <div className="absolute w-full h-12 bottom-30 z-20 hidden lg:flex px-8  items-center justify-between">
        <div>
          <div className="avatars flex items-center relative">
            {avatars.map((a, index) => (
              <div
                className={`w-16 h-16 rounded-full border-2 border-white overflow-hidden ${a.styles}`}
              >
                <img
                  src={a.url}
                  key={index}
                  className={`w-full h-full object-cover object-center `}
                />
              </div>
            ))}
          </div>

          <h4 className="text-7xl font-bold text-brand-primary-950 mt-2">
            200K+
          </h4>
          <p className="w-[300px] text-brand-primary-950">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="w-[300px] text-brand-primary-950">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor sed do{" "}
          </p>

          <div className="flex items-center">
            <Link className="primary-btn md:px-8! py-3! bg-brand-primary-200!">
              <span className="font-medium!">Book Appointment</span>
            </Link>

            <div className="hidden md:flex w-11 h-11 rounded-full primary-overlay  items-center justify-center bg-brand-primary-200!">
              <IoArrowForwardOutline className="text-lg text-shadow-brand-primary-950 -rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
