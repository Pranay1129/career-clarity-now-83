import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const ValueSection = () => {
  const content = useScrollAnimation(0.1, 100);

  const valuePoints = [
    "Clear career options after graduation",
    "Industry reality vs social media hype",
    "IT & skill-based career paths explained",
    "Why most graduates stay stuck",
    "What to do next — and why",
  ];

  return (
    <section className="py-20 md:py-28">
      <div
        ref={content.ref}
        className={`section-container fade-in ${content.isVisible ? "visible" : ""}`}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-hero mb-8">
          What you'll gain from this webinar:
        </h2>

        <ul className="space-y-4 mb-10">
          {valuePoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-body text-lg">{point}</span>
            </li>
          ))}
        </ul>

        <div className="surface-elevated border border-border rounded-xl p-6 md:p-8">
          <p className="text-xl md:text-2xl font-semibold text-hero leading-relaxed">
            No theory.
            <br />
            No sugar-coated advice.
            <br />
            <span className="text-primary">Only ground reality.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
