'use client';

import { useState } from 'react';
import { siteConfig, navLinks } from '@/lib/content';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05] bg-black/80 backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3 group">
                    <div className="relative h-10 w-10 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20 group-hover:opacity-40 transition-opacity" />
                        <span className="font-[family-name:var(--font-bebas)] text-2xl text-white">O</span>
                    </div>
                    <span className="font-[family-name:var(--font-bebas)] text-xl tracking-wider text-white">
                        {siteConfig.name}
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-cyan-400"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="flex items-center gap-4">
                    <a
                        href="#booking"
                        className="hidden sm:inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:scale-[1.02]"
                    >
                        Get Quote
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-white"
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-white/[0.05] bg-black/95 backdrop-blur-xl">
                    <nav className="flex flex-col px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-zinc-400 hover:text-cyan-400 transition-colors py-2"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#booking"
                            onClick={() => setMobileMenuOpen(false)}
                            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white mt-2"
                        >
                            Get Quote
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
