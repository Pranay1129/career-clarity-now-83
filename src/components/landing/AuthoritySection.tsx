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
          Guidance colleges don't provide.
        </h2>

        <div className="text-body text-lg leading-relaxed space-y-6 mb-8">
          <p>
            Is webinar mein guidance milegi un professionals se
            <br />
            jinhone <span className="text-primary font-medium">15+ years industry ke andar rehkar:</span>
          </p>

          <ul className="space-y-2 pl-4">
            <li>- Hiring dekhi hai</li>
            <li>- Training di hai</li>
            <li>- Real career decisions liye hain</li>
          </ul>
        </div>

        <div className="surface-elevated border border-border rounded-xl p-6 md:p-8">
          <p className="text-lg md:text-xl text-subtle italic leading-relaxed">
            "Advice har koi deta hai.
            <br />
            <span className="text-hero">Direction sirf experience se aati hai."</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
