'use client';

import { useState, useEffect } from 'react';

export default function WhyUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: "Solid Engineering",
      description: "Built on reliable, well-tested technologies with clean and readable code."
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Team-Oriented",
      description: "Works well in collaborative environments with clear communication and shared goals."
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Security Awareness",
      description: "Applies essential security practices to protect data and users."
    },
    {
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Accessible by Design",
      description: "Considers usability and accessibility standards from the start."
    },
    {
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      title: "Clear Communication",
      description: "Ensures transparency, active listening, and clarity in every interaction."
    },
    {
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Scalable Solutions",
      description: "Focuses on creating systems that can evolve with growing needs."
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % features.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const getCardStyle = (index) => {
    const diff = (index - activeIndex + features.length) % features.length;
    
    if (diff === 0) {
      // Center card (active)
      return {
        transform: 'translateX(0) scale(1)',
        opacity: 1,
        zIndex: 30,
        filter: 'blur(0px)'
      };
    } else if (diff === 1 || diff === -5) {
      // Right card
      return {
        transform: 'translateX(85%) scale(0.75)',
        opacity: 0.5,
        zIndex: 10,
        filter: 'blur(2px)'
      };
    } else if (diff === features.length - 1 || diff === -1) {
      // Left card
      return {
        transform: 'translateX(-85%) scale(0.75)',
        opacity: 0.5,
        zIndex: 10,
        filter: 'blur(2px)'
      };
    } else {
      // Hidden cards
      return {
        transform: 'translateX(0) scale(0.5)',
        opacity: 0,
        zIndex: 0,
        filter: 'blur(4px)'
      };
    }
  };

  return (
    <section id="why-us" className="py-8 lg:py-16 px-4 lg:px-8 bg-white section-divider relative">
      <div className="section-number z-50">04</div>
      <div className="max-w-7xl mx-auto mt-20">
        {/* Header */}
        <div className="mb-8 mt-10 lg:mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-yellow-400 text-black text-sm lg:text-base font-semibold rounded-sm">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Building Reliable & <span className='text-yellow-400'>Scalable Web</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Creating fast and robust applications with thoughtful design and solid backend infrastructure.
          </p>
        </div>

        {/* Mobile Carousel - visible only on mobile */}
        <div className="lg:hidden">
          <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
            {/* Cards */}
            <div className="relative w-full max-w-md h-full flex items-center justify-center">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full transition-all duration-700 ease-in-out"
                  style={getCardStyle(index)}
                >
                  <div className="bg-black rounded-lg p-6 h-full">
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <svg
                          className="w-full h-full text-yellow-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={feature.icon} />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed text-center">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors shadow-lg"
              aria-label="Previous"
            >
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors shadow-lg"
              aria-label="Next"
            >
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(index);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-yellow-400 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - visible only on desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 flex items-center justify-center">
                  <svg
                    className="w-full h-full text-yellow-400 transition-transform duration-300"
                    style={{
                      transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)'
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={feature.icon} />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-base text-gray-300 leading-relaxed text-center">
                {feature.description}
              </p>

              {/* Hover border effect */}
              <div 
                className="absolute inset-0 border-2 border-yellow-400 rounded-lg transition-opacity duration-300 pointer-events-none"
                style={{
                  opacity: hoveredCard === index ? 1 : 0
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
