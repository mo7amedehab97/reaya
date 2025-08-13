'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Right Column - Reaya Brand */}
            <div className="text-center sm:text-right">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
                <Image 
                  src="/asterisk.svg" 
                  alt="Reaya Logo" 
                  width={24} 
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-ibm-bold">رعاية</h3>
              </div>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                منصة رعاية تتيح لك حجز المواعيد مع أفضل الأطباء في مختلف التخصصات بدون مكالمات أو انتظار من خلال خطوات بسيطة
              </p>
              <button className="bg-[#246BFD] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-ibm-bold hover:bg-[#1e5ae8] transition-colors text-sm sm:text-base">
                احجز موعد
              </button>
            </div>

            {/* Middle Column - Pages */}
            <div className="text-center sm:text-right">
              <h3 className="text-lg sm:text-xl font-ibm-bold mb-4 sm:mb-6">الصفحات</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2 sm:space-y-3">
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors font-ibm-regular text-sm sm:text-base">
                    تسجيل دخول
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors font-ibm-regular text-sm sm:text-base">
                    الشروط والأحكام
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors font-ibm-regular text-sm sm:text-base">
                    خطط الأسعار
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors font-ibm-regular text-sm sm:text-base">
                    سياسة الخصوصية
                  </a>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors font-ibm-regular text-sm sm:text-base">
                    الرئيسية
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors font-ibm-regular text-sm sm:text-base">
                    من نحن
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors font-ibm-regular text-sm sm:text-base">
                    خطط الأسعار
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors font-ibm-regular text-sm sm:text-base">
                    أسئلة شائعة
                  </a>
                </div>
              </div>
            </div>

            {/* Left Column - Contact Us */}
            <div className="text-center sm:text-right">
              <h3 className="text-lg sm:text-xl font-ibm-bold mb-4 sm:mb-6">تواصل معنا</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3">
                  <span className="text-gray-300 font-ibm-regular text-sm sm:text-base">
                    18 شارع لقمان، خميس مشيط
                  </span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3">
                  <span className="text-gray-300 font-ibm-regular text-sm sm:text-base">
                    sales@reaya.com
                  </span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3">
                  <span className="text-gray-300 font-ibm-regular text-sm sm:text-base">
                    +966558441494
                  </span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Row */}
      <div className="border-t border-gray-800">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-16 py-4 sm:py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-xs sm:text-sm font-ibm-regular text-center sm:text-right">
              حقوق الطبع والنشر محفوظة 2025 لمنصة رعاية
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S2 17.535 2 12 6.465 2 12 2zm-1 4v8h2V6h-2zm1 10a1 1 0 100 2 1 1 0 000-2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 