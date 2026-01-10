import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, X } from "lucide-react";

const AudienceSection = () => {
  const content = useScrollAnimation(0.1, 100);

  const forList = [
    "Degree ke baad ghar pe baithe ho",
    "Apply karte karte thak gaye ho",
    "Samajh nahi aa raha kya karna chahiye",
    "Motivational videos se nahi, clarity se kaam chalega",
  ];

  const notForList = [
    "Shortcut dhundhne wale",
    "Bina mehnat job chahiye wale",
    "Bas free cheezein chahiye wale",
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
