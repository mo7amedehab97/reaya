'use client';

import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['1']));

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    setOpenItems(newOpenItems);
  };

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'لماذا رعاية ؟',
      answer: 'رعاية بتساعدك تحجز مواعيدك الطبية في دقائق وانت في أي مكان وتحتفظ بملفك الصحى وتتواصل مع أطباء مرخصين بسهولة في أي مكان'
    },
    {
      id: '2',
      question: 'ما هي تكلفة الأشتراك ؟',
      answer: 'نقدم خطط اشتراك متنوعة تناسب جميع الميزانيات، مع خيارات شهرية وسنوية. يمكنك الاطلاع على تفاصيل الأسعار في قسم خطط الأسعار.'
    },
    {
      id: '3',
      question: 'هل أحتاج لتثبيت تطبيق خاص ؟',
      answer: 'لا، منصة رعاية تعمل مباشرة من خلال المتصفح. يمكنك الوصول إليها من أي جهاز كمبيوتر أو هاتف ذكي دون الحاجة لتحميل تطبيق.'
    },
    {
      id: '4',
      question: 'هل الأطباء الموجودين موثوقين ؟',
      answer: 'نعم، جميع الأطباء في منصة رعاية مرخصين ومعتمدين من الهيئات الصحية الرسمية. نتحقق من شهاداتهم وخبراتهم قبل إضافتهم للمنصة.'
    },
    {
      id: '5',
      question: 'هل يمكنني إلغاء أو تعديل موعد الحجز ؟',
      answer: 'نعم، يمكنك إلغاء أو تعديل مواعيدك بسهولة من خلال لوحة التحكم الخاصة بك. يرجى إشعارنا قبل 24 ساعة من الموعد.'
    },
    {
      id: '6',
      question: 'هل يمكننى أستخدام المنصة لحساب أحد أفراد الأسرة ؟',
      answer: 'نعم، يمكنك إدارة حسابات متعددة لأفراد عائلتك من حساب واحد. كل فرد سيكون له ملف صحي منفصل ومستقل.'
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-ibm-regular text-gray-700 mb-2">
            أسألة شائعة
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-ibm-bold text-[#246BFD]">
            أسألة متكررة
          </h3>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 md:space-y-6">
          {faqItems.map((item) => {
            const isOpen = openItems.has(item.id);
            
            return (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-4 md:p-6 text-right hover:bg-gray-50 transition-colors rounded-xl"
                >
                  <div className="flex items-center">
                    <svg
                      className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 text-gray-400 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base md:text-lg font-ibm-bold text-gray-700 pr-4">
                    {item.question}
                  </h4>
                </button>
                
                {isOpen && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-gray-600 font-ibm-regular leading-relaxed text-sm md:text-base pr-4">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 