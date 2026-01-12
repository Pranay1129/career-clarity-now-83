import { CTAButton } from "@/components/ui/cta-button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PricingSection = () => {
  const content = useScrollAnimation(0.1, 150);

  const scrollToForm = () => {
    document.getElementById('reserve-seat')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 border-y border-border">
      <div
        ref={content.ref}
        className={`section-container fade-in ${content.isVisible ? "visible" : ""}`}
      >
        <div className="surface-elevated border border-border rounded-2xl p-8 md:p-12 text-center max-w-xl mx-auto glow-soft">
          <h2 className="text-xl md:text-2xl font-semibold text-hero mb-6">
            Webinar Entry
          </h2>

          <div className="mb-6">
            <span className="text-2xl text-subtle line-through mr-3">₹399</span>
            <span className="text-5xl md:text-6xl font-bold text-primary">₹9</span>
          </div>

          <p className="text-primary font-medium mb-4">
            ⚠️ Limited-time access for serious learners only.
          </p>

          <p className="text-body mb-6">
            This is NOT a course or masterclass.
            <br />
            <span className="text-subtle text-sm">This fee ensures committed participation.</span>
          </p>

          <CTAButton size="large" className="w-full md:w-auto" onClick={scrollToForm}>
            Pay ₹9 & Reserve My Seat
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
