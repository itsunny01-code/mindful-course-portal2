import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Courses } from "@/components/Courses";
import { Certifications } from "@/components/Certifications";
import { Training } from "@/components/Training";
import { Testimonials } from "@/components/Testimonials";
import { UpcomingWebinars } from "@/components/UpcomingWebinars";
import { CounselingSection } from "@/components/CounselingSection";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Courses />
      <UpcomingWebinars />
      <CounselingSection />
      <Certifications />
      <Training />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;