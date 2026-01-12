import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhatsAppSupportSection = () => {
  const content = useScrollAnimation(0.1, 100);

  const whatsappNumber = "919311851783";
  const prefilledMessage = encodeURIComponent(
    "Hi, I have a question regarding the Career Reality Webinar."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;

  return (
    <section className="py-12">
      <div
        ref={content.ref}
        className={`section-container text-center fade-in ${content.isVisible ? "visible" : ""}`}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 border border-border rounded-lg text-body hover:border-primary/50 hover:text-hero transition-colors"
        >
          Webinar related questions?
          <br />
          Chat with us on WhatsApp
        </a>
        <p className="text-subtle text-xs mt-3">
          No sales.
          <br />
          Only genuine guidance.
        </p>
      </div>
    </section>
  );
};

export default WhatsAppSupportSection;
