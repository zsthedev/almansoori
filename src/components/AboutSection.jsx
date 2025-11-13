import React from "react";

const AboutSection = () => {
  return (
    <section className="section-padding bg-white mt-35">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            {/* Title */}
            <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl text-brand-primary-950 leading-tight capitalize">
              Meet Doctor Ayesha
            </h2>

            {/* Paragraph 1 */}
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            {/* Paragraph 3 */}
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="bg-brand-primary-300 rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src="/images/doctor-with-patient.jpg"
                alt="Doctor consultation"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
