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
          Hum job ka wada nahi karte.
          <br />
          Lekin ye zaroor hai —
          <br />
          <span className="text-primary font-semibold">confusion khatam hoga.</span>
        </p>

        <p className="text-body text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Is webinar ke baad aapko pata hoga:
          <br />
          - Aage kya karna hai
          <br />
          - Aur kyun karna hai
        </p>

        <CTAButton size="large" onClick={scrollToForm}>
          Yes, I Want Career Clarity
        </CTAButton>
      </div>
    </section>
  );
};

export default FinalCTASection;
