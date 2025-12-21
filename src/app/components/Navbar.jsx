'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300 transition-transform duration-300  ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg lg:text-xl font-bold tracking-tight hover:text-gray-600 transition-colors"
          >
            BIMA.
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('work')}
              className="small-caps text-xs lg:text-sm text-gray-600 hover:text-black transition-colors"
            >
              Pengalaman
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="small-caps text-xs lg:text-sm text-gray-600 hover:text-black transition-colors"
            >
              Pendidikan
            </button>
            <button
              onClick={() => scrollToSection('organization')}
              className="small-caps text-xs lg:text-sm text-gray-600 hover:text-black transition-colors"
            >
              Organisasi
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="small-caps text-xs lg:text-sm text-gray-600 hover:text-black transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="small-caps text-xs lg:text-sm text-gray-600 hover:text-black transition-colors"
            >
              Proyek
            </button>
            <button
              onClick={() => scrollToSection('kontak')}
              className="px-4 lg:px-6 py-2 bg-black text-white text-xs lg:text-sm hover:bg-gray-800 transition-colors"
            >
              Kontak
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center space-y-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4 border-t border-gray-100">
            <button
              onClick={() => scrollToSection('work')}
              className="block w-full text-left small-caps text-sm text-gray-600 hover:text-black transition-colors py-2"
            >
              Pengalaman
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="block w-full text-left small-caps text-sm text-gray-600 hover:text-black transition-colors py-2"
            >
              Pendidikan
            </button>
            <button
              onClick={() => scrollToSection('organization')}
              className="block w-full text-left small-caps text-sm text-gray-600 hover:text-black transition-colors py-2"
            >
              Organisasi
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left small-caps text-sm text-gray-600 hover:text-black transition-colors py-2"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left small-caps text-sm text-gray-600 hover:text-black transition-colors py-2"
            >
              Proyek
            </button>
            <button
              onClick={() => scrollToSection('kontak')}
              className="block w-full text-center px-6 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors mt-4"
            >
              Kontak
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
