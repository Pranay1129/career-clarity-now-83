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
  const [errors, setErrors] = useState({
    fullName: "",
    mobile: "",
  });

  const validateMobile = (mobile: string): string => {
    const cleanedMobile = mobile.replace(/\s/g, "");
    
    if (!cleanedMobile) {
      return "Mobile number is required";
    }
    
    if (!/^\d+$/.test(cleanedMobile)) {
      return "Please enter only digits (0-9)";
    }
    
    if (cleanedMobile.length < 10) {
      return `Enter ${10 - cleanedMobile.length} more digit${10 - cleanedMobile.length > 1 ? 's' : ''}`;
    }
    
    if (cleanedMobile.length > 10) {
      return "Mobile number must be exactly 10 digits";
    }
    
    if (!/^[6-9]\d{9}$/.test(cleanedMobile)) {
      return "Enter a valid Indian mobile number (starts with 6-9)";
    }
    
    return "";
  };

  const validateFullName = (name: string): string => {
    if (!name.trim()) {
      return "Full name is required";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const fullNameError = validateFullName(formData.fullName);
    const mobileError = validateMobile(formData.mobile);
    
    setErrors({
      fullName: fullNameError,
      mobile: mobileError,
    });
    
    if (!fullNameError && !mobileError) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error on change
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleMobileBlur = () => {
    const error = validateMobile(formData.mobile);
    setErrors((prev) => ({ ...prev, mobile: error }));
  };

  const handleNameBlur = () => {
    const error = validateFullName(formData.fullName);
    setErrors((prev) => ({ ...prev, fullName: error }));
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
                Fill in your details to continue.
                <br />
                <span className="text-primary">👉 Payment comes next.</span>
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
                    onBlur={handleNameBlur}
                    placeholder="Enter your full name"
                    className={`bg-background border-border focus:border-primary/50 ${errors.fullName ? 'border-destructive' : ''}`}
                  />
                  {errors.fullName && (
                    <p className="text-destructive text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-body text-sm">
                    Mobile Number <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    onBlur={handleMobileBlur}
                    placeholder="Enter 10-digit mobile number"
                    className={`bg-background border-border focus:border-primary/50 ${errors.mobile ? 'border-destructive' : ''}`}
                  />
                  {errors.mobile && (
                    <p className="text-destructive text-xs mt-1">{errors.mobile}</p>
                  )}
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
                🔒 Your details will be used only for webinar communication.
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
