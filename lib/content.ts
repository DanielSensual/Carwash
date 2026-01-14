// Site configuration and content for Auto Detailing template
export const siteConfig = {
    name: 'OBSIDIAN Detailing',
    tagline: 'Precision Detailing. Showroom Results.',
    description: 'Premium auto detailing and ceramic coating services. We bring showroom-quality results to your driveway. Mobile detailing available.',
    phone: '(407) 555-0234',
    email: 'book@obsidiandetailing.com',
    address: 'Mobile Service Available\nOrlando Metro Area, FL',
    hours: [
        { day: 'Monday - Friday', time: '7:00 AM - 6:00 PM' },
        { day: 'Saturday', time: '8:00 AM - 5:00 PM' },
        { day: 'Sunday', time: 'By Appointment' },
    ],
    social: {
        instagram: 'https://instagram.com/obsidiandetailing',
        facebook: 'https://facebook.com/obsidiandetailing',
        tiktok: 'https://tiktok.com/@obsidiandetailing',
    },
    bookingUrl: 'https://calendly.com',
    serviceArea: ['Orlando', 'Winter Park', 'Lake Nona', 'Dr. Phillips', 'Windermere', 'Celebration'],
} as const;

export const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Packages', href: '#packages' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
] as const;

export const heroContent = {
    eyebrow: 'PREMIUM AUTO DETAILING',
    heading: 'Your Car. Our Obsession.',
    subheading: 'We don\'t just clean cars — we restore them to showroom perfection. Ceramic coatings, paint correction, and meticulous interior detailing. Mobile service available.',
    primaryCta: { label: 'Get a Quote', href: '#booking' },
    secondaryCta: { label: 'View Services', href: '#services' },
    stats: [
        { value: '500+', label: 'Cars Detailed' },
        { value: '5★', label: 'Google Rating' },
        { value: '100%', label: 'Satisfaction' },
    ],
} as const;

export const services = [
    {
        id: 'exterior',
        name: 'Exterior Detail',
        description: 'Complete exterior restoration including hand wash, clay bar treatment, polish, and sealant protection.',
        icon: 'car',
        features: ['Hand Wash & Dry', 'Clay Bar Decontamination', 'One-Step Polish', 'Sealant Protection', 'Tire & Trim Dressing'],
        startingPrice: '$150',
        duration: '2-3 hours',
    },
    {
        id: 'interior',
        name: 'Interior Detail',
        description: 'Deep interior cleaning and conditioning. Every surface cleaned, conditioned, and protected.',
        icon: 'seat',
        features: ['Full Vacuum & Steam Clean', 'Leather Conditioning', 'Plastic & Trim Restoration', 'Glass Cleaning', 'Air Freshener'],
        startingPrice: '$125',
        duration: '2-3 hours',
    },
    {
        id: 'ceramic',
        name: 'Ceramic Coating',
        description: 'Professional-grade ceramic protection that lasts years. Hydrophobic, scratch-resistant, UV protection.',
        icon: 'shield',
        features: ['Paint Correction', 'Surface Decontamination', 'Ceramic Pro Application', '2-5 Year Protection', 'Hydrophobic Finish'],
        startingPrice: '$599',
        duration: '1-2 days',
    },
    {
        id: 'correction',
        name: 'Paint Correction',
        description: 'Remove swirl marks, scratches, and oxidation. Restore your paint to better-than-new condition.',
        icon: 'sparkle',
        features: ['Multi-Stage Polish', 'Swirl Removal', 'Scratch Removal', 'Gloss Enhancement', 'Paint Depth Readings'],
        startingPrice: '$350',
        duration: '4-8 hours',
    },
] as const;

