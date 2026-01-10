import { CTAButton } from "@/components/ui/cta-button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PricingSection = () => {
  const content = useScrollAnimation(0.1, 150);

  return (
    <section className="py-20 md:py-28 border-y border-border">
      <div
        ref={content.ref}
        className={`section-container fade-in ${content.isVisible ? "visible" : ""}`}
      >
        <div className="surface-elevated border border-border rounded-2xl p-8 md:p-12 text-center max-w-xl mx-auto glow-soft">
          <h2 className="text-xl md:text-2xl font-semibold text-hero mb-6">
            Webinar Entry Fee
          </h2>

          <div className="mb-6">
            <span className="text-5xl md:text-6xl font-bold text-primary">₹47</span>
          </div>

          <p className="text-body mb-8">
            Sirf webinar access ke liye.
            <br />
            Ye course ya masterclass ka price nahi hai.
          </p>

          <CTAButton size="large" className="w-full md:w-auto">
            Pay ₹47 & Reserve My Seat
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
