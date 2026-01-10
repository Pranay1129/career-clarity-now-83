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
          Guidance jo college kabhi nahi deta
        </h2>

        <div className="text-body text-lg leading-relaxed space-y-6 mb-8">
          <p>
            Is webinar ko wo professionals lead kar rahe hain
            <br />
            jinhone 15+ saal industry ke andar rehkar
            <br />
            hiring, training aur career decisions dekhe hain.
          </p>

          <p>
            Yahan theory nahi,
            <br />
            <span className="text-foreground font-medium">ground reality batayi jaayegi.</span>
          </p>
        </div>

        <p className="text-subtle italic text-lg">
          "Advice har koi deta hai,
          <br />
          direction sirf experience deta hai."
        </p>
      </div>
    </section>
  );
};

export default AuthoritySection;
