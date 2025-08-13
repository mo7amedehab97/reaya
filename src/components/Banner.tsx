'use client';

import Image from 'next/image';

export default function Banner() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white to-[#fefaf2]" dir="rtl">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: 'clamp(20px, 4vw, 50px) clamp(20px, 4vw, 50px)'
        }}></div>
      </div>

      {/* Background Medical Elements - Responsive positioning */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Heart with lightning bolt */}
        <div className="absolute right-4 sm:right-8 md:right-16 lg:right-20 top-16 sm:top-24 md:top-28 lg:top-32 opacity-20">
          <div className="relative">
            <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-yellow-300 text-lg sm:text-xl md:text-2xl">⚡</span>
            </div>
          </div>
        </div>

        {/* Pills */}
        <div className="absolute right-8 sm:right-16 md:right-24 lg:right-40 top-20 sm:top-28 md:top-36 lg:top-48 opacity-30">
          <div className="w-4 h-2 sm:w-6 sm:h-3 md:w-7 md:h-3 lg:w-8 lg:h-4 bg-red-500 rounded-full"></div>
        </div>
        <div className="absolute right-6 sm:right-12 md:right-18 lg:right-36 top-24 sm:top-32 md:top-40 lg:top-52 opacity-30">
          <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-pink-300 rounded-full"></div>
        </div>

        {/* Bandage */}
        <div className="absolute right-2 sm:right-6 md:right-10 lg:right-16 top-32 sm:top-40 md:top-56 lg:top-64 opacity-25">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-200 rounded-lg transform rotate-45"></div>
        </div>

        {/* Floating hearts - Responsive positioning */}
        <div className="absolute left-4 sm:left-8 md:left-16 lg:left-32 top-8 sm:top-12 md:top-16 lg:top-20 opacity-15">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-400 rounded-full"></div>
        </div>
        <div className="absolute left-8 sm:left-16 md:left-24 lg:left-48 top-16 sm:top-20 md:top-28 lg:top-40 opacity-20">
          <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-orange-300 rounded-full"></div>
        </div>
        <div className="absolute left-2 sm:left-6 md:left-12 lg:left-24 top-24 sm:top-32 md:top-40 lg:top-60 opacity-15">
          <div className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-red-300 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-right">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ibm-bold text-black mb-4 sm:mb-6 leading-tight">
              ابدأ رحلتك الصحية
              <br />
              <span className="relative">
                بسهولة
                <div className="absolute bottom-0 left-0 right-0 h-2 sm:h-2.5 md:h-3 bg-orange-400 transform -rotate-1 opacity-80"></div>
              </span>
            </h1>

            {/* Description */}
            <div className="mb-6 sm:mb-8">
              <p className="text-lg sm:text-xl md:text-2xl font-ibm-bold text-black mb-3 sm:mb-4">
                مرحبا بك في منصة رعاية
              </p>
              <p className="text-base sm:text-lg md:text-xl font-ibm-regular text-gray-700 leading-relaxed">
                منصة &quot;رعاية&quot; تتيح لك حجز مواعيد مع أفضل الأطباء في مختلف التخصصات بدون مكالمات أو انتظار من خلال خطوات بسيطة
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <button className="bg-[#246BFD] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-ibm-bold text-base sm:text-lg hover:bg-[#1e5ae8] transition-colors shadow-lg">
                احجز موعد
              </button>
              <button className="border-2 border-black text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-ibm-bold text-base sm:text-lg hover:bg-black hover:text-white transition-colors">
                تصفح الأطباء
              </button>
            </div>

            {/* User Count Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <p className="text-gray-600 font-ibm-regular text-sm sm:text-base md:text-lg text-center lg:text-right">
                أكثر من 10 ألف مريض يستخدم منصة رعاية شهريا
              </p>
              <div className="flex">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="/person2.jpeg"
                    alt="User 1"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden -mr-2 sm:-mr-2">
                  <Image
                    src="/person1.webp"
                    alt="User 2"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Doctor Image */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            <div className="relative">
              {/* Doctor Image */}
              <div className="w-64 sm:w-72 md:w-80 mx-auto relative overflow-hidden">
                <Image
                  src="/doc.png"
                  alt="Doctor"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Medical Icons Around Doctor - Responsive sizing */}
              <div className="absolute -top-3 sm:-top-4 md:-top-5 lg:-top-6 -left-3 sm:-left-4 md:-left-5 lg:-left-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-lg sm:text-xl md:text-2xl">💊</span>
              </div>
              <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-5 lg:-bottom-6 -right-3 sm:-right-4 md:-right-5 lg:-right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-base sm:text-lg md:text-xl">🏥</span>
              </div>
              
              {/* Additional floating icons - Responsive positioning and sizing */}
              <div className="absolute top-1/4 -left-6 sm:-left-8 md:-left-10 lg:-left-12 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-blue-100 rounded-full shadow-md flex items-center justify-center animate-ping">
                <span className="text-sm sm:text-base md:text-lg">💉</span>
              </div>
              <div className="absolute bottom-1/4 -right-6 sm:-right-8 md:-right-10 lg:-right-12 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-green-100 rounded-full shadow-md flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
                <span className="text-sm sm:text-base md:text-lg">🩺</span>
              </div>
              <div className="absolute top-1/2 -left-8 sm:-left-12 md:-left-14 lg:-left-16 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-yellow-100 rounded-full shadow-md flex items-center justify-center animate-pulse">
                <span className="text-xs sm:text-sm">🔬</span>
              </div>
              <div className="absolute bottom-1/2 -right-8 sm:-right-12 md:-right-14 lg:-right-16 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-purple-100 rounded-full shadow-md flex items-center justify-center animate-bounce" style={{animationDelay: '1s'}}>
                <span className="text-xs sm:text-sm">📋</span>
              </div>
              <div className="absolute top-3/4 -left-4 sm:-left-6 md:-left-7 lg:-left-8 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-red-100 rounded-full shadow-md flex items-center justify-center animate-ping" style={{animationDelay: '0.3s'}}>
                <span className="text-sm sm:text-base md:text-lg">❤️</span>
              </div>
              <div className="absolute bottom-3/4 -right-4 sm:-right-6 md:-right-7 lg:-right-8 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-orange-100 rounded-full shadow-md flex items-center justify-center animate-pulse">
                <span className="text-sm sm:text-base md:text-lg">⚕️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 