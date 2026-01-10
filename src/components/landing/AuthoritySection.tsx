import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AuthoritySection = () => {
  const content = useScrollAnimation(0.1, 100);

  return (
    <section className="py-20 md:py-28">
      <div
        ref={content.ref}
        className={`section-container fade-up ${content.isVisible ? "visible" : ""}`}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-hero mb-8">
          Wo guidance jo college nahi deta
        </h2>

        <div className="text-body text-lg leading-relaxed space-y-6 mb-8">
          <p>
            Ye webinar wo log lead kar rahe hain
            <br />
            jo 15+ saal se industry mein hain —
            <br />
            hiring ki hai, training di hai, decisions liye hain.
          </p>

          <p>
            Yahan koi theory nahi milegi.
            <br />
            <span className="text-foreground font-medium">Seedhi baat hogi — ground reality.</span>
          </p>
        </div>

        <p className="text-subtle italic text-lg">
          "Advice to sab dete hain…
          <br />
          direction sirf experience se milta hai."
        </p>
      </div>
    </section>
  );
};

export default AuthoritySection;
