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
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Background Medical Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Heart with lightning bolt */}
        <div className="absolute right-20 top-32 opacity-20">
          <div className="relative">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-yellow-300 text-2xl">⚡</span>
            </div>
          </div>
        </div>

        {/* Pills */}
        <div className="absolute right-40 top-48 opacity-30">
          <div className="w-8 h-4 bg-red-500 rounded-full"></div>
        </div>
        <div className="absolute right-36 top-52 opacity-30">
          <div className="w-6 h-6 bg-pink-300 rounded-full"></div>
        </div>

        {/* Bandage */}
        <div className="absolute right-16 top-64 opacity-25">
          <div className="w-12 h-12 bg-orange-200 rounded-lg transform rotate-45"></div>
        </div>

        {/* Floating hearts */}
        <div className="absolute left-32 top-20 opacity-15">
          <div className="w-12 h-12 bg-red-400 rounded-full"></div>
        </div>
        <div className="absolute left-48 top-40 opacity-20">
          <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
        </div>
        <div className="absolute left-24 top-60 opacity-15">
          <div className="w-10 h-10 bg-red-300 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="order-1 lg:order-1 text-right">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-ibm-bold text-black mb-6 leading-tight">
              ابدأ رحلتك الصحية
              <br />
              <span className="relative">
                بسهولة
                <div className="absolute bottom-0 left-0 right-0 h-3 bg-orange-400 transform -rotate-1 opacity-80"></div>
              </span>
            </h1>

            {/* Description */}
            <div className="mb-8">
              <p className="text-xl sm:text-2xl font-ibm-bold text-black mb-4">
                مرحبا بك في منصة رعاية
              </p>
              <p className="text-lg sm:text-xl font-ibm-regular text-gray-700 leading-relaxed">
                منصة "رعاية" تتيح لك حجز مواعيد مع أفضل الأطباء في مختلف التخصصات بدون مكالمات أو انتظار من خلال خطوات بسيطة
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-[#246BFD] text-white px-8 py-4 rounded-lg font-ibm-bold text-lg hover:bg-[#1e5ae8] transition-colors shadow-lg">
                احجز موعد
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-ibm-bold text-lg hover:bg-black hover:text-white transition-colors">
                تصفح الأطباء
              </button>
            </div>

            {/* User Count Section */}
            <div className="flex items-center justify-start gap-4">
              <p className="text-gray-600 font-ibm-regular text-lg">
                أكثر من 10 ألف مريض يستخدم منصة رعاية شهريا
              </p>
              <div className="flex">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="/person2.jpeg"
                    alt="User 1"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
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
          <div className="relative order-2 lg:order-2 flex justify-center items-center">
            <div className="relative">
              {/* Doctor Image */}
              <div className="w-80 mx-auto relative overflow-hidden">
                <Image
                  src="/doc.png"
                  alt="Doctor"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Medical Icons Around Doctor */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-2xl">💊</span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-xl">🏥</span>
              </div>
              
              {/* Additional floating icons */}
              <div className="absolute top-1/4 -left-12 w-10 h-10 bg-blue-100 rounded-full shadow-md flex items-center justify-center animate-ping">
                <span className="text-lg">💉</span>
              </div>
              <div className="absolute bottom-1/4 -right-12 w-10 h-10 bg-green-100 rounded-full shadow-md flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
                <span className="text-lg">🩺</span>
              </div>
              <div className="absolute top-1/2 -left-16 w-8 h-8 bg-yellow-100 rounded-full shadow-md flex items-center justify-center animate-pulse">
                <span className="text-sm">🔬</span>
              </div>
              <div className="absolute bottom-1/2 -right-16 w-8 h-8 bg-purple-100 rounded-full shadow-md flex items-center justify-center animate-bounce" style={{animationDelay: '1s'}}>
                <span className="text-sm">📋</span>
              </div>
              <div className="absolute top-3/4 -left-8 w-10 h-10 bg-red-100 rounded-full shadow-md flex items-center justify-center animate-ping" style={{animationDelay: '0.3s'}}>
                <span className="text-lg">❤️</span>
              </div>
              <div className="absolute bottom-3/4 -right-8 w-10 h-10 bg-orange-100 rounded-full shadow-md flex items-center justify-center animate-pulse">
                <span className="text-lg">⚕️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 