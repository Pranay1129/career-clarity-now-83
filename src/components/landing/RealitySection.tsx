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
          Aap akele nahi ho is situation mein.
        </h2>

        <div className="text-body text-lg leading-relaxed space-y-6 mb-10">
          <p>
            Har saal lakhon students B.A / B.Sc complete karte hain.
            <br />
            Talent hai, mehnat bhi hai —
            <br />
            phir bhi aage ka raasta clear nahi hota.
          </p>

          <p>
            Ye aapki galti nahi hai.
            <br />
            Degree aur industry ke beech ek gap hai
            <br />
            jo college kabhi address nahi karta.
          </p>
        </div>

        <div className="surface-elevated border border-border rounded-xl p-6 md:p-8">
          <p className="text-xl md:text-2xl font-semibold text-hero leading-relaxed">
            "Problem degree nahi hai.
            <br />
            <span className="text-primary">Problem clarity ka na hona hai."</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealitySection;
