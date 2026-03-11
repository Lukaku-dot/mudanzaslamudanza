import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import QuoteForm from "@/components/QuoteForm";
import CoverageArea from "@/components/CoverageArea";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <CTASection />
        <QuoteForm />
        <CoverageArea />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
