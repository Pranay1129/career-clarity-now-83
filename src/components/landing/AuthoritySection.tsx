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
          Guidance jo college nahi deta
        </h2>

        <div className="text-body text-lg leading-relaxed space-y-6 mb-8">
          <p>
            Is webinar mein guidance milegi un professionals se
            <br />
            jinhone 15+ saal industry ke andar rehkar
            <br />
            <span className="text-primary font-medium">hiring, training aur career decisions dekhe hain.</span>
          </p>

          <p>
            Yahan theory nahi — ground reality batayi jaayegi.
            <br />
            Wo cheezein jo aapko koi nahi batata.
          </p>
        </div>

        <p className="text-subtle italic text-lg">
          "Advice har koi deta hai.
          <br />
          Direction sirf experience se aata hai."
        </p>
      </div>
    </section>
  );
};

export default AuthoritySection;
