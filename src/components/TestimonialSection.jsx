import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: 'Morbi id varius nisi. Curabitur vel sodales quam, vel condimentum lorem. Proin eu urna sit amet augue scelerisque mollis et vel neque ultrices massa sapien, nec rhoncus.',
      name: 'Shahzaib Khan',
      role: 'Dr Ayesha Client',
      image: '/images/client-1.jpg'
    },
    {
      id: 2,
      quote: 'Morbi id varius nisi. Curabitur vel sodales quam, vel condimentum lorem. Proin eu urna sit amet augue scelerisque mollis et vel neque ultrices massa sapien, nec rhoncus.',
      name: 'Shahzaib Khan',
      role: 'Dr Ayesha Client',
      image: '/images/client-2.jpg'
    },
    {
      id: 3,
      quote: 'Morbi id varius nisi. Curabitur vel sodales quam, vel condimentum lorem. Proin eu urna sit amet augue scelerisque mollis et vel neque ultrices massa sapien, nec rhoncus.',
      name: 'Shahzaib Khan',
      role: 'Dr Ayesha Client',
      image: '/images/client-3.jpg'
    },
    {
      id: 4,
      quote: 'Morbi id varius nisi. Curabitur vel sodales quam, vel condimentum lorem. Proin eu urna sit amet augue scelerisque mollis et vel neque ultrices massa sapien, nec rhoncus.',
      name: 'Shahzaib Khan',
      role: 'Dr Ayesha Client',
      image: '/images/client-4.jpg'
    },
    {
      id: 5,
      quote: 'Morbi id varius nisi. Curabitur vel sodales quam, vel condimentum lorem. Proin eu urna sit amet augue scelerisque mollis et vel neque ultrices massa sapien, nec rhoncus.',
      name: 'Shahzaib Khan',
      role: 'Dr Ayesha Client',
      image: '/images/client-5.jpg'
    },
    {
      id: 6,
      quote: 'Morbi id varius nisi. Curabitur vel sodales quam, vel condimentum lorem. Proin eu urna sit amet augue scelerisque mollis et vel neque ultrices massa sapien, nec rhoncus.',
      name: 'Shahzaib Khan',
      role: 'Dr Ayesha Client',
      image: '/images/client-6.jpg'
    }
  ];

  return (
    <section className="section-padding bg-brand-primary-50">
      <div className="mx-auto">
        
        {/* Section Header */}
        <h2 className="section-heading text-center mt-8 mb-16">
          honest reviews from<br />our clients
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className=" border border-brand-primary-950 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg 
                  width="48" 
                  height="48" 
                  viewBox="0 0 48 48" 
                  fill="none" 
                  className="text-brand-primary-950"
                >
                  <path 
                    d="M12 28C12 24.6863 14.6863 22 18 22C21.3137 22 24 24.6863 24 28C24 31.3137 21.3137 34 18 34C14.6863 34 12 31.3137 12 28ZM18 22C18 17 21 14 26 14V18C23 18 22 19 22 22H18Z" 
                    fill="currentColor"
                  />
                  <path 
                    d="M26 28C26 24.6863 28.6863 22 32 22C35.3137 22 38 24.6863 38 28C38 31.3137 35.3137 34 32 34C28.6863 34 26 31.3137 26 28ZM32 22C32 17 35 14 40 14V18C37 18 36 19 36 22H32Z" 
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8">
                {testimonial.quote}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-secondary-700 text-brand-primary-950 text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
