import { heroContent } from '@/lib/content';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/hero.png"
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
                {/* Overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
            </div>

            {/* Animated accent lines */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                <div className="absolute top-3/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-40">
                <div className="max-w-2xl">
                    {/* Eyebrow */}
                    <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        {heroContent.eyebrow}
                    </p>

                    {/* Heading */}
                    <h1 className="mt-8 font-[family-name:var(--font-bebas)] text-5xl leading-[0.9] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                        {heroContent.heading.split('.').map((part, i) => (
                            <span key={i} className={i === 0 ? 'block' : 'block text-cyan-400'}>
                                {part}{i === 0 ? '.' : ''}
                            </span>
                        ))}
                    </h1>

                    {/* Subheading */}
                    <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl">
                        {heroContent.subheading}
                    </p>

                    {/* CTAs */}
                    <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                        <a
                            href={heroContent.primaryCta.href}
                            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] hover:scale-[1.02]"
                        >
                            {heroContent.primaryCta.label}
                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href={heroContent.secondaryCta.href}
                            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10"
                        >
                            {heroContent.secondaryCta.label}
                        </a>
                    </div>

                    {/* Trust Stats */}
                    <div className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-8">
                        {heroContent.stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="font-[family-name:var(--font-bebas)] text-4xl text-white">
                                    {stat.value}
                                </p>
                                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-zinc-500">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500">
                <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
                <div className="h-12 w-px bg-gradient-to-b from-cyan-500 to-transparent animate-pulse" />
            </div>
        </section>
    );
}
