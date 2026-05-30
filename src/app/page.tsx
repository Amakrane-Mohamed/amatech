import { HeroVideoSection }    from "@/components/hero/hero-video-section";
import { SiteNavbar }          from "@/components/layout/site-navbar";
import { SiteFooter }          from "@/components/layout/site-footer";
import { MarqueeStrip }        from "@/components/sections/marquee-strip";
import { ServicesSection }     from "@/components/sections/services-section";
import { FeaturedWorkSection } from "@/components/sections/featured-work-section";
import { WhyAmaTechSection }   from "@/components/sections/why-amatech-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { AboutTeaserSection }  from "@/components/sections/about-teaser-section";
import { ContactCtaSection }   from "@/components/sections/contact-cta-section";
import { SocialProofSection }  from "@/components/sections/social-proof-section";

export default function Home() {
  return (
    <main className="relative">
      <SiteNavbar />
      <HeroVideoSection />
      <MarqueeStrip />
      <ServicesSection />
      <FeaturedWorkSection />
      <WhyAmaTechSection />
      <SocialProofSection />
      <TestimonialsSection />
      <AboutTeaserSection />
      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
