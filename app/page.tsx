import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Packages from '@/components/Packages';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Packages />
        <Testimonials />
        <FAQ />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
