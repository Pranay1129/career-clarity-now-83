import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const RealitySection = () => {
  const content = useScrollAnimation(0.1, 100);

  return (
    <section className="py-20 md:py-28">
      <div
        ref={content.ref}
        className={`section-container fade-in ${content.isVisible ? "visible" : ""}`}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-hero mb-8">
          You are not alone in this situation.
        </h2>

        <div className="text-body text-lg leading-relaxed space-y-6 mb-10">
          <p>
            Every year, lakhs of students complete B.A / B.Sc.
            <br />
            They have talent.
            <br />
            They work hard.
          </p>

          <p>
            Still, their career path remains unclear.
          </p>

          <p className="text-primary font-medium">
            👉 This is NOT your fault.
          </p>

          <p>
            College gives degrees,
            <br />
            but it does not explain how the industry actually works.
          </p>
        </div>

        <div className="surface-elevated border border-border rounded-xl p-6 md:p-8">
          <p className="text-xl md:text-2xl font-semibold text-hero leading-relaxed mb-4">
            <span className="text-primary">⭐</span> The problem is NOT your degree.
          </p>
          <p className="text-body text-lg leading-relaxed">
            The real problem is <span className="text-primary font-medium">lack of clarity</span> —
            <br />
            • What the industry wants
            <br />
            • What you are preparing for
          </p>
          <p className="text-primary font-medium mt-4">
            👉 This gap is rarely explained to graduates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealitySection;
