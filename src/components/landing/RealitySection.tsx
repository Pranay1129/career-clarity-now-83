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
          Ek baat samajh lo — tum akele nahi ho.
        </h2>

        <div className="text-body text-lg leading-relaxed space-y-6 mb-10">
          <p>
            Har saal lakhon bachche B.A / B.Sc karte hain.
            <br />
            Bohot se talented bhi hote hain…
            <br />
            phir bhi job nahi milti.
          </p>

          <p>
            Iska matlab ye nahi ki tum kuch kar nahi sakte.
            <br />
            Matlab ye hai ki degree aur job ke beech ek gap hai.
          </p>
        </div>

        <div className="surface-elevated border border-border rounded-xl p-6 md:p-8">
          <p className="text-xl md:text-2xl font-semibold text-hero leading-relaxed">
            "Degree problem nahi hai.
            <br />
            <span className="text-primary">Bina direction ke aage badhna — wahi problem hai."</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealitySection;
