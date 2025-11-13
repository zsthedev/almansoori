import React from 'react';

const ProcessSection = () => {
  const processes = [
    {
      number: '01',
      title: 'initial consultation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'
    },
    {
      number: '02',
      title: 'scheduling & sessions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'
    },
    {
      number: '03',
      title: 'tailored',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="max-w-2xl mb-12">
          <h2 className="section-heading mb-6">
            process we follow
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            By adopting modern medical technology, we ensure high-quality care, 
            accurate assessments, and better patient experiences across all 
            healthcare services.
          </p>
          <button className="primary-btn">
            <span>Book Free Consultation</span>
          </button>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {processes.map((process, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Number Badge */}
              <div className="w-14 h-14 bg-brand-primary-950 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-secondary-700 text-lg">
                  {process.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-primary text-2xl md:text-3xl text-brand-primary-950 mb-4 capitalize">
                {process.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
