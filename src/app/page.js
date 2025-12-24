import Navbar from './components/Navbar';
import ProjectCarousel from './components/ProjectCarousel';
import Skills from './components/Skills';
import WhyUs from './components/WhyUs';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="mt-10 min-h-screen flex items-center justify-center px-4 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="col-span-1 lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="slide-in-left">
                <p className="small-caps text-gray-500 mb-3 lg:mb-4 accent-line">Mahasiswa Sistem Informasi</p>
                <h1 className="display-text mb-4 lg:mb-6">
                  ALIF<br/>
                  <span className="text-yellow-400">BIMA</span><br/>
                  MAHENDRA
                </h1>
                <div className="horizontal-line">
                  <p className="text-base lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Mahasiswa Sistem Informasi dengan minat pada 
                    <em className="font-medium text-black"> web development</em> dan 
                    <em className="font-medium text-black"> data analysis</em>.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-6 lg:pt-8">
                <a href="/CV_BIMA.pdf" download className="btn-primary">
                  Download CV
                </a>
                <a href="#kontak" className="btn-secondary">
                  Kontak
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3  pt-8 lg:pt-12 border-t border-gray-100">
                <div className=" text-center p-5 bg-yellow-400 rounded-l-lg">
                  <div className="text-2xl lg:text-4xl font-bold ">3+</div>
                  <p className="small-caps  text-xs lg:text-sm ">Years Experience</p>
                </div>
                <div className=" text-center p-5 bg-black">
                  <div className="text-2xl lg:text-4xl font-bold text-white">6+</div>
                  <p className="small-caps text-white text-xs lg:text-sm ">Proyek</p>
                </div>
                <div className=" text-center p-5 bg-yellow-400 rounded-r-lg">
                  <div className="text-2xl lg:text-4xl font-bold ">4+</div>
                  <p className="small-caps  text-xs lg:text-sm">Peran</p>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="col-span-1 lg:col-span-5 flex justify-center order-first lg:order-last slide-in-right">
              <div className="relative">
                <div className="w-60 h-72 lg:w-80 lg:h-96 xl:w-120 xl:h-150 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -left-2 lg:-top-4 lg:-left-4 w-full h-full border-2 border-yellow-400 z-0"></div>
                  <div className="absolute top-2 left-2 lg:top-4 lg:left-4 w-full h-full bg-gray-50 z-10"></div>
                  <div className="relative z-20 w-full h-full overflow-hidden">
                    <img 
                      src="/bima.png" 
                      alt="Alif Bima Mahendra" 
                      className="w-full h-full object-cover "
                    />
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 bg-yellow-400 text-black px-3 py-2 lg:px-6 lg:py-4">
                  <p className="small-caps text-black text-xs font-bold">Available</p>
                  <p className="text-black font-medium text-sm">for work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="py-16 lg:py-32 px-4 lg:px-8 section-divider">
        <div className="section-number">01</div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="col-span-1 lg:col-span-4">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-8 vertical-line">Pengalaman<br/><span className='text-yellow-400'>Kerja</span></h2>
              <p className="text-gray-600 leading-relaxed hidden lg:block">
                Membangun pengalaman digital dengan tujuan dan presisi. 
                Setiap peran telah membentuk pendekatan saya dalam memecahkan masalah yang kompleks.
              </p>
            </div>
            
            <div className="col-span-1 lg:col-span-8 space-y-6 lg:space-y-8">
              <div className="professional-card p-4 lg:p-8 hover-effect">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
                  <div className="lg:col-span-1">
                    <p className="small-caps text-gray-500 mb-2">Jun 2025 - Present</p>
                    <div className="w-8 lg:w-12 h-px bg-yellow-400 mb-3 lg:mb-4"></div>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-xl lg:text-2xl font-medium mb-2">Asisten Riset</h3>
                    <p className="font-medium text-gray-700 mb-3 lg:mb-4 text-sm lg:text-base">PSEKUIN - Pusat Studi Ekonomi Digital</p>
                    <p className="text-gray-600 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                      Membantu penelitian dalam analisis data dan penyusunan laporan. 
                      Fokus pada penelitian komoditas dan pemetaan potensi wisata.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-xs lg:text-sm font-medium">Analisis Data</span>
                      <span className="px-3 py-1 bg-gray-100 text-xs lg:text-sm font-medium">SPSS</span>
                      <span className="px-3 py-1 bg-gray-100 text-xs lg:text-sm font-medium">R Studio</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="professional-card p-4 lg:p-8 hover-effect">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
                  <div className="lg:col-span-1">
                    <p className="small-caps text-gray-500 mb-2">Feb 2025 - Present</p>
                    <div className="w-8 lg:w-12 h-px bg-yellow-400 mb-3 lg:mb-4"></div>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-xl lg:text-2xl font-medium mb-2">Asisten Dosen</h3>
                    <p className="font-medium text-gray-700 mb-3 lg:mb-4 text-sm lg:text-base">UPN "Veteran" Yogyakarta</p>
                    <p className="text-gray-600 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                      Mendukung dosen dalam mengajar 40+ mahasiswa. 
                      Membantu persiapan materi dan diskusi kelas.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-xs lg:text-sm font-medium">Mengajar</span>
                      <span className="px-3 py-1 bg-gray-100 text-xs lg:text-sm font-medium">Mentoring</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="professional-card p-4 lg:p-8 hover-effect">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
                  <div className="lg:col-span-1">
                    <p className="small-caps text-gray-500 mb-2">Feb 2024 - Present</p>
                    <div className="w-8 lg:w-12 h-px bg-yellow-400 mb-3 lg:mb-4"></div>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-xl lg:text-2xl font-medium mb-2">Asisten Laboratorium</h3>
                    <p className="font-medium text-gray-700 mb-3 lg:mb-4 text-sm lg:text-base">UPN "Veteran" Yogyakarta</p>
                    <p className="text-gray-600 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                      Membimbing mahasiswa praktikum dan menilai 50+ laporan semester. 
                      Membantu pengembangan modul laboratorium.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-xs lg:text-sm font-medium">Pemrograman</span>
                      <span className="px-3 py-1 bg-gray-100 text-xs lg:text-sm font-medium">Database</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <section id="projects" className="py-16 lg:py-32 px-4 lg:px-8 section-divider">
        <div className="section-number">03</div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 vertical-line">Proyek</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-sm lg:text-base">
              Kumpulan proyek yang mendemonstrasikan kemampuan teknis dan analisis.
            </p>
          </div>
          
          <ProjectCarousel />
        </div>
      </section>

      {/* Why Us Section */}
      <WhyUs />

      {/* Footer/Contact Section */}
      <footer className="bg-black text-white py-12 lg:py-8 px-4 lg:px-8" id="kontak">
        <div className="w-full mx-auto lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
            {/* Logo & Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-4xl font-bold">
                  <span className="text-yellow-400">Bima</span>
                  <span className="text-white">.</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mahasiswa Sistem Informasi yang passionate dalam web development dan data analysis.
              </p>
            </div>

            {/* Our Address */}
            <div className="text-left lg:text-center">
              <h3 className="text-yellow-400 text-lg font-semibold mb-4">Our Address</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Jl. Kaliurang KM 14.5<br />
                Sleman, Yogyakarta<br />
                Daerah Istimewa Yogyakarta<br />
                Indonesia 55281
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-left lg:text-center">
              <h3 className="text-yellow-400 text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="flex flex-col items-start lg:items-center space-y-2">
                <a href="#hero" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Home
                </a>
                <a href="#skills" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  About
                </a>
                <a href="#projects" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Projects
                </a>
                <a href="#why-us" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Why Us
                </a>
                <a href="#kontak" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Contact
                </a>
              </nav>
            </div>

            {/* Connect With Me */}
            <div className="text-left lg:text-center">
              <h3 className="text-yellow-400 text-lg font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4 justify-start lg:justify-center">
                <a 
                  href="https://linkedin.com/in/alif-bima-mahendra" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded flex items-center justify-center transition-colors group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/bimamahendra" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded flex items-center justify-center transition-colors group"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://tiktok.com/@bimamahendra" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded flex items-center justify-center transition-colors group"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/bimamahendra" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded flex items-center justify-center transition-colors group"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Copyright | Alif Bima Mahendra
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
