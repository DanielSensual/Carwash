'use client';

import { useState } from 'react';
import { faqs } from '@/lib/content';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="relative py-24 sm:py-32 bg-zinc-950">
            <div className="mx-auto max-w-4xl px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        FAQ
                    </p>
                    <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-4xl text-white sm:text-5xl lg:text-6xl">
                        Common Questions
                    </h2>
                    <p className="mt-4 text-zinc-400 text-lg">
                        Everything you need to know before booking.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="mt-16 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-white/[0.05] bg-zinc-900/30 overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/[0.02]"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-medium text-white pr-4">{faq.question}</span>
                                <span className={`flex-shrink-0 h-8 w-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-cyan-500 border-cyan-500 rotate-180' : ''
                                    }`}>
                                    <svg
                                        className={`h-4 w-4 transition-colors ${openIndex === index ? 'text-black' : 'text-zinc-400'}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}>
                                <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
