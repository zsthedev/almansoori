import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-linear-to-t from-brand-primary-300 to-brand-primary relative">
      <div className="w-1/2 h-[600px] absolute bottom-0 left-[50%] right-[50%] translate-x-[-50%] flex items-end justify-center">
      <img className="w-full h-full object-center object-cover" src="/images/doctor.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
