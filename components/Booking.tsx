import { bookingContent, siteConfig } from '@/lib/content';

export default function Booking() {
    return (
        <section id="booking" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background effects */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] via-transparent to-blue-500/[0.02]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan-500/[0.05] blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left: Content */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                            Get Started
                        </p>
                        <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-4xl text-white sm:text-5xl lg:text-6xl">
                            {bookingContent.heading}
                        </h2>
                        <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
                            {bookingContent.subheading}
                        </p>

                        {/* Features */}
                        <ul className="mt-8 space-y-4">
                            {bookingContent.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20">
                                        <svg className="h-3.5 w-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="text-zinc-300">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Service Area */}
                        <div className="mt-10 pt-8 border-t border-white/[0.05]">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4">
                                Service Areas
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {siteConfig.serviceArea.map((area) => (
                                    <span
                                        key={area}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Booking Form */}
                    <div className="relative">
                        <div className="rounded-2xl border border-white/[0.08] bg-zinc-900/80 backdrop-blur-sm p-8 shadow-2xl">
                            <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-white text-center">
                                Get Your Free Quote
                            </h3>
                            <p className="mt-2 text-center text-zinc-400 text-sm">
                                We&apos;ll text you back within the hour
                            </p>

                            <form className="mt-8 space-y-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-600 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                                            placeholder="John Smith"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-600 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="vehicle" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                                        Vehicle
                                    </label>
                                    <input
                                        type="text"
                                        id="vehicle"
                                        className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-600 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                                        placeholder="2023 BMW M4"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                                        Service Interested In
                                    </label>
                                    <select
                                        id="service"
                                        className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                                    >
                                        <option value="" className="bg-zinc-900">Select a service...</option>
                                        <option value="essential" className="bg-zinc-900">Essential Wash ($75)</option>
                                        <option value="full" className="bg-zinc-900">Full Detail ($275)</option>
                                        <option value="showroom" className="bg-zinc-900">Showroom Package ($899+)</option>
                                        <option value="ceramic" className="bg-zinc-900">Ceramic Coating</option>
                                        <option value="correction" className="bg-zinc-900">Paint Correction</option>
                                        <option value="other" className="bg-zinc-900">Other / Custom</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                                        Notes (Optional)
                                    </label>
                                    <textarea
                                        id="notes"
                                        rows={3}
                                        className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-600 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors resize-none"
                                        placeholder="Any specific concerns or requests?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-[1.01]"
                                >
                                    Get My Free Quote
                                </button>
                            </form>

                            <p className="mt-6 text-center text-xs text-zinc-500">
                                We never share your info. Response guaranteed within 1 hour during business hours.
                            </p>
                        </div>

                        {/* Decorative elements */}
                        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
