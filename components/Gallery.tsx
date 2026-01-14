import Image from 'next/image';
import { galleryItems } from '@/lib/content';

export default function Gallery() {
    return (
        <section id="gallery" className="relative py-24 sm:py-32">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-cyan-500/[0.03] blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        Our Work
                    </p>
                    <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-4xl text-white sm:text-5xl lg:text-6xl">
                        Before & After Gallery
                    </h2>
                    <p className="mt-4 text-zinc-400 text-lg">
                        See the transformations for yourself. Every detail matters.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {galleryItems.map((item, index) => (
                        <article
                            key={item.id}
                            className={`group relative overflow-hidden rounded-2xl ${index === 1 ? 'sm:col-span-2 sm:row-span-2' : ''
                                }`}
                        >
                            <div className={`relative ${index === 1 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                {/* Content */}
                                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                                    <span className="inline-block rounded-full bg-cyan-500/20 border border-cyan-500/30 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-cyan-400">
                                        {item.category}
                                    </span>
                                    <h3 className="mt-2 font-[family-name:var(--font-bebas)] text-lg text-white sm:text-xl">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Hover icon */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="https://instagram.com/obsidiandetailing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        See more on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
}
