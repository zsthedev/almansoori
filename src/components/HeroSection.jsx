import React from 'react';

const HeroSection = () => {
  const benefits = [
    'Get Tailored Advice from Professionals',
    'Get Tailored Advice from Professionals',
    'Get Tailored Advice from Professionals',
    'Get Tailored Advice from Professionals'
  ];

  return (
    <section className=" bg-gray-50">
      <div className="mx-auto">
        <div className="relative overflow-hidden h-[720px]">
          
          {/* Background Image Container */}
          <div className="absolute inset-0">
            <img 
              src="/images/girl_smiling.png" 
              alt="Happy person" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Overlay */}
          <div className="relative h-full flex items-center p-6 md:p-12">
            
            {/* Dark Content Box */}
            <div className="bg-brand-primary-950 rounded-3xl p-8 md:p-12 max-w-xl">
              
              <h1 className="font-primary text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-6">
                we are here to serve your needs
              </h1>

              <p className="text-white/90 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit 
                tellus, luctus nec ullamcorper mattis pulvinar leo.
              </p>

              <ul className="space-y-3 mb-10">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-white">
                    <span className="text-brand-primary-300 text-xl flex-shrink-0">•</span>
                    <span className="text-sm md:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>

              <button className="primary-btn">
                <span>Get Started Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
