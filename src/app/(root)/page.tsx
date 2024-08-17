import BlogsSection from "@/components/sections/blogs";
import FAQSection from "@/components/sections/faq";
import FeaturesSection from "@/components/sections/features";
import FooterSection from "@/components/sections/footer";
import HeaderSection from "@/components/sections/header";
import ImageWithContentSection from "@/components/sections/image-with-content";
import LogoSection from "@/components/sections/logos";
import NotesSection from "@/components/sections/notes";
import PricingSection from "@/components/sections/pricing";
import ReviewsSection from "@/components/sections/reviews";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <LogoSection />
      <ImageWithContentSection />
      <FeaturesSection />
      <PricingSection />
      <ReviewsSection />
      <BlogsSection />
      <FAQSection />
      <NotesSection />
      <FooterSection />
    </>
  );
}
