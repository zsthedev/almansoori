import React, { useState } from "react";

const TimelineSection = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineData = [
    {
      year: "2020",
      title: "The Beginning",
      image: "/images/timeline-2020.jpg",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. We started our journey with a vision to transform healthcare services and make them accessible to everyone.",
    },
    {
      year: "2021",
      title: "Expansion Phase",
      image: "/images/timeline-2021.jpg",
      story:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our team grew significantly, and we expanded our services to multiple locations, reaching thousands of new patients.",
    },
    {
      year: "2022",
      title: "Innovation Era",
      image: "/images/timeline-2022.jpg",
      story:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. We introduced cutting-edge technology and digital solutions that revolutionized patient care and experience.",
    },
    {
      year: "2023",
      title: "Global Recognition",
      image: "/images/timeline-2023.jpg",
      story:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. We achieved international recognition for our innovative approach and received multiple awards for excellence in healthcare.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className=" mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">our journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the milestones that shaped our story and commitment to
            excellence
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
          <div
            className="absolute top-1/2 left-0 h-1 bg-brand-primary-300 -translate-y-1/2 transition-all duration-500 ease-in-out hidden md:block"
            style={{
              width: `${(activeTimeline / (timelineData.length - 1)) * 100}%`,
            }}
          ></div>

          {/* Timeline Buttons */}
          <div className="grid grid-cols-2 md:flex md:justify-between gap-4 relative z-10">
            {timelineData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTimeline(index)}
                className={`flex flex-col items-center transition-all duration-300 group ${
                  activeTimeline === index ? "scale-110" : "scale-100"
                }`}
              >
                {/* Circle Indicator */}
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-4 flex items-center justify-center mb-3 transition-all duration-300 ${
                    activeTimeline === index
                      ? "bg-brand-primary-300 border-brand-primary-300 shadow-lg"
                      : "bg-white border-gray-300 group-hover:border-brand-primary-200"
                  }`}
                >
                  <span
                    className={`font-secondary-700 text-lg md:text-xl transition-colors ${
                      activeTimeline === index
                        ? "text-brand-primary-950"
                        : "text-gray-600"
                    }`}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Year Label */}
                <span
                  className={`font-secondary-600 text-sm md:text-base transition-colors ${
                    activeTimeline === index
                      ? "text-brand-primary-950"
                      : "text-gray-500"
                  }`}
                >
                  {item.year}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden group">
            <img
              src={timelineData[activeTimeline].image}
              alt={timelineData[activeTimeline].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-950/30 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Title */}
            <h3 className="font-primary text-3xl md:text-4xl lg:text-5xl text-brand-primary-950 leading-tight">
              {timelineData[activeTimeline].title}
            </h3>

            {/* Story */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {timelineData[activeTimeline].story}
            </p>

            {/* Optional CTA */}
            {/* <button className="primary-btn mt-4">
              <span>Learn More</span>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
