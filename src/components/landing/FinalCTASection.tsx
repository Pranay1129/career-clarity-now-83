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
          We do <span className="text-primary font-semibold">NOT</span> promise jobs or placements.
        </p>

        <p className="text-primary font-medium mb-6">
          ⚠️ This webinar is designed to give clarity — not guarantees.
        </p>

        <div className="text-body text-lg leading-relaxed mb-6 max-w-xl mx-auto">
          <p className="mb-4">What we DO promise:</p>
          <p>✅ You will understand which direction suits you</p>
          <p>✅ Why you are currently stuck</p>
          <p>✅ What steps to take next — and why</p>
        </div>

        <p className="text-subtle text-base mb-10 max-w-xl mx-auto">
          No false hopes.
          <br />
          No exaggerated claims.
          <br />
          Only honest guidance.
        </p>

        <CTAButton size="large" onClick={scrollToForm}>
          Yes, I Want Clear Career Direction
        </CTAButton>
      </div>
    </section>
  );
};

export default FinalCTASection;
