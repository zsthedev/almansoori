import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({
  title,
  breadcrumb = "Home",
  breadcrumbLink = "/",
  backgroundImage,
}) => {
  return (
    <div className="w-full h-[350px] md:h-[400px] bg-brand-primary flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="section-heading !font-secondary-600 !uppercase mb-4">
          {title}
        </h2>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 md:gap-3 text-brand-primary-950">
          <Link
            to={breadcrumbLink}
            className="font-secondary-500 text-sm md:text-base lg:text-lg hover:text-brand-primary-800 transition-colors"
          >
            {breadcrumb}
          </Link>
          <span className="text-lg md:text-xl">→</span>
          <span className="font-secondary-600 text-sm md:text-base lg:text-lg">
            {title}
          </span>
        </div>
      </div>

      {/* Background Image */}
      <div className="w-[90%] md:w-[85%] lg:w-[80%] h-[200px] md:h-[250px] absolute -bottom-20 md:-bottom-28 lg:-bottom-32 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
};

export default PageHeader;
