'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'pricing', 'faq'];
      const headerHeight = 110;
      const scrollPosition = window.scrollY + headerHeight + 50; // Account for header height + some padding
      
      let currentSection = 'home';
      
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          // Check if scroll position is within this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sections[i];
            break;
          }
        }
      }
      
      // Only update if the section actually changed
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 110;
      const targetPosition = section.offsetTop - headerHeight - 20; // Add small offset for better positioning
      
      // Immediately set the active section
      setActiveSection(sectionId);
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveSection = (sectionId: string) => {
    return activeSection === sectionId;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{
        width: '100%',
        minHeight: 'clamp(80px, 12vw, 110px)',
        paddingRight: 'clamp(16px, 4vw, 160px)',
        paddingLeft: 'clamp(16px, 4vw, 160px)',
        background: '#fefef9',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        transform: 'rotate(0deg)',
        opacity: 1,
      }}
    >
      <div className="flex justify-between items-center h-full min-h-[80px] sm:min-h-[90px] md:min-h-[100px] lg:min-h-[110px]">
        {/* Right Section - Logo/Brand */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
            <svg 
              width="20" 
              height="20" 
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 4V20M18 6L6 18M20 12H4M18 18L6 6" 
                stroke="#246BFD" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-[#246BFD] text-lg sm:text-xl md:text-2xl font-ibm-bold">رعاية</span>
        </div>

        {/* Center Section - Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-12">
          <button 
            onClick={() => scrollToSection('home')}
            className={`font-ibm-bold pb-1 transition-all duration-300 text-sm lg:text-base ${
              isActiveSection('home') 
                ? 'text-[#246BFD] border-b-2 border-[#246BFD]' 
                : 'text-black hover:text-[#246BFD] hover:border-b-2 hover:border-[#246BFD]'
            }`}
          >
            الرئيسية
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`font-ibm-regular pb-1 transition-all duration-300 text-sm lg:text-base ${
              isActiveSection('about') 
                ? 'text-[#246BFD] border-b-2 border-[#246BFD]' 
                : 'text-black hover:text-[#246BFD] hover:border-b-2 hover:border-[#246BFD]'
            }`}
          >
            من نحن
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className={`font-ibm-regular pb-1 transition-all duration-300 text-sm lg:text-base ${
              isActiveSection('pricing') 
                ? 'text-[#246BFD] border-b-2 border-[#246BFD]' 
                : 'text-black hover:text-[#246BFD] hover:border-b-2 hover:border-[#246BFD]'
            }`}
          >
            خطط الأسعار
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className={`font-ibm-regular pb-1 transition-all duration-300 text-sm lg:text-base ${
              isActiveSection('faq') 
                ? 'text-[#246BFD] border-b-2 border-[#246BFD]' 
                : 'text-black hover:text-[#246BFD] hover:border-b-2 hover:border-[#246BFD]'
            }`}
          >
            أسئلة شائعة
          </button>
        </nav>

        {/* Left Section - Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4">
          <button className="bg-[#246BFD] text-white px-3 lg:px-4 xl:px-6 py-2 lg:py-3 rounded-full font-ibm-bold hover:bg-[#1e5ae8] transition-colors text-xs lg:text-sm xl:text-base">
            احجز الآن
          </button>
      
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col items-center justify-center w-7 h-7 sm:w-8 sm:h-8"
        >
          <span className={`block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-black transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
          }`}></span>
          <span className={`block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-black transition-all duration-300 mt-1 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-black transition-all duration-300 mt-1 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
          }`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white border-t border-gray-200 py-6">
          {/* Mobile Navigation */}
          <nav className="flex flex-col items-center gap-6 mb-6">
            <button 
              onClick={() => scrollToSection('home')}
              className={`font-ibm-bold pb-1 transition-all duration-300 ${
                isActiveSection('home') 
                  ? 'text-[#246BFD] border-b-2 border-[#246BFD]' 
                  : 'text-black hover:text-[#246BFD] hover:border-b-2 hover:border-[#246BFD]'
              }`}
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-ibm-regular pb-1 transition-all duration-300 ${
                isActiveSection('about') 
                  ? 'text-[#246BFD] border-b-2 border-[#246BFD]' 
                  : 'text-black hover:text-[#246BFD] hover:border-b-2 hover:border-[#246BFD]'
              }`}
            >
              من نحن
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className={`font-ibm-regular pb-1 transition-all duration-300 ${
                isActiveSection('pricing') 
                  ? 'text-[#246BFD] border-b-2 border-[#246BFD]' 
                  : 'text-black hover:text-[#246BFD] hover:border-b-2 hover:border-[#246BFD]'
              }`}
            >
              خطط الأسعار
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className={`font-ibm-regular pb-1 transition-all duration-300 ${
                isActiveSection('faq') 
                  ? 'text-[#246BFD] border-b-2 border-[#246BFD]' 
                  : 'text-black hover:text-[#246BFD] hover:border-b-2 hover:border-[#246BFD]'
              }`}
            >
              أسئلة شائعة
            </button>
          </nav>

          {/* Mobile Buttons */}
          <div className="flex flex-col items-center gap-4">
            <button className="bg-[#246BFD] text-white px-8 py-3 rounded-full font-ibm-bold hover:bg-[#1e5ae8] transition-colors w-full max-w-xs">
              احجز الآن
            </button>
            <button className="border border-black text-black px-8 py-3 rounded-full font-ibm-regular hover:bg-black hover:text-white transition-colors w-full max-w-xs">
              English
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 