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
                <div className=" text-center lg:p-5 bg-yellow-400 rounded-l-lg">
                  <div className="text-2xl lg:text-4xl font-bold ">3+</div>
                  <p className="small-caps  text-xs lg:text-sm ">Years Experience</p>
                </div>
                <div className=" text-center lg:p-5 bg-black">
                  <div className="text-2xl lg:text-4xl font-bold text-white">6+</div>
                  <p className="small-caps text-white text-xs lg:text-sm ">Proyek</p>
                </div>
                <div className=" text-center  lg:p-5 bg-yellow-400 rounded-r-lg">
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
      <footer className="bg-black text-white py-12 lg:py-10 px-4 lg:px-8" id="kontak">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-start">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                Mari Berkolaborasi<br/>
                Menciptakan Sesuatu yang <em className="text-gray-300">Luar Biasa</em>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6 lg:mb-8 text-base lg:text-lg">
                Siap mewujudkan ide-ide Anda? Saya selalu antusias dengan 
                peluang baru dan proyek-proyek inovatif.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-8 lg:mb-12">
                <a 
                  href="mailto:bimamahendra0705@gmail.com" 
                  className="px-6 py-3 lg:px-8 lg:py-4 bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition-colors text-center text-sm lg:text-base"
                >
                  Kirim Email
                </a>
                <a 
                  href="tel:+6285156390600" 
                  className="px-6 py-3 lg:px-8 lg:py-4 border-2 border-yellow-400 text-white hover:bg-yellow-400 hover:text-black transition-colors text-center text-sm lg:text-base"
                >
                  Hubungi Saya
                </a>
              </div>
            </div>
            
            <div className="lg:text-left lg:mt-5 lg:ps-40 ">
              <div className="flex flex-row  gap-8 lg:gap-6">
                <div className="flex-1">
                  <p className="small-caps text-gray-400 mb-3 lg:mb-2 text-xs lg:text-sm">Terhubung</p>
                  <div className="space-y-2">
                    <a href="https://linkedin.com/in/alif-bima-mahendra" className="block text-white hover:text-gray-300 transition-colors text-sm lg:text-lg">LinkedIn</a>
                    <a href="https://github.com/bimamahendra" className="block text-white hover:text-gray-300 transition-colors text-sm lg:text-lg">GitHub</a>
                    <a href="mailto:bimamahendra0705@gmail.com" className="block text-white hover:text-gray-300 transition-colors text-sm lg:text-lg">Email</a>
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="small-caps text-gray-400 mb-3 lg:mb-2 text-xs lg:text-sm">Kontak</p>
                  <div className="space-y-2">
                    <p className="text-white text-sm lg:text-base">bimamahendra0705@gmail.com</p>
                    <p className="text-white text-sm lg:text-base">+62 851 5639 0600</p>
                    <p className="text-white text-sm lg:text-base">Sleman, Yogyakarta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 lg:mt-16 pt-6 lg:pt-8 flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs lg:text-sm">
              &copy; 2024 Alif Bima Mahendra.
            </p>
            
          </div>
        </div>
      </footer>
    </div>
  );
}
