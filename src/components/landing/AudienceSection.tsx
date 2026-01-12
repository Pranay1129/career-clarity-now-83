import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AudienceSection = () => {
  const content = useScrollAnimation(0.1, 100);

  const forYouPoints = [
    "You've completed B.A / B.Sc but are still unemployed",
    "You're tired of applying for jobs without results",
    "You feel confused about your career direction",
    "You are done with fake motivation",
    "You want honest, practical guidance",
  ];

  const notForYouPoints = [
    "You are looking for shortcuts",
    "You expect a job without effort",
    "You attend sessions only for free content",
  ];

  return (
    <section className="py-20 md:py-28 border-y border-border">
      <div
        ref={content.ref}
        className={`section-container fade-in ${content.isVisible ? "visible" : ""}`}
      >
        {/* For You Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-hero mb-6">
            This webinar is for you if:
          </h2>
          <ul className="space-y-3">
            {forYouPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-body text-lg">
                <span className="text-primary flex-shrink-0">✅</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not For You Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-hero mb-6">
            This webinar is NOT for you if:
          </h2>
          <ul className="space-y-3">
            {notForYouPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-subtle text-lg">
                <span className="text-red-400 flex-shrink-0">❌</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
