'use client';

import { useState, useRef, useEffect } from 'react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(Date.now());

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "Figma", image: "/skills/figma.png" },
        { name: "NodeJS", image: "/skills/nodejs.png" },
        { name: "Laravel", image: "/skills/laravel.png" },
        { name: "Python", image: "/skills/python.png" },
        { name: "Dart", image: "/skills/dart.png" },
        { name: "Kotlin", image: "/skills/kotlin.png" },
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Power BI", image: "/skills/powerbi.png" },
        { name: "Git", image: "/skills/git.png" },
      ]
    }
  ];

  // Flatten all skills
  const allSkills = skillCategories.flatMap((category) => category.skills);

  // Continuous animation loop
  useEffect(() => {
    const animate = () => {
      if (!isPaused && !isDragging) {
        const now = Date.now();
        const delta = now - lastTimeRef.current;
        lastTimeRef.current = now;
        
        // Move at ~50px per second (adjust speed here)
        const speed = 0.02; // pixels per millisecond
        setOffset(prev => {
          const newOffset = prev - (delta * speed);
          const skillWidth = 124; // 100px + 24px margin
          const totalWidth = allSkills.length * skillWidth;
          
          // Reset for seamless loop
          if (newOffset <= -totalWidth) {
            return 0;
          }
          return newOffset;
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isDragging, allSkills.length]);

  // Handle drag start
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(offset);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(offset);
  };

  // Handle drag move
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const newOffset = scrollLeft + walk;
    
    // Normalize offset to stay within bounds for seamless loop
    const skillWidth = 124;
    const totalWidth = allSkills.length * skillWidth;
    
    if (newOffset > 0) {
      setOffset(newOffset - totalWidth);
      setScrollLeft(newOffset - totalWidth);
      setStartX(x);
    } else if (newOffset < -totalWidth) {
      setOffset(newOffset + totalWidth);
      setScrollLeft(newOffset + totalWidth);
      setStartX(x);
    } else {
      setOffset(newOffset);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const newOffset = scrollLeft + walk;
    
    // Normalize offset to stay within bounds for seamless loop
    const skillWidth = 124;
    const totalWidth = allSkills.length * skillWidth;
    
    if (newOffset > 0) {
      setOffset(newOffset - totalWidth);
      setScrollLeft(newOffset - totalWidth);
      setStartX(x);
    } else if (newOffset < -totalWidth) {
      setOffset(newOffset + totalWidth);
      setScrollLeft(newOffset + totalWidth);
      setStartX(x);
    } else {
      setOffset(newOffset);
    }
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
    lastTimeRef.current = Date.now(); // Reset time for smooth resume
    setTimeout(() => {
      if (!hoveredSkill) {
        setIsPaused(false);
      }
    }, 100);
  };

  // Handle container mouse leave
  const handleContainerLeave = () => {
    if (!isDragging) {
      setIsPaused(false);
      lastTimeRef.current = Date.now();
    }
    handleDragEnd();
  };

  return (
    <section id="skills" className="py-8 lg:py-16 px-4 lg:px-8 bg-gray-50 section-divider">
      <div className="section-number">02</div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 mt-10 lg:mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-3">
            Keterampilan & <span className='text-yellow-400'>Keahlian</span>
          </h2>
          <p className="text-sm lg:text-base text-gray-600">
            Teknologi dan tools yang saya gunakan
          </p>
        </div>

        {/* Infinite Scrolling Skills */}
        <div 
          className="relative overflow-hidden cursor-grab active:cursor-grabbing p-2"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleContainerLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
          onMouseEnter={() => !isDragging && setIsPaused(true)}
          onMouseOver={() => !isDragging && setIsPaused(true)}
        >
          <div 
            className="flex select-none"
            style={{
              transform: `translateX(${offset}px)`,
              willChange: 'transform'
            }}
          >
            {/* First set of skills */}
            {allSkills.map((skill, index) => (
              <div
                key={`skill-1-${index}`}
                className="skill-card group flex-shrink-0 mx-2 lg:mx-3 select-none"
                onMouseEnter={() => setHoveredSkill(`skill-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] bg-white border border-gray-200 rounded-md overflow-hidden transition-all duration-300 hover:border-yellow-400 hover:shadow-md hover:-translate-y-1 flex items-center justify-center p-3 lg:p-4 select-none">
                  {/* Image Container */}
                  <div className="relative w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] flex items-center justify-center pointer-events-none">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      draggable={false}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback untuk gambar yang tidak ada
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-8 h-8 mx-auto bg-gray-200 rounded flex items-center justify-center">
                                <span class="text-lg text-gray-400">?</span>
                              </div>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
                
                {/* Skill Name - Appears on hover */}
                <div className={`mt-2 text-center transition-opacity duration-300 select-none ${
                  hoveredSkill === `skill-${index}` ? 'opacity-100' : 'opacity-0'
                }`}>
                  <p className="text-xs lg:text-sm font-medium text-gray-700 truncate">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {allSkills.map((skill, index) => (
              <div
                key={`skill-2-${index}`}
                className="skill-card group flex-shrink-0 mx-2 lg:mx-3 select-none"
                onMouseEnter={() => setHoveredSkill(`skill-dup-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] bg-white border border-gray-200 rounded-md overflow-hidden transition-all duration-300 hover:border-yellow-400 hover:shadow-md hover:-translate-y-1 flex items-center justify-center p-3 lg:p-4 select-none">
                  {/* Image Container */}
                  <div className="relative w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] flex items-center justify-center pointer-events-none">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      draggable={false}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback untuk gambar yang tidak ada
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-8 h-8 mx-auto bg-gray-200 rounded flex items-center justify-center">
                                <span class="text-lg text-gray-400">?</span>
                              </div>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
                
                {/* Skill Name - Appears on hover */}
                <div className={`mt-2 text-center transition-opacity duration-300 select-none ${
                  hoveredSkill === `skill-dup-${index}` ? 'opacity-100' : 'opacity-0'
                }`}>
                  <p className="text-xs lg:text-sm font-medium text-gray-700 truncate">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}

            {/* Third set for extra seamless loop */}
            {allSkills.map((skill, index) => (
              <div
                key={`skill-3-${index}`}
                className="skill-card group flex-shrink-0 mx-2 lg:mx-3 select-none"
                onMouseEnter={() => setHoveredSkill(`skill-dup2-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] bg-white border border-gray-200 rounded-md overflow-hidden transition-all duration-300 hover:border-yellow-400 hover:shadow-md hover:-translate-y-1 flex items-center justify-center p-3 lg:p-4 select-none">
                  {/* Image Container */}
                  <div className="relative w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] flex items-center justify-center pointer-events-none">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      draggable={false}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback untuk gambar yang tidak ada
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-8 h-8 mx-auto bg-gray-200 rounded flex items-center justify-center">
                                <span class="text-lg text-gray-400">?</span>
                              </div>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
                
                {/* Skill Name - Appears on hover */}
                <div className={`mt-2 text-center transition-opacity duration-300 select-none ${
                  hoveredSkill === `skill-dup2-${index}` ? 'opacity-100' : 'opacity-0'
                }`}>
                  <p className="text-xs lg:text-sm font-medium text-gray-700 truncate">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
