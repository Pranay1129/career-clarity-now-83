import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const RegistrationFormSection = () => {
  const content = useScrollAnimation(0.1, 100);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName.trim() && formData.mobile.trim()) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="reserve-seat" className="py-20 md:py-28">
      <div
        ref={content.ref}
        className={`section-container fade-in ${content.isVisible ? "visible" : ""}`}
      >
        <div className="surface-elevated border border-border rounded-2xl p-8 md:p-12 max-w-md mx-auto">
          {!isSubmitted ? (
            <>
              <h2 className="text-xl md:text-2xl font-semibold text-hero text-center mb-3">
                Reserve Your Seat
              </h2>
              <p className="text-subtle text-sm text-center mb-8">
                Fill these details to continue. Payment comes next.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-body text-sm">
                    Full Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="bg-background border-border focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-body text-sm">
                    Mobile Number <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="bg-background border-border focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-body text-sm">
                    Email Address <span className="text-subtle">(optional)</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="bg-background border-border focus:border-primary/50"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 rounded-lg transition-colors"
                >
                  Continue to Payment
                </Button>
              </form>

              <p className="text-subtle text-xs text-center mt-6">
                Your details will be used only for webinar communication.
              </p>
            </>
          ) : (
            <div className="text-center py-6">
              <h3 className="text-xl font-semibold text-hero mb-3">
                Seat almost reserved.
              </h3>
              <p className="text-body">
                Complete the payment to confirm your spot.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegistrationFormSection;
