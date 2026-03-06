'use client';

import { useState } from 'react';

interface FAQ {
    question: string;
    answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="divide-y divide-border">
            {faqs.map((faq, index) => (
                <div key={index}>
                    <button
                        onClick={() => toggle(index)}
                        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                        aria-expanded={openIndex === index}
                    >
                        <span className="font-semibold text-text-dark pr-2">
                            {faq.question}
                        </span>
                        <span
                            className={`text-primary text-xl flex-shrink-0 transition-transform duration-200 ${
                                openIndex === index ? 'rotate-45' : ''
                            }`}
                        >
                            +
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === index
                                ? 'max-h-[1000px] opacity-100'
                                : 'max-h-0 opacity-0'
                        }`}
                    >
                        <div
                            className="px-6 pb-5 text-text leading-relaxed prose prose-sm max-w-none prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
