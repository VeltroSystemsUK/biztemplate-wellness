import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import InteractiveMenu from "@/components/InteractiveMenu";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import ReviewsSlider from "@/components/ReviewsSlider";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <InteractiveMenu />
      <BeforeAfterGallery />
      <ReviewsSlider />
      <SiteFooter />
    </>
  );
}
