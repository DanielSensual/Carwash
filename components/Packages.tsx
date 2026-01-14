import { packages } from '@/lib/content';

export default function Packages() {
    return (
        <section id="packages" className="relative py-24 sm:py-32 bg-zinc-950">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        Pricing
                    </p>
                    <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-4xl text-white sm:text-5xl lg:text-6xl">
                        Choose Your Package
                    </h2>
                    <p className="mt-4 text-zinc-400 text-lg">
                        Simple, transparent pricing. No hidden fees. Mobile service included.
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    {packages.map((pkg) => (
                        <article
                            key={pkg.name}
                            className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-500 ${pkg.popular
                                    ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent shadow-[0_0_60px_rgba(0,212,255,0.15)]'
                                    : 'border-white/[0.05] bg-zinc-900/30 hover:border-white/10'
                                }`}
                        >
                            {/* Popular badge */}
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex rounded-full bg-cyan-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Header */}
                            <div className="text-center">
                                <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-white">
                                    {pkg.name}
                                </h3>
                                <p className="mt-2 text-sm text-zinc-400">{pkg.description}</p>
                            </div>

                            {/* Price */}
                            <div className="mt-8 text-center">
                                <p className="font-[family-name:var(--font-bebas)] text-5xl text-white">
                                    {pkg.price}
                                </p>
                                <p className="mt-1 text-sm text-zinc-500">{pkg.duration}</p>
                            </div>

                            {/* Features */}
                            <ul className="mt-8 flex-1 space-y-4">
                                {pkg.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <svg className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-zinc-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href="#booking"
                                className={`mt-8 inline-flex items-center justify-center rounded-lg py-4 text-sm font-bold uppercase tracking-wider transition-all ${pkg.popular
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]'
                                        : 'border border-white/20 text-white hover:border-cyan-500/50 hover:bg-cyan-500/10'
                                    }`}
                            >
                                Book Now
                            </a>
                        </article>
                    ))}
                </div>

                {/* Note */}
                <p className="mt-12 text-center text-sm text-zinc-500">
                    * Prices may vary based on vehicle size and condition. SUVs and trucks may have additional charges.
                </p>
            </div>
        </section>
    );
}
