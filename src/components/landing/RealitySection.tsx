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
            Talent bhi hota hai, mehnat bhi hoti hai —
            <br />
            phir bhi career ka raasta clear nahi hota.
          </p>

          <p className="text-primary font-medium">
            Ye aapki galti nahi hai.
          </p>

          <p>
            College degree deta hai,
            <br />
            par industry direction nahi batata.
          </p>
        </div>

        <div className="surface-elevated border border-border rounded-xl p-6 md:p-8">
          <p className="text-xl md:text-2xl font-semibold text-hero leading-relaxed">
            The problem is NOT your degree.
          </p>
          <p className="text-body text-lg mt-4 leading-relaxed">
            Problem hai <span className="text-primary font-medium">lack of clarity</span> —
            <br />
            industry kya chahti hai
            <br />
            aur aap kya kar rahe ho,
            <br />
            us gap ko koi explain nahi karta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealitySection;
