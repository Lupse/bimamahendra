'use client';

import { useState, useEffect, useRef } from 'react';

export default function ProjectCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Sistem Manajemen Obat',
      subtitle: 'Klinik DESAMA • PHP Laravel',
      period: 'Sep - Nov 2024',
      description: 'Sistem informasi untuk mengelola inventori obat dan rekam medis pasien dengan fitur CRUD lengkap dan dashboard analitik. Meningkatkan efisiensi pengelolaan data medis hingga 40%.',
      image: '/projects/desama.jpg',
      tags: [
        { name: 'Laravel', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
        { name: 'MySQL', icon: 'M4 6h16M4 12h16M4 18h16' },
        { name: 'Bootstrap', icon: 'M3 9h18v6H3z M7 9v6 M17 9v6' },
      ],
    },
    {
      id: 2,
      title: 'BarBim+ Tes Psikologi',
      subtitle: 'Platform Online • PHP & JavaScript',
      period: 'Mar - Jun 2024',
      description: 'Platform tes psikologi digital dengan sistem penilaian otomatis dan pelaporan hasil komprehensif. Mempermudah proses testing untuk 200+ pengguna dengan interface yang user-friendly.',
      image: '/projects/barbim.jpg',
      tags: [
        { name: 'PHP', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
        { name: 'JavaScript', icon: 'M3 3h18v18H3z M8 8h8v8H8z' },
        { name: 'HTML/CSS', icon: 'M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z' },
      ],
    },
    {
      id: 3,
      title: 'Analisis Spasial GIS',
      subtitle: 'Riset Akademik • QGIS & Python',
      period: 'Feb - May 2024',
      description: 'Analisis pemetaan wilayah dan visualisasi data spasial menggunakan QGIS. Menghasilkan insight geografis untuk pengambilan keputusan berbasis lokasi.',
      image: '/projects/gis.jpg',
      tags: [
        { name: 'QGIS', icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z' },
        { name: 'Python', icon: 'M9.75 3v4.5h4.5V3h-4.5zM9.75 16.5V21h4.5v-4.5h-4.5z' },
        { name: 'Spatial', icon: 'M3 3h18v18H3z M12 8v8 M8 12h8' },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Show hint when carousel comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !showHint) {
            setShowHint(true);
            setTimeout(() => {
              setShowHint(false);
            }, 1000);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="relative" ref={carouselRef}>
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Swipe Hint Mask */}
        <div className={`lg:hidden absolute inset-0 bg-[#00000080] bg-opacity-30 z-50 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${showHint ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center">
            <p className="text-white text-lg font-medium mb-2">Slide untuk lainnya</p>
            <div className="flex gap-2 justify-center">
              <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {projects.map((project, index) => (
            <div key={project.id} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Project Image */}
                <div className="order-1 lg:order-1">
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Placeholder - replace with actual images */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-16 h-16 lg:w-24 lg:h-24 bg-black mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl lg:text-4xl text-white font-bold">{project.id}</span>
                          </div>
                          <p className="text-sm text-gray-500">Project Image</p>
                        </div>
                      </div>
                    </div>
                    {/* Decorative frame */}
                    <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-black -z-10 hidden lg:block"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="order-2 lg:order-2 flex flex-col min-h-[400px] lg:min-h-[450px]">
                  <p className="small-caps text-gray-500 mb-4">{project.period}</p>
                  <div className="w-12 h-px bg-yellow-400 mb-6"></div>
                  
                  <h3 className="text-2xl lg:text-4xl font-bold mb-3">{project.title}</h3>
                  <p className="font-medium text-gray-700 mb-6 text-sm lg:text-base">{project.subtitle}</p>
                  
                  <div className="flex-1 mb-6 overflow-y-auto max-h-32 lg:max-h-40">
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base pr-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-2 px-3 py-2 border-2 border-yellow-400 rounded-lg hover:bg-yellow-400 transition-colors group"
                      >
                        <svg 
                          className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 group-hover:text-black transition-colors" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d={tag.icon} />
                        </svg>
                        <span className="text-xs lg:text-sm font-medium text-gray-700 group-hover:text-black transition-colors">
                          {tag.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="px-6 py-3 btn-secondary">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-8 lg:mt-12">
        {/* Previous Button - Hidden on Mobile */}
        <button
          onClick={prevSlide}
          className="hidden lg:flex w-14 h-14 border-2 border-black items-center justify-center hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-colors group"
          aria-label="Previous project"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-3 mx-auto lg:mx-0">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                currentSlide === index 
                  ? 'w-8 lg:w-12 h-2 bg-yellow-400' 
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button - Hidden on Mobile */}
        <button
          onClick={nextSlide}
          className="hidden lg:flex w-14 h-14 border-2 border-black items-center justify-center hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-colors group"
          aria-label="Next project"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Project Counter */}
      <div className="text-center mt-6">
        <p className="small-caps text-gray-500">
          <span className="text-yellow-400 font-bold text-lg">{currentSlide + 1}</span>
          <span className="text-gray-300 mx-2">/</span>
          <span>{projects.length}</span>
        </p>
      </div>
    </div>
  );
}
