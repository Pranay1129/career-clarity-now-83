import { CTAButton } from "@/components/ui/cta-button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const headline = useScrollAnimation(0.1, 0);
  const subheadline = useScrollAnimation(0.1, 150);

  const scrollToForm = () => {
    document.getElementById('reserve-seat')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="section-container text-center">
        <div
          ref={headline.ref}
          className={`fade-up ${headline.isVisible ? "visible" : ""}`}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero leading-tight mb-6">
            Degree complete ho chuki hai.
            <br />
            <span className="text-primary">But career still stuck?</span>
          </h1>

          <p className="text-lg md:text-xl text-body mb-4">
            You're not confused.
            <br />
            You're just missing the right direction.
          </p>
        </div>

        <div
          ref={subheadline.ref}
          className={`fade-up ${subheadline.isVisible ? "visible" : ""}`}
        >
          <p className="text-body leading-relaxed max-w-2xl mx-auto mb-8">
            Ye webinar motivation nahi hai.
            <br />
            Yahan aapko samjhaya jaayega ki problem aapme nahi —
            <br />
            <span className="text-primary font-medium">problem direction me hai.</span>
          </p>

          <div className="flex flex-col items-center gap-4 mb-10">
            <p className="text-body text-sm">
              👉 Industry ke professionals ke saath
            </p>
            <p className="text-body text-sm">
              👉 Real career clarity session
            </p>
            <p className="text-body text-sm">
              👉 No fake promises
            </p>
          </div>

          <CTAButton size="large" onClick={scrollToForm}>
            Join the Career Reality Webinar
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
