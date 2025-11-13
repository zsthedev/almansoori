import React from "react";

const TeamSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading mb-4">meet our team</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Our dedicated team of professionals is committed to providing
            exceptional care and support for your health and wellness journey.
          </p>
        </div>

        {/* Team Image with Overlay Content */}
        <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[600px] shadow-2xl">
          {/* Team Image */}
          <img
            src="/images/team-photo.jpg"
            alt="Our team"
            className="w-full h-full object-cover object-center"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-950/90 via-brand-primary-950/50 to-transparent"></div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12 text-white">
            <div className="max-w-3xl">
              <h3 className="font-primary text-3xl md:text-4xl lg:text-5xl mb-4">
                passionate about your health
              </h3>
              <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed mb-6">
                Our experienced team brings together diverse expertise and a
                shared commitment to delivering personalized, compassionate care
                to every patient.
              </p>
              <button className="primary-btn">
                <span>Meet the Team</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats or Team Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow">
            <div className="font-primary text-3xl md:text-4xl text-brand-primary-300 mb-2">
              50+
            </div>
            <p className="text-gray-700 text-sm md:text-base font-secondary-600">
              Team Members
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow">
            <div className="font-primary text-3xl md:text-4xl text-brand-primary-300 mb-2">
              15+
            </div>
            <p className="text-gray-700 text-sm md:text-base font-secondary-600">
              Years Experience
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow">
            <div className="font-primary text-3xl md:text-4xl text-brand-primary-300 mb-2">
              10K+
            </div>
            <p className="text-gray-700 text-sm md:text-base font-secondary-600">
              Happy Patients
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow">
            <div className="font-primary text-3xl md:text-4xl text-brand-primary-300 mb-2">
              24/7
            </div>
            <p className="text-gray-700 text-sm md:text-base font-secondary-600">
              Available Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
