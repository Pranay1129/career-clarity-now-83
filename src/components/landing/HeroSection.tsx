import { CTAButton } from "@/components/ui/cta-button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const content = useScrollAnimation(0.1, 100);

  const scrollToForm = () => {
    document.getElementById('reserve-seat')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center py-16 md:py-24">
      <div
        ref={content.ref}
        className={`section-container text-center fade-up ${content.isVisible ? "visible" : ""}`}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-hero leading-tight mb-6">
          Degree completed.
          <br />
          But career still stuck?
        </h1>

        <p className="text-lg md:text-xl text-body leading-relaxed mb-6">
          You're not confused.
          <br />
          <span className="text-primary">👉 You're just missing the right direction.</span>
        </p>

        <p className="text-body text-base md:text-lg leading-relaxed mb-6">
          <span className="text-primary">⚠️ This is NOT a motivation webinar.</span>
          <br /><br />
          Here, you'll understand one simple truth:
          <br />
          The problem is not you —
          <br />
          <span className="text-primary font-medium">the problem is direction.</span>
        </p>

        <div className="flex flex-col items-center gap-2 text-body text-base mb-10">
          <span>✅ Real industry insights</span>
          <span>✅ Clear career direction</span>
          <span>✅ No fake promises</span>
        </div>

        <CTAButton size="large" onClick={scrollToForm}>
          Join the Career Reality Webinar
        </CTAButton>
      </div>
    </section>
  );
};

export default HeroSection;
