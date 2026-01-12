import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, X } from "lucide-react";

const AudienceSection = () => {
  const content = useScrollAnimation(0.1, 100);

  const forList = [
    "B.A / B.Sc ke baad bhi ghar baithe ho",
    "Job apply kar-kar ke thak chuke ho",
    "Career ko leke confused ho",
    "Fake motivation se bore ho",
    "Real guidance chahte ho",
  ];

  const notForList = [
    "Shortcut chahte ho",
    "Bina mehnat job chahte ho",
    "Sirf free cheezon ke liye aate ho",
  ];

  return (
    <section className="py-20 md:py-28 border-y border-border">
      <div
        ref={content.ref}
        className={`section-container fade-in ${content.isVisible ? "visible" : ""}`}
      >
        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          <div>
            <h3 className="text-xl font-semibold text-hero mb-6">
              Ye webinar aapke liye hai agar:
            </h3>
            <ul className="space-y-4">
              {forList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-hero mb-6">
              Ye webinar aapke liye nahi hai agar:
            </h3>
            <ul className="space-y-4">
              {notForList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-subtle">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
