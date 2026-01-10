import { CTAButton } from "@/components/ui/cta-button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const headline = useScrollAnimation(0.1, 0);
  const subheadline = useScrollAnimation(0.1, 150);

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="section-container text-center">
        <div
          ref={headline.ref}
          className={`fade-up ${headline.isVisible ? "visible" : ""}`}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero leading-tight mb-6">
            Degree to ho gayi…
            <br />
            <span className="text-primary">par aage ka raasta clear nahi hai?</span>
          </h1>
        </div>

        <div
          ref={subheadline.ref}
          className={`fade-up ${subheadline.isVisible ? "visible" : ""}`}
        >
          <p className="text-lg md:text-xl text-body leading-relaxed max-w-2xl mx-auto mb-10">
            Ye koi motivational session nahi hai.
            <br />
            15+ saal ka industry experience rakne wale log
            <br />
            seedha baat karenge —
            <br />
            <span className="text-foreground font-medium">problem tum nahi ho, direction hai.</span>
          </p>

          <CTAButton size="large">
            Join the Career Reality Webinar
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
