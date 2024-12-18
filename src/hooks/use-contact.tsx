import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  message: string;
  email: string;
  terms: boolean;
}

interface FormErrors {
  message?: string;
  email?: string;
  terms?: string;
}

const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    message: "",
    email: "",
    terms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Validate terms
    if (!formData.terms) {
      newErrors.terms = "You must accept the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));

    // Clear the specific error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id as keyof FormErrors];
        return newErrors;
      });
    }
  };

  // const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { id, value, type } = e.currentTarget;

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [id]: type === "checkbox"
  //       ? (e.currentTarget as HTMLInputElement).checked
  //       : value,
  //   }));

  //   // Clear the specific error when user starts typing
  //   if (errors[id as keyof FormErrors]) {
  //     setErrors(prev => {
  //       const newErrors = { ...prev };
  //       delete newErrors[id as keyof FormErrors];
  //       return newErrors;
  //     });
  //   }
  // };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Example API call
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      // Reset form after successful submission
      setFormData({
        message: "",
        email: "",
        terms: false,
      });

      // Optional: show success message
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      // Optional: show error message
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
  };
};

export default useContactForm;
