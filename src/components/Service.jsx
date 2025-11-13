import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Service = ({ icon: Icon, title, desc, slug, hoverColor }) => {

  console.log(hoverColor)
  return (
    <Link
      to={`/services/${slug}`}
      className={`w-full p-4 min-h-[150px] flex flex-col lg:flex-row lg:justify-between gap-4 lg:items-center border-b border-brand-primary-950 hover:rounded-lg hover:border-none hover:${hoverColor} duration-300`}
    >
      <div className="flex items-center gap-2">
        <Icon className="mb-2 text-2xl text-brand-primary" />
        <span className="font-primary text-2xl text-brand-primary-950">
          {title}
        </span>
      </div>
      <p className="lg:w-[50%]">{desc}</p>

      <Link
        to={`/services/${slug}`}
        className="w-12 h-12 hidden  bg-white rounded-full md:flex items-center justify-center"
      >
        <FaArrowRight className="-rotate-45" />
      </Link>
    </Link>
  );
};

export default Service;
