import { CTAButton } from "@/components/ui/cta-button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTASection = () => {
  const content = useScrollAnimation(0.1, 100);

  return (
    <section className="py-20 md:py-28">
      <div
        ref={content.ref}
        className={`section-container text-center fade-up ${content.isVisible ? "visible" : ""}`}
      >
        <p className="text-xl md:text-2xl text-hero leading-relaxed mb-6">
          Tumhari asli problem job nahi milna nahi hai.
          <br />
          <span className="text-primary font-semibold">Asli problem hai — clarity nahi hai.</span>
        </p>

        <p className="text-body text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Iske baad job milegi — ye hum nahi kehte.
          <br />
          Lekin itna zaroor hai —
          <br />
          <span className="text-foreground font-medium">confusion mein nahi rahoge.</span>
        </p>

        <CTAButton size="large">
          Haan, Mujhe Clarity Chahiye
        </CTAButton>
      </div>
    </section>
  );
};

export default FinalCTASection;
