'use client';

import { useState } from 'react';

interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'individual',
    title: 'حساب فردي',
    subtitle: 'ابدأ بحجز مواعيدك الطبية بسهوله',
    monthlyPrice: 750.50,
    annualPrice: 600.40,
    features: [
      'حجز مواعيد غير محدودة الطبيب واحد',
      'ملف صحي شخصي',
      'إدارة الأدوية والتوصيات',
      'استشارات مرئية أو صوتية',
      'تذكير بالمواعيد والتنبيهات',
      'حفظ التقارير الطبية',
      'دعم في خلال ساعات العمل'
    ],
    buttonText: 'أختر الخطة'
  },
  {
    id: 'family',
    title: 'حساب عائلي - حتى 5 أفراد',
    subtitle: 'للأسر المتوسطة',
    monthlyPrice: 950.75,
    annualPrice: 760.60,
    features: [
      'ملفات طبية منفصلة لـ 5 أفراد',
      'جدولة مواعيد لكل فرد',
      'إدارة الأدوية والتوصيات',
      'إشعارات مشتركة وتذكير جماعي',
      'سجل تطعيمات ومتابعة للأطفال',
      'مشاركة التقارير مع الطبيب العائلي',
      'واجهة تحكم للعائلة',
      'أولوية في الدعم الفني'
    ],
    isPopular: true,
    buttonText: 'أختر الخطة'
  },
  {
    id: 'unlimited',
    title: 'حساب عائلي - موسع غير محدود',
    subtitle: 'للأسر الكبيرة أو من لديهم كبار سن بحاجة لرعاية خاصة',
    monthlyPrice: 1250.20,
    annualPrice: 1000.16,
    features: [
      'عدد غير محدود من الملفات',
      'دعم لحالات خاصة كبار السن - أمراض مزمنة',
      'إدارة الأدوية والتنبيهات الجماعية',
      'إستشارات مرئية أو صوتية',
      'إمكانية ربط الممرضة أو مقدم الرعاية',
      'تقارير مجمعة لحالة الأسرة',
      'صلاحيات متعددة للمستخدمين (أب - أم - أبناء)',
      'دعم مباشر'
    ],
    buttonText: 'أختر الخطة'
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const getPrice = (plan: PricingPlan) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const getSavings = (plan: PricingPlan) => {
    const savings = ((plan.monthlyPrice - plan.annualPrice) / plan.monthlyPrice) * 100;
    return Math.round(savings);
  };

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-ibm-bold text-black mb-3 sm:mb-4">
            خطط الأسعار
          </h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-ibm-bold text-black mb-6 sm:mb-8 px-2">
            اختر الخطة المناسبة لك ولأسرتك
          </h1>
          
          {/* Toggle Switch */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
            <div className="flex items-center gap-3">
              <span className={`text-base sm:text-lg font-ibm-regular transition-colors duration-300 ${
                !isAnnual ? 'text-black font-ibm-bold' : 'text-gray-500'
              }`}>
                شهري
              </span>
            </div>
            
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-20 h-10 sm:w-24 sm:h-12 rounded-full transition-all duration-500 ease-in-out shadow-lg overflow-hidden bg-gray-200"
            >
              {/* Blue fill for annual selection */}
              <div
                className={`absolute inset-0 bg-[#246BFD] transition-all duration-500 ease-in-out ${
                  isAnnual ? 'translate-x-0' : '-translate-x-full'
                }`}
              />
              {/* Toggle handle */}
              <div
                className={`absolute top-0.5 sm:top-1.5 w-7 h-7 sm:w-9 sm:h-9 bg-white rounded-full transition-all duration-500 ease-in-out shadow-md z-10 ${
                    isAnnual ? 'translate-x-0' : '-translate-x-12 sm:-translate-x-14'
                }`}
              />
            </button>
            
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <span className={`text-base sm:text-lg font-ibm-regular transition-colors duration-300 ${
                isAnnual ? 'text-black font-ibm-bold' : 'text-gray-500'
              }`}>
                سنوي
              </span>
              {isAnnual && (
                <span className="bg-green-100 text-green-800 text-xs sm:text-sm font-ibm-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-sm animate-pulse">
                  وفرت {getSavings(pricingPlans[1])}%
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-xl ${
                plan.isPopular
                  ? 'bg-[#246BFD] text-white transform scale-105 sm:scale-105'
                  : 'bg-white border-2 border-gray-200 text-black'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-2 sm:-top-3 md:-top-4 -right-2 sm:-right-3 md:-right-4 bg-[#FFAE17] text-black text-xs sm:text-sm font-ibm-bold px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full">
                  الأكثر شيوعاً
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-4 sm:mb-6 md:mb-8">
                <h3 className={`text-lg sm:text-xl md:text-2xl font-ibm-bold mb-2 ${
                  plan.isPopular ? 'text-white' : 'text-black'
                }`}>
                  {plan.title}
                </h3>
                <p className={`text-xs sm:text-sm font-ibm-regular ${
                  plan.isPopular ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-4 sm:mb-6 md:mb-8">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-xl sm:text-2xl md:text-3xl font-ibm-bold">﷼</span>
                  <span className={`text-3xl sm:text-4xl md:text-5xl font-ibm-bold ${
                    plan.isPopular ? 'text-white' : 'text-black'
                  }`}>
                    {getPrice(plan).toFixed(2)}
                  </span>
                </div>
                <p className={`text-xs sm:text-sm font-ibm-regular mt-2 ${
                  plan.isPopular ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {isAnnual ? 'سنوياً' : 'شهرياً'}
                </p>
              </div>

              {/* Features */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <ul className="space-y-2 sm:space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                      <div className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.isPopular ? 'bg-white' : 'bg-[#246BFD]'
                      }`}>
                        <svg
                          className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 ${
                            plan.isPopular ? 'text-[#246BFD]' : 'text-white'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className={`text-xs sm:text-sm font-ibm-regular leading-relaxed ${
                        plan.isPopular ? 'text-blue-100' : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-lg font-ibm-bold text-sm sm:text-base md:text-lg transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-white text-[#246BFD] hover:bg-gray-100'
                    : 'bg-[#246BFD] text-white hover:bg-[#1e5ae8]'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 