export const packages = [
    {
        name: 'Essential Wash',
        description: 'Perfect for regular maintenance. Keep your car looking fresh between full details.',
        price: '$75',
        duration: '1 hour',
        features: [
            'Hand Wash & Dry',
            'Wheel Cleaning',
            'Tire Dressing',
            'Window Cleaning',
            'Interior Wipe Down',
        ],
        popular: false,
    },
    {
        name: 'Full Detail',
        description: 'Our most popular package. Complete interior and exterior transformation.',
        price: '$275',
        duration: '4-5 hours',
        features: [
            'Everything in Essential',
            'Clay Bar Treatment',
            'One-Step Polish',
            'Deep Interior Clean',
            'Leather Conditioning',
            'Engine Bay Clean',
        ],
        popular: true,
    },
    {
        name: 'Showroom',
        description: 'The ultimate detail. Paint correction, ceramic coating, and premium protection.',
        price: '$899+',
        duration: '1-2 days',
        features: [
            'Everything in Full Detail',
            'Two-Stage Paint Correction',
            'Ceramic Coating (2yr)',
            'Interior Ceramic Coating',
            'Wheel Ceramic Coating',
            'Glass Coating',
        ],
        popular: false,
    },
] as const;

export const galleryItems = [
    { id: 1, category: 'Exterior', title: 'Black BMW Paint Correction', image: '/images/hero.png' },
    { id: 2, category: 'Before/After', title: 'Full Detail Transformation', image: '/images/before-after.png' },
    { id: 3, category: 'Interior', title: 'Luxury Interior Detail', image: '/images/interior.png' },
    { id: 4, category: 'Ceramic', title: 'Ceramic Coating Application', image: '/images/hero.png' },
] as const;

export const testimonials = [
    {
        name: 'Marcus T.',
        vehicle: '2023 BMW M4',
        rating: 5,
        quote: 'Absolutely blown away by the results. My M4 looks better than when I picked it up from the dealer. The ceramic coating is incredible — water just beads right off. Worth every penny.',
        image: '/images/hero.png',
    },
    {
        name: 'Jessica R.',
        vehicle: '2022 Tesla Model Y',
        rating: 5,
        quote: 'I\'ve tried other detailers but OBSIDIAN is on another level. They came to my house, spent 5 hours making my Tesla look brand new, and the attention to detail is unmatched.',
        image: '/images/interior.png',
    },
    {
        name: 'David K.',
        vehicle: '2021 Porsche 911',
        rating: 5,
        quote: 'As a car enthusiast, I\'m very particular about who touches my 911. These guys are professionals. The paint correction removed all the swirl marks the previous owner left behind.',
        image: '/images/hero.png',
    },
] as const;

export const faqs = [
    {
        question: 'Do you come to me or do I drop off?',
        answer: 'We offer both! Mobile detailing is our specialty — we come to your home or office with everything we need. For ceramic coatings and paint correction, we recommend our shop for optimal conditions.',
    },
    {
        question: 'How long does a full detail take?',
        answer: 'A full interior and exterior detail typically takes 4-5 hours. Paint correction adds 4-8 hours depending on the vehicle\'s condition. Ceramic coatings require 1-2 days for proper curing.',
    },
    {
        question: 'How often should I detail my car?',
        answer: 'We recommend a full detail every 3-4 months and a maintenance wash every 2-4 weeks. With ceramic coating, you can extend the time between full details significantly.',
    },
    {
        question: 'What\'s the difference between wax and ceramic coating?',
        answer: 'Wax lasts 1-3 months and provides basic protection. Ceramic coating bonds to your paint at the molecular level, lasting 2-5 years with superior hydrophobic properties, UV protection, and scratch resistance.',
    },
    {
        question: 'Do you work on all vehicle types?',
        answer: 'Absolutely! We detail everything from daily drivers to exotic supercars, trucks, SUVs, and even boats and RVs. Pricing may vary based on vehicle size.',
    },
    {
        question: 'What products do you use?',
        answer: 'We use only premium, professional-grade products including Ceramic Pro, Gyeon, and Koch Chemie. No cheap consumer products — only the best for your vehicle.',
    },
] as const;

export const bookingContent = {
    heading: 'Ready for Showroom Shine?',
    subheading: 'Get a free quote in minutes. We\'ll text you back within the hour.',
    features: [
        'Free, no-obligation quotes',
        'Mobile service to your location',
        'Flexible scheduling',
        'Satisfaction guaranteed',
    ],
} as const;
