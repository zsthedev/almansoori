import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-brand-primary-950 text-white">
      <div className="section-padding">
        <div className="mx-auto">
          
          {/* Top Section - Logo, Tagline & Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-white/20">
            
            {/* Left Side - Logo & Tagline */}
            <div className="space-y-6">
              {/* Logo */}
              <Link to="/" className="flex items-center w-fit">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src="/images/logo_gradient.svg" alt="" className='mb-2'/>
                </div>
                <h3 className="font-primary text-2xl md:text-3xl text-white">almansoori</h3>
              </Link>

              <p className="text-white/90 text-sm">
                Copyright © 2025 Amansoor Medical
              </p>

              {/* Tagline */}
              <p className="text-white text-xl md:text-2xl lg:text-3xl font-secondary-500 max-w-md leading-relaxed pt-8">
                In the journey of life, mental health is your compass.
              </p>
            </div>

            {/* Right Side - Newsletter */}
            <div className="bg-[#582607] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h4 className="font-primary text-2xl md:text-3xl text-white mb-6">
                  subscribe to our newsletter
                </h4>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-2 border-white/30 rounded-full px-6 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-brand-primary-300 transition-colors"
                    required
                  />
                  <button type="submit" className="primary-btn">
                    <span>Submit Now</span>
                  </button>
                </form>
              </div>

              {/* Newsletter Image */}
              <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src="/images/newsteller.png"
                  alt="Newsletter"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            
            {/* Explore */}
            <div>
              <h5 className="font-secondary-700 text-lg mb-6 text-white">Explore</h5>
              <ul className="space-y-3">
                <li><Link to="/" className="text-white/70 hover:text-brand-primary-300 transition-colors text-sm">Home</Link></li>
                <li><Link to="/about" className="text-white/70 hover:text-brand-primary-300 transition-colors text-sm">About</Link></li>
                <li><Link to="/contact" className="text-white/70 hover:text-brand-primary-300 transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="font-secondary-700 text-lg mb-6 text-white">Contact</h5>
              <ul className="space-y-3">
                <li><Link to="/location" className="text-white/70 hover:text-brand-primary-300 transition-colors text-sm">Location Goes Here</Link></li>
                <li><Link to="/contact" className="text-white/70 hover:text-brand-primary-300 transition-colors text-sm">Phone No</Link></li>
                <li><Link to="/contact" className="text-white/70 hover:text-brand-primary-300 transition-colors text-sm">Email</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h5 className="font-secondary-700 text-lg mb-6 text-white">Services</h5>
              <ul className="space-y-3">
                <li><Link to="/services/1" className="text-white/70 hover:text-brand-primary-300 transition-colors text-sm">Service 1</Link></li>
                <li><Link to="/services/2" className="text-white/70 hover:text-brand-primary-300 transition-colors text-sm">Service 2</Link></li>
                <li><Link to="/services/3" className="text-white/70 hover:text-brand-primary-300 transition-colors text-sm">Service 3</Link></li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h5 className="font-secondary-700 text-lg mb-6 text-white">Socials</h5>
              <ul className="space-y-3">
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-primary-300 transition-colors text-sm">Facebook</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-primary-300 transition-colors text-sm">Twitter</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-primary-300 transition-colors text-sm">Instagram</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              Copyright © 2025 Amansoor Medical
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-white/70 hover:text-brand-primary-300 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/70 hover:text-brand-primary-300 transition-colors text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
