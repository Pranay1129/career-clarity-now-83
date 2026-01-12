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
          Guidance colleges do not provide.
        </h2>

        <div className="text-body text-lg leading-relaxed space-y-6 mb-8">
          <p>
            This webinar is led by professionals
            <br />
            with <span className="text-primary font-medium">⭐ 15+ years of industry experience</span> who have:
          </p>

          <ul className="space-y-2 pl-4">
            <li>• Seen real hiring decisions</li>
            <li>• Trained freshers and professionals</li>
            <li>• Helped people choose the right career direction</li>
          </ul>
        </div>

        <div className="surface-elevated border border-border rounded-xl p-6 md:p-8">
          <p className="text-lg md:text-xl text-subtle italic leading-relaxed">
            "Advice is common.
            <br />
            <span className="text-primary font-medium">👉 Direction comes from experience."</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
