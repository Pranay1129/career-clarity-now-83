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
          Sach ye hai — aap akela nahi ho.
        </h2>

        <div className="text-body text-lg leading-relaxed space-y-6 mb-10">
          <p>
            Har saal lakhon students B.A / B.Sc complete karte hain.
            <br />
            Unme se zyada log talented hote hain,
            <br />
            lekin phir bhi job nahi milti.
          </p>

          <p>
            Iska reason ye nahi hai ki aap bekaar ho.
            <br />
            Reason ye hai ki degree aur industry ke beech gap hai.
          </p>
        </div>

        <div className="surface-elevated border border-border rounded-xl p-6 md:p-8">
          <p className="text-xl md:text-2xl font-semibold text-hero leading-relaxed">
            "Problem degree nahi hai.
            <br />
            <span className="text-primary">Problem bina skill aur direction ke aage badhna hai."</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealitySection;
