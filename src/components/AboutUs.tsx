import React from 'react';
import Image from 'next/image';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          {/* Small Heading */}
          <h3 className="text-lg md:text-xl font-ibm-regular text-gray-700 mb-4">
            من نحن
          </h3>
          
          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-ibm-bold text-black mb-6 leading-tight">
            كيف يساعدك رعاية في حجز مواعيدك الطبية{' '}
            <span className="text-[#246BFD]">بكل سهولة</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl font-ibm-regular text-gray-700 max-w-4xl mx-auto leading-relaxed text-justify">
            بدون مکالمات ، بون طوابير، بدون أي تعقيدات ، كل اللى عليك أنك تختار التخصص وتشوف تقييمات الأطباء وتختار الوقت اللي يناسبك . خلال دقائق بيكون عندك موعد طبيب مؤكد والمميز كمان أنك ممكن تختار بين استشارة أونلاين أو زيارة للعيادة .
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Feature 1 - Online/In-person Consultations */}
          <div className="text-center">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-green-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-lg">
              <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-ibm-bold text-black mb-3 sm:mb-4">
              إستشارات أونلاين أو حضوري
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-ibm-regular text-gray-700 leading-relaxed">
              تواصل مع الطبيب أما عن عبر مكالمه أو فيديو أو زيارة في الععيادة
            </p>
          </div>

          {/* Feature 2 - Easy and Instant Scheduling */}
          <div className="text-center">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-purple-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-lg">
              <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-ibm-bold text-black mb-3 sm:mb-4">
              جدولة سهلة وفورية
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-ibm-regular text-gray-700 leading-relaxed">
              حدد الموعد المناسب لك وأحصل على تأکید خلال دقائق
            </p>
          </div>

          {/* Feature 3 - Book with Favorite Doctor */}
          <div className="text-center sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-blue-400 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-lg">
              <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-ibm-bold text-black mb-3 sm:mb-4">
              أحجز مع طبيبك المفضل
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-ibm-regular text-gray-700 leading-relaxed">
              أختر من بين مئات الأطباء المعتمدين وأبدأ حجزك الآن
            </p>
          </div>
        </div>

        {/* Prominent Doctors Section */}
        <div className="mt-20 md:mt-24">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-lg md:text-xl font-ibm-regular text-gray-700 mb-4">
              اكتشف أبرز الأطباء
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-ibm-bold text-black mb-6 leading-tight">
              أبرز الأطباء من{' '}
              <span className="text-[#246BFD]">جميع التخصصات</span>
            </h2>
            <p className="text-lg md:text-xl font-ibm-regular text-gray-700 max-w-4xl mx-auto leading-relaxed text-justify">
              بدون مکالمات ، بون طوابير، بدون أي تعقيدات ، كل اللى عليك أنك تختار التخصص وتشوف تقييمات الأطباء وتختار الوقت اللي يناسبك . خلال دقائق بيكون عندك موعد طبيب مؤكد والمميز كمان أنك ممكن تختار بين استشارة أونلاين أو زيارة للعيادة .
            </p>
          </div>

          {/* Doctor Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Dr. Mahmoud Ismail */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image 
                  src="/doc1.png" 
                  alt="Dr. Mahmoud Ismail" 
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-ibm-bold text-black mb-2">د. محمود إسماعيل</h3>
              <p className="text-xs sm:text-sm font-ibm-regular text-gray-600 mb-3">إستشاري قلب وأوعية دموية</p>
              <div className="flex items-center justify-center">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-ibm-regular text-gray-500 mr-2">(124 تقييم)</span>
              </div>
            </div>

            {/* Dr. Ahmed Al-Attar */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image 
                  src="/doc3.png" 
                  alt="Dr. Ahmed Al-Attar" 
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-ibm-bold text-black mb-2">د. احمد العطار</h3>
              <p className="text-xs sm:text-sm font-ibm-regular text-gray-600 mb-3">استشاري عظام</p>
              <div className="flex items-center justify-center">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-ibm-regular text-gray-500 mr-2">(58 تقييم)</span>
              </div>
            </div>

            {/* Dr. Iman Al-Amri */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image 
                  src="/doc2.png" 
                  alt="Dr. Iman Al-Amri" 
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-ibm-bold text-black mb-2">د. إيمان العامري</h3>
              <p className="text-xs sm:text-sm font-ibm-regular text-gray-600 mb-3">إستشاري تغذية</p>
              <div className="flex items-center justify-center">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-ibm-regular text-gray-500 mr-2">(102 تقييم)</span>
              </div>
            </div>

            {/* Dr. Mohamed Atta */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image 
                  src="/doc4.png" 
                  alt="Dr. Mohamed Atta" 
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-ibm-bold text-black mb-2">د. محمد عطا</h3>
              <p className="text-sm font-ibm-regular text-gray-600 mb-3">إستشاري باطنة</p>
              <div className="flex items-center justify-center">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-ibm-regular text-gray-500 mr-2">(89 تقييم)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 