import Image from 'next/image';
import { testimonials } from '@/lib/content';

export default function Testimonials() {
    return (
        <section id="reviews" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
                <div className="absolute bottom-0 right-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/[0.03] blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        Reviews
                    </p>
                    <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-4xl text-white sm:text-5xl lg:text-6xl">
                        What Our Clients Say
                    </h2>
                    <p className="mt-4 text-zinc-400 text-lg">
                        Don&apos;t take our word for it — here&apos;s what car owners are saying.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <article
                            key={testimonial.name}
                            className="group relative rounded-2xl border border-white/[0.05] bg-zinc-900/30 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.vehicle}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative p-6 -mt-8">
                                {/* Rating */}
                                <div className="flex gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="h-4 w-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Vehicle */}
                                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-cyan-400">
                                    {testimonial.vehicle}
                                </p>

                                {/* Quote */}
                                <blockquote className="mt-4 text-sm text-zinc-300 leading-relaxed">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </blockquote>

                                {/* Author */}
                                <p className="mt-4 font-medium text-white">— {testimonial.name}</p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Trust indicators */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-center">
                    <div className="flex items-center gap-2 text-zinc-400">
                        <svg className="h-6 w-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C8.686 0 6 2.686 6 6c0 2.482 1.51 4.61 3.661 5.52A6.003 6.003 0 006 16.5c0 3.314 2.686 6 6 6s6-2.686 6-6a6.003 6.003 0 00-3.661-4.98C16.49 10.61 18 8.482 18 6c0-3.314-2.686-6-6-6zm0 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 10.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z" />
                        </svg>
                        <span className="text-sm font-medium">Google 5-Star Rating</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                        <svg className="h-6 w-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">500+ Cars Detailed</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                        <svg className="h-6 w-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium">100% Satisfaction</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
