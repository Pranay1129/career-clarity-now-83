import { CTAButton } from "@/components/ui/cta-button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTASection = () => {
  const content = useScrollAnimation(0.1, 100);

  const scrollToForm = () => {
    document.getElementById('reserve-seat')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28">
      <div
        ref={content.ref}
        className={`section-container text-center fade-up ${content.isVisible ? "visible" : ""}`}
      >
        <p className="text-xl md:text-2xl text-hero leading-relaxed mb-6">
          Aapki sabse badi problem job ka na milna nahi hai.
          <br />
          <span className="text-primary font-semibold">Sabse badi problem clarity ka na hona hai.</span>
        </p>

        <p className="text-body text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Is webinar ke baad hum job ka wada nahi karte,
          <br />
          lekin ye wada zaroor hai —
          <br />
          <span className="text-foreground font-medium">aap confusion me nahi rahoge.</span>
        </p>

        <CTAButton size="large" onClick={scrollToForm}>
          Haan, Mujhe Clarity Chahiye
        </CTAButton>
      </div>
    </section>
  );
};

export default FinalCTASection;
