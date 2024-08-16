import BlogsSection from "@/components/sections/blogs";
import FeaturesSection from "@/components/sections/features";
import HeaderSection from "@/components/sections/header";
import ImageWithContentSection from "@/components/sections/image-with-content";
import LogoSection from "@/components/sections/logos";
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
    </>
  );
}
