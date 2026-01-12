import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const content = useScrollAnimation(0.1, 100);

  return (
    <footer className="py-12 border-t border-border">
      <div
        ref={content.ref}
        className={`section-container text-center fade-in ${content.isVisible ? "visible" : ""}`}
      >
        <p className="text-subtle text-sm">
          An initiative by Mera Server
          <br />
          <span className="text-primary">⭐</span> 15+ years of industry experience
        </p>
      </div>
    </footer>
  );
};

export default Footer;
