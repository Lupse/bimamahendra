'use client';

import { useState } from 'react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "Word", image: "/skills/word.png" },
        { name: "Excel", image: "/skills/excel.png" },
        { name: "PowerPoint", image: "/skills/powerpoint.png" },
        { name: "Canva", image: "/skills/canva.png" },
        { name: "Figma", image: "/skills/figma.png" },
        { name: "C++", image: "/skills/c.png" },
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "PHP", image: "/skills/php.png" },
        { name: "JavaScript", image: "/skills/js.png" },
        { name: "Python", image: "/skills/python.png" },
        { name: "Java", image: "/skills/java.png" },
        { name: "R", image: "/skills/r.png" },
        { name: "SPSS", image: "/skills/spss.png" },
      ]
    }
  ];

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

        {/* Skills Grid - All in One */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 lg:gap-4">
          {skillCategories.flatMap((category) => 
            category.skills.map((skill, skillIndex) => (
              <div
                key={`${category.title}-${skillIndex}`}
                className="skill-card group"
                onMouseEnter={() => setHoveredSkill(`${category.title}-${skillIndex}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="aspect-square bg-white border border-gray-200 rounded-md overflow-hidden transition-all duration-300 hover:border-yellow-400 hover:shadow-md hover:-translate-y-1 flex items-center justify-center p-2 lg:p-3">
                  {/* Image Container */}
                  <div className="relative w-[50px] h-[50px]  lg:w-[80px] lg:h-[80px] flex items-center justify-center">
                    <img
                      src={skill.image}
                      alt={skill.name}
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
                <div className={`mt-1 text-center transition-opacity duration-300 ${
                  hoveredSkill === `${category.title}-${skillIndex}` ? 'opacity-100' : 'opacity-0'
                }`}>
                  <p className="text-xs font-medium text-gray-700 truncate">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
