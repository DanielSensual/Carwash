import React from 'react';
import { services } from '@/lib/content';

const icons: Record<string, React.ReactNode> = {
    car: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
    ),
    seat: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    ),
    shield: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    ),
    sparkle: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
    ),
};

export default function Services() {
    return (
        <section id="services" className="relative py-24 sm:py-32 bg-zinc-950">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        Our Services
                    </p>
                    <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-4xl text-white sm:text-5xl lg:text-6xl">
                        What We Do Best
                    </h2>
                    <p className="mt-4 text-zinc-400 text-lg">
                        From quick washes to full paint corrections — we handle it all with obsessive attention to detail.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="mt-16 grid gap-6 md:grid-cols-2">
                    {services.map((service) => (
                        <article
                            key={service.id}
                            className="group relative rounded-2xl border border-white/[0.05] bg-zinc-900/50 p-8 transition-all duration-500 hover:border-cyan-500/30 hover:bg-zinc-900"
                        >
                            {/* Hover glow */}
                            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                                    {icons[service.icon]}
                                </div>

                                {/* Title & Description */}
                                <h3 className="mt-6 font-[family-name:var(--font-bebas)] text-2xl text-white">
                                    {service.name}
                                </h3>
                                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="mt-6 space-y-2">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                                            <svg className="h-4 w-4 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Price & Duration */}
                                <div className="mt-8 flex items-center justify-between border-t border-white/[0.05] pt-6">
                                    <div>
                                        <p className="text-2xl font-bold text-white">{service.startingPrice}</p>
                                        <p className="text-xs text-zinc-500">Starting price</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-zinc-300">{service.duration}</p>
                                        <p className="text-xs text-zinc-500">Estimated time</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
