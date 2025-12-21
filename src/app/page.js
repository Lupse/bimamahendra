
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="col-span-1 lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="slide-in-left">
                <p className="small-caps text-gray-500 mb-3 lg:mb-4 accent-line">Mahasiswa Sistem Informasi</p>
                <h1 className="display-text mb-4 lg:mb-6">
                  ALIF<br/>
                  <span className="text-gray-300">BIMA</span><br/>
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
                <a href="#work" className="btn-primary">
                  Tentang Saya
                </a>
                <a href="#kontak" className="btn-secondary">
                  Kontak
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-8 lg:pt-12 border-t border-gray-100">
                <div className="stagger-animation text-center">
                  <div className="text-2xl lg:text-4xl font-bold text-black">3.82</div>
                  <p className="small-caps text-gray-500 text-xs lg:text-sm">IPK</p>
                </div>
                <div className="stagger-animation text-center">
                  <div className="text-2xl lg:text-4xl font-bold text-black">6+</div>
                  <p className="small-caps text-gray-500 text-xs lg:text-sm">Proyek</p>
                </div>
                <div className="stagger-animation text-center">
                  <div className="text-2xl lg:text-4xl font-bold text-black">4+</div>
                  <p className="small-caps text-gray-500 text-xs lg:text-sm">Peran</p>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="col-span-1 lg:col-span-5 flex justify-center order-first lg:order-last slide-in-right">
              <div className="relative">
                <div className="w-60 h-72 lg:w-80 lg:h-96 xl:w-120 xl:h-[600px] relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -left-2 lg:-top-4 lg:-left-4 w-full h-full border border-gray-200 z-0"></div>
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
                <div className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 bg-black text-white px-3 py-2 lg:px-6 lg:py-4">
                  <p className="small-caps text-white text-xs">Available</p>
                  <p className="text-white font-medium text-sm">for work</p>
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
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-8 vertical-line">Pengalaman<br/>Kerja</h2>
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
                    <div className="w-8 lg:w-12 h-px bg-black mb-3 lg:mb-4"></div>
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
                    <div className="w-8 lg:w-12 h-px bg-black mb-3 lg:mb-4"></div>
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
                    <div className="w-8 lg:w-12 h-px bg-black mb-3 lg:mb-4"></div>
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

      {/* Education Section */}
      <section className="py-16 lg:py-32 px-4 lg:px-8 section-divider">
        <div className="section-number">02</div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="col-span-1 lg:col-span-4 order-first">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-8 vertical-line">Pendidikan &<br/>Pembelajaran</h2>
              <p className="text-gray-600 leading-relaxed mb-6 lg:mb-8 hidden lg:block">
                Pembelajaran berkelanjutan dan keunggulan akademik telah menjadi fondasi 
                perjalanan teknis saya.
              </p>
              
              {/* Learning stats */}
              <div className="space-y-6 hidden lg:block">
                <div>
                  <div className="py-2">
                    <span className="small-caps">Prestasi Akademik</span>
                  </div>
                </div>
                <div>
                  <div className="py-2">
                    <span className="small-caps">Penyelesaian Proyek</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-span-1 lg:col-span-8 space-y-6 lg:space-y-8 order-last">
              <div className="professional-card p-4 lg:p-8 hover-effect">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
                  <div className="lg:col-span-1">
                    <p className="small-caps text-gray-500 mb-2">Aug 2023 - Nov 2026</p>
                    <div className="w-8 lg:w-12 h-px bg-black mb-3 lg:mb-4"></div>
                    <div className="text-xl lg:text-2xl font-bold">3.82<span className="text-sm lg:text-base font-normal text-gray-500">/4.00</span></div>
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-xl lg:text-2xl font-medium mb-2">Sarjana Sistem Informasi</h3>
                    <p className="font-medium text-gray-700 mb-3 lg:mb-4 text-sm lg:text-base">UPN "Veteran" Yogyakarta</p>
                    <p className="text-gray-600 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                      <strong>Lulus November 2026</strong> dengan IPK 3.82. 
                      Fokus pada sistem informasi dan analisis data.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <div className="professional-card p-4 lg:p-6">
                  <h4 className="font-bold mb-3 lg:mb-4 accent-line text-sm lg:text-base">Proyek Utama</h4>
                  <ul className="space-y-2 text-gray-700 text-sm lg:text-base">
                    <li className="flex items-start"><span className="w-2 h-2 bg-black mr-2 lg:mr-3 mt-2 shrink-0"></span>Analisis DeLone McLean</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-black mr-2 lg:mr-3 mt-2 shrink-0"></span>Sistem Manajemen Obat</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-black mr-2 lg:mr-3 mt-2 shrink-0"></span>Analisis Spasial GIS</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-black mr-2 lg:mr-3 mt-2 shrink-0"></span>BarBim+ Tes Psikologi</li>
                  </ul>
                </div>
                <div className="professional-card p-4 lg:p-6">
                  <h4 className="font-bold mb-3 lg:mb-4 accent-line text-sm lg:text-base">Peran Akademik</h4>
                  <ul className="space-y-2 text-gray-700 text-sm lg:text-base">
                    <li className="flex items-center"><span className="w-2 h-2 bg-black mr-2 lg:mr-3"></span>Asisten Lab</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-black mr-2 lg:mr-3"></span>Asisten Dosen</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-black mr-2 lg:mr-3"></span>Asisten Riset</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Experience Section */}
      <section className="py-32 px-8 section-divider">
        <div className="section-number">03</div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="large-text mb-6">Kepemimpinan &<br/>Organisasi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Membangun komunitas dan memimpin tim untuk mencapai tujuan bersama melalui 
              inovasi dan kolaborasi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="professional-card p-8 hover-effect">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="medium-text mb-2">Mentor</h3>
                  <p className="font-medium text-gray-700">CODE 124 (Komunitas Sistem Informasi Web)</p>
                </div>
                <div className="text-right">
                  <p className="small-caps text-gray-500">Mar 2025 - Sekarang</p>
                  <div className="w-12 h-px bg-black mt-2 ml-auto"></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Membimbing dan mengarahkan anggota junior dalam mempelajari pengembangan back-end menggunakan Laravel dan MySQL. 
                Memberikan bantuan teknis dan review kode untuk meningkatkan pemahaman tentang arsitektur perangkat lunak 
                dan praktik coding yang bersih. Mengadakan sesi mentoring mingguan untuk meningkatkan keterampilan pengembangan web.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50">
                  <div className="text-2xl font-bold">20%</div>
                  <p className="small-caps text-gray-500">Peningkatan Sistem</p>
                </div>
                <div className="text-center p-4 bg-gray-50">
                  <div className="text-2xl font-bold">10+</div>
                  <p className="small-caps text-gray-500">Mentee</p>
                </div>
              </div>
            </div>
            
            <div className="professional-card p-8 hover-effect">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="medium-text mb-2">Wakil Koordinator</h3>
                  <p className="font-medium text-gray-700">PKK SI 2024 - Divisi Kesehatan</p>
                </div>
                <div className="text-right">
                  <p className="small-caps text-gray-500">Sep 2024 - Nov 2024</p>
                  <div className="w-12 h-px bg-black mt-2 ml-auto"></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Memimpin tim yang terdiri dari <strong>10 anggota</strong> dalam merencanakan dan melaksanakan program kesehatan mahasiswa selama 
                periode orientasi. Mengawasi implementasi dan evaluasi kegiatan divisi untuk memastikan 
                kesesuaian dengan tujuan acara. Berkontribusi dalam penyusunan laporan akhir divisi dan dokumentasi kegiatan.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50">
                  <div className="text-2xl font-bold">10</div>
                  <p className="small-caps text-gray-500">Anggota Tim</p>
                </div>
                <div className="text-center p-4 bg-gray-50">
                  <div className="text-2xl font-bold">100+</div>
                  <p className="small-caps text-gray-500">Mahasiswa Dilayani</p>
                </div>
              </div>
            </div>
            
            <div className="professional-card p-8 hover-effect">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="medium-text mb-2">Developer Back-End</h3>
                  <p className="font-medium text-gray-700">CODE 124 (Komunitas Sistem Informasi Web)</p>
                </div>
                <div className="text-right">
                  <p className="small-caps text-gray-500">Agu 2024 - Feb 2025</p>
                  <div className="w-12 h-px bg-black mt-2 ml-auto"></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Mengembangkan dan memelihara sistem back-end proyek web internal komunitas menggunakan Laravel. 
                Berkolaborasi dengan developer front-end untuk memastikan integrasi dan manajemen data yang efisien. 
                Meningkatkan efisiensi database dan kinerja API, menghasilkan respons sistem 20% lebih cepat.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50">
                  <div className="text-2xl font-bold">Laravel</div>
                  <p className="small-caps text-gray-500">Framework</p>
                </div>
                <div className="text-center p-4 bg-gray-50">
                  <div className="text-2xl font-bold">MySQL</div>
                  <p className="small-caps text-gray-500">Database</p>
                </div>
              </div>
            </div>
            
            <div className="professional-card p-8 hover-effect">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="medium-text mb-2">Staf Kesehatan</h3>
                  <p className="font-medium text-gray-700">Donor Darah FTI 2024</p>
                </div>
                <div className="text-right">
                  <p className="small-caps text-gray-500">Apr 2024 - Mei 2024</p>
                  <div className="w-12 h-px bg-black mt-2 ml-auto"></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Mengkoordinasikan pemeriksaan medis dan memastikan dokumentasi kesehatan yang tepat untuk lebih dari <strong>100 pendonor darah</strong>. 
                Mendukung logistik dan perawatan pasca-donor untuk menjaga keselamatan dan kenyamanan peserta. 
                Berkolaborasi dengan tim penyelenggara untuk memastikan operasional acara yang lancar.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50">
                  <div className="text-2xl font-bold">100+</div>
                  <p className="small-caps text-gray-500">Pendonor</p>
                </div>
                <div className="text-center p-4 bg-gray-50">
                  <div className="text-2xl font-bold">100%</div>
                  <p className="small-caps text-gray-500">Keselamatan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 lg:py-32 px-4 lg:px-8 section-divider">
        <div className="section-number">04</div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="col-span-1 lg:col-span-4">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-8 vertical-line">Keterampilan &<br/>Keahlian</h2>
              <p className="text-gray-600 leading-relaxed mb-6 lg:mb-8 hidden lg:block">
                Kumpulan keterampilan komprehensif yang dibangun melalui pembelajaran berkelanjutan 
                dan pengalaman langsung dalam pengembangan web modern.
              </p>
              
              <div className="space-y-4 lg:space-y-6 hidden lg:block">
                <div className="professional-card p-4 lg:p-6">
                  <h4 className="font-bold mb-3 lg:mb-4 accent-line text-sm lg:text-base">Keterampilan Inti</h4>
                  <div className="grid grid-cols-1 gap-2 lg:gap-4">
                    <div className="py-2 lg:py-3 border-b border-gray-100">
                      <span className="font-medium text-sm lg:text-base">PHP/Laravel</span>
                    </div>
                    <div className="py-2 lg:py-3 border-b border-gray-100">
                      <span className="font-medium text-sm lg:text-base">JavaScript/Python</span>
                    </div>
                    <div className="py-2 lg:py-3 border-b border-gray-100">
                      <span className="font-medium text-sm lg:text-base">Analisis Data</span>
                    </div>
                    <div className="py-2 lg:py-3">
                      <span className="font-medium text-sm lg:text-base">Manajemen Database</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-span-1 lg:col-span-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 lg:mb-12">
                <div className="professional-card p-4 lg:p-6 hover-effect">
                  <h4 className="font-bold mb-3 lg:mb-4 accent-line text-sm lg:text-base">Programming</h4>
                  <div className="space-y-2 lg:space-y-3">
                    <div className="py-1 lg:py-2">
                      <span className="text-sm lg:text-base">PHP/Laravel</span>
                    </div>
                    <div className="py-1 lg:py-2">
                      <span className="text-sm lg:text-base">JavaScript</span>
                    </div>
                    <div className="py-1 lg:py-2">
                      <span className="text-sm lg:text-base">Python</span>
                    </div>
                    <div className="py-1 lg:py-2">
                      <span className="text-sm lg:text-base">Java</span>
                    </div>
                  </div>
                </div>
                
                <div className="professional-card p-4 lg:p-6 hover-effect">
                  <h4 className="font-bold mb-3 lg:mb-4 accent-line text-sm lg:text-base">Data & Analysis</h4>
                  <div className="space-y-2 lg:space-y-3">
                    <div className="py-1 lg:py-2">
                      <span className="text-sm lg:text-base">SPSS</span>
                    </div>
                    <div className="py-1 lg:py-2">
                      <span className="text-sm lg:text-base">R Studio</span>
                    </div>
                    <div className="py-1 lg:py-2">
                      <span className="text-sm lg:text-base">QGIS</span>
                    </div>
                    <div className="py-1 lg:py-2">
                      <span className="text-sm lg:text-base">MySQL</span>
                    </div>
                  </div>
                </div>
                
                <div className="professional-card p-4 lg:p-6 hover-effect">
                  <h4 className="font-bold mb-3 lg:mb-4 accent-line text-sm lg:text-base">Design & Tools</h4>
                  <div className="space-y-2 lg:space-y-3">
                    <div className="py-1 lg:py-2">
                      <span className="text-sm lg:text-base">Figma</span>
                    </div>
                    <div className="py-1 lg:py-2">
                      <span className="text-sm lg:text-base">VS Code</span>
                    </div>
                    <div className="py-1 lg:py-2">
                      <span className="text-sm lg:text-base">Git</span>
                    </div>
                    <div className="py-1 lg:py-2">
                      <span className="text-sm lg:text-base">MS Office</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="professional-card p-4 lg:p-8">
                <h4 className="font-bold mb-4 lg:mb-6 text-center text-sm lg:text-base">Soft Skills & Bahasa</h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 text-center mb-6 lg:mb-8">
                  <div className="space-y-2">
                    <div className="w-8 h-8 lg:w-12 lg:h-12 bg-black text-white flex items-center justify-center mx-auto text-sm lg:text-xl font-bold">R</div>
                    <p className="small-caps text-xs lg:text-sm">Riset</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 lg:w-12 lg:h-12 bg-black text-white flex items-center justify-center mx-auto text-sm lg:text-xl font-bold">M</div>
                    <p className="small-caps text-xs lg:text-sm">Mengajar</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 lg:w-12 lg:h-12 bg-black text-white flex items-center justify-center mx-auto text-sm lg:text-xl font-bold">A</div>
                    <p className="small-caps text-xs lg:text-sm">Analitis</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 lg:w-12 lg:h-12 bg-black text-white flex items-center justify-center mx-auto text-sm lg:text-xl font-bold">K</div>
                    <p className="small-caps text-xs lg:text-sm">Kepemimpinan</p>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="font-bold mb-2 lg:mb-3 text-sm lg:text-base">Bahasa</h5>
                  <div className="space-y-1 lg:space-y-2 max-w-xs mx-auto">
                    <div className="flex justify-between items-center">
                      <span className="text-sm lg:text-base">Indonesia</span>
                      <span className="small-caps text-gray-500 text-xs lg:text-sm">Native</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm lg:text-base">Inggris</span>
                      <span className="small-caps text-gray-500 text-xs lg:text-sm">Menengah</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16 lg:py-32 px-4 lg:px-8 section-divider">
        <div className="section-number">05</div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="col-span-1 lg:col-span-4 order-first">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-8 vertical-line">Sertifikasi</h2>
              <p className="text-gray-600 leading-relaxed mb-6 lg:mb-8 hidden lg:block">
                Kredensial profesional yang mengakui kompetensi dalam pengembangan web.
              </p>
            </div>
            
            <div className="col-span-1 lg:col-span-8 space-y-6 lg:space-y-8 order-last">
              <div className="professional-card p-4 lg:p-8 hover-effect">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
                  <div className="lg:col-span-1">
                    <p className="small-caps text-gray-500 mb-2">Jan 2025</p>
                    <div className="w-8 lg:w-12 h-px bg-black mb-3 lg:mb-4"></div>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-xl lg:text-2xl font-medium mb-2">Junior Web Developer</h3>
                    <p className="font-medium text-gray-700 mb-3 lg:mb-4 text-sm lg:text-base">BNSP - Badan Nasional Sertifikasi Profesi</p>
                    <p className="text-gray-600 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                      Sertifikasi kompetensi dalam pengembangan aplikasi web mencakup 
                      front-end, back-end, dan database management.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                      <span className="px-3 py-1 bg-gray-100 text-xs lg:text-sm font-medium">Web Development</span>
                      <span className="px-3 py-1 bg-gray-100 text-xs lg:text-sm font-medium">PHP</span>
                      <span className="px-3 py-1 bg-gray-100 text-xs lg:text-sm font-medium">Database</span>
                    </div>
                    <button className="px-4 py-2 lg:px-6 lg:py-2 bg-black text-white text-xs lg:text-sm hover:bg-gray-800 transition-colors w-full lg:w-auto">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 lg:py-32 px-4 lg:px-8 section-divider">
        <div className="section-number">06</div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="col-span-1 lg:col-span-4">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-8 vertical-line">Proyek</h2>
              <p className="text-gray-600 leading-relaxed mb-6 lg:mb-8 hidden lg:block">
                Kumpulan proyek yang mendemonstrasikan kemampuan teknis dan analisis.
              </p>
            </div>
            
            <div className="col-span-1 lg:col-span-8 space-y-6 lg:space-y-8">
              <div className="professional-card p-4 lg:p-8 hover-effect">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
                  <div className="lg:col-span-1">
                    <p className="small-caps text-gray-500 mb-2">Sep - Nov 2024</p>
                    <div className="w-8 lg:w-12 h-px bg-black mb-3 lg:mb-4"></div>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-xl lg:text-2xl font-medium mb-2">Sistem Manajemen Obat</h3>
                    <p className="font-medium text-gray-700 mb-3 lg:mb-4 text-sm lg:text-base">Klinik DESAMA • PHP Laravel</p>
                    <p className="text-gray-600 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                      Sistem informasi untuk mengelola inventori obat dan rekam medis pasien 
                      dengan fitur CRUD lengkap dan dashboard analitik.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                      <span className="px-3 py-1 bg-gray-100 text-xs lg:text-sm font-medium">Laravel</span>
                      <span className="px-3 py-1 bg-gray-100 text-xs lg:text-sm font-medium">MySQL</span>
                      <span className="px-3 py-1 bg-gray-100 text-xs lg:text-sm font-medium">Bootstrap</span>
                    </div>
                    <button className="px-4 py-2 lg:px-6 lg:py-2 bg-black text-white text-xs lg:text-sm hover:bg-gray-800 transition-colors w-full lg:w-auto">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="professional-card p-4 lg:p-8 hover-effect">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
                  <div className="lg:col-span-1">
                    <p className="small-caps text-gray-500 mb-2">Mar - Jun 2024</p>
                    <div className="w-8 lg:w-12 h-px bg-black mb-3 lg:mb-4"></div>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-xl lg:text-2xl font-medium mb-2">BarBim+ Tes Psikologi</h3>
                    <p className="font-medium text-gray-700 mb-3 lg:mb-4 text-sm lg:text-base">Platform Online • PHP & JavaScript</p>
                    <p className="text-gray-600 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                      Platform tes psikologi digital dengan sistem penilaian otomatis 
                      dan pelaporan hasil komprehensif.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                      <span className="px-3 py-1 bg-gray-100 text-xs lg:text-sm font-medium">PHP</span>
                      <span className="px-3 py-1 bg-gray-100 text-xs lg:text-sm font-medium">JavaScript</span>
                      <span className="px-3 py-1 bg-gray-100 text-xs lg:text-sm font-medium">HTML/CSS</span>
                    </div>
                    <button className="px-4 py-2 lg:px-6 lg:py-2 bg-black text-white text-xs lg:text-sm hover:bg-gray-800 transition-colors w-full lg:w-auto">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
              
             
            </div>
          </div>
        </div>
      </section>

      {/* Footer/Contact Section */}
      <footer className="bg-black text-white py-12 lg:py-20 px-4 lg:px-8" id="kontak">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
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
                  className="px-6 py-3 lg:px-8 lg:py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors text-center text-sm lg:text-base"
                >
                  Kirim Email
                </a>
                <a 
                  href="tel:+6285156390600" 
                  className="px-6 py-3 lg:px-8 lg:py-4 border border-white text-white hover:bg-white hover:text-black transition-colors text-center text-sm lg:text-base"
                >
                  Hubungi Saya
                </a>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="flex flex-row lg:flex-col gap-8 lg:gap-6">
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
