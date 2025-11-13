import React from "react";
import { Link } from "react-router-dom";
import Service from "./Service";
import { services } from "../data/services";

const Services = () => {
  return (
    <section className="w-full section-padding bg-brand-primary-100">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="section-heading">How we can help you</h4>
          <p className="mt-2">
            By adopting modern medical technology, we ensure high-quality care,
            accurate
          </p>
        </div>

        <Link className="primary-btn w-fit!" to={"/"}>
          <span>View All Services</span>
        </Link>
      </div>

      <div className="w-full flex flex-col gap-4 mt-8">
        {services.map((service, index) => (
          <Service
            key={index}
            title={service.title}
            slug={service.title}
            icon={service.icon}
            desc={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
