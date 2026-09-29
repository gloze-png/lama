"use client";

import {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";

import { Icon } from "@iconify/react";

type FormDataState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<
  Record<keyof FormDataState, string>
>;

type FormStatus =
  | "idle"
  | "success"
  | "error";

const initialFormData: FormDataState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] =
    useState<FormDataState>(initialFormData);

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [statusMessage, setStatusMessage] =
    useState("");

  const handleChange = (
    event: ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name as keyof FormDataState]) {
      setErrors((previous) => ({
        ...previous,
        [name]: undefined,
      }));
    }

    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name =
        "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.subject) {
      newErrors.subject =
        "Please select the nature of your enquiry.";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Please provide some information about your enquiry.";
    } else if (
      formData.message.trim().length < 20
    ) {
      newErrors.message =
        "Please provide a little more information.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) return;

    setStatus("idle");
    setStatusMessage("");

    if (!validateForm()) {
      return;
    }

    const accessKey =
      process.env
        .NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setStatusMessage(
        "The contact form is not configured correctly. Please try again later."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const submission = new FormData();

      submission.append(
        "access_key",
        accessKey
      );

      submission.append(
        "name",
        formData.name.trim()
      );

      submission.append(
        "email",
        formData.email.trim()
      );

      submission.append(
        "phone",
        formData.phone.trim()
      );

      submission.append(
        "subject",
        formData.subject
      );

      submission.append(
        "message",
        formData.message.trim()
      );

      /*
       * This becomes the subject of the
       * notification email you receive.
       */
      submission.append(
        "from_name",
        "Zanan Legal Website"
      );

      submission.append(
        "botcheck",
        ""
      );

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: submission,
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Submission failed."
        );
      }

      setStatus("success");

      setStatusMessage(
        "Thank you. Your enquiry has been sent successfully. Our team will review your message."
      );

      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      console.error(
        "Contact form submission error:",
        error
      );

      setStatus("error");

      setStatusMessage(
        "We couldn't send your enquiry right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full border-0 border-b bg-transparent px-0 py-4 text-[15px] text-black outline-none transition-colors duration-300 placeholder:text-black/30 focus:border-brown";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full"
    >
      {/* Honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* NAME + EMAIL */}
      <div className="grid gap-8 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/50"
          >
            Your Name *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            aria-invalid={
              Boolean(errors.name)
            }
            aria-describedby={
              errors.name
                ? "name-error"
                : undefined
            }
            className={`${inputBase} ${
              errors.name
                ? "border-red-500"
                : "border-black/15"
            }`}
          />

          {errors.name && (
            <p
              id="name-error"
              className="mt-2 text-[11px] text-red-600"
            >
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/50"
          >
            Email Address *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            aria-invalid={
              Boolean(errors.email)
            }
            aria-describedby={
              errors.email
                ? "email-error"
                : undefined
            }
            className={`${inputBase} ${
              errors.email
                ? "border-red-500"
                : "border-black/15"
            }`}
          />

          {errors.email && (
            <p
              id="email-error"
              className="mt-2 text-[11px] text-red-600"
            >
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* PHONE + SUBJECT */}
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/50"
          >
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+234"
            className={`${inputBase} border-black/15`}
          />
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/50"
          >
            Nature of Enquiry *
          </label>

          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            aria-invalid={
              Boolean(errors.subject)
            }
            aria-describedby={
              errors.subject
                ? "subject-error"
                : undefined
            }
            className={`${inputBase} ${
              errors.subject
                ? "border-red-500"
                : "border-black/15"
            }`}
          >
            <option value="">
              Select an option
            </option>

            <option value="Corporate & Commercial Law">
              Corporate & Commercial Law
            </option>

            <option value="Dispute Resolution">
              Dispute Resolution
            </option>

            <option value="Real Estate & Property">
              Real Estate & Property
            </option>

            <option value="Banking & Finance">
              Banking & Finance
            </option>

            <option value="Intellectual Property">
              Intellectual Property
            </option>

            <option value="General Enquiry">
              General Enquiry
            </option>
          </select>

          {errors.subject && (
            <p
              id="subject-error"
              className="mt-2 text-[11px] text-red-600"
            >
              {errors.subject}
            </p>
          )}
        </div>
      </div>

      {/* MESSAGE */}
      <div className="mt-8">
        <label
          htmlFor="message"
          className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/50"
        >
          Tell Us About Your Matter *
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Provide a brief description of your enquiry..."
          aria-invalid={
            Boolean(errors.message)
          }
          aria-describedby={
            errors.message
              ? "message-error"
              : undefined
          }
          className={`${inputBase} resize-none ${
            errors.message
              ? "border-red-500"
              : "border-black/15"
          }`}
        />

        {errors.message && (
          <p
            id="message-error"
            className="mt-2 text-[11px] text-red-600"
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* LEGAL NOTICE */}
      <div className="mt-8 border-l-2 border-brown bg-off-white p-5">
        <div className="flex items-start gap-3">
          <Icon
            icon="solar:info-circle-linear"
            width="18"
            height="18"
            className="mt-0.5 shrink-0 text-brown"
          />

          <p className="text-[11px] leading-6 text-black/50">
            Sending an enquiry through this
            form does not automatically create
            a lawyer-client relationship. Please
            avoid submitting highly confidential
            information until the firm has
            confirmed that it can act in your
            matter.
          </p>
        </div>
      </div>

      {/* STATUS MESSAGE */}
      <div
        aria-live="polite"
        className="mt-5"
      >
        {status === "success" && (
          <div className="flex items-start gap-3 border border-green-700/20 bg-green-50 p-4">
            <Icon
              icon="solar:check-circle-linear"
              width="20"
              height="20"
              className="mt-0.5 shrink-0 text-green-700"
            />

            <div>
              <p className="text-[12px] font-semibold text-green-800">
                Enquiry sent successfully
              </p>

              <p className="mt-1 text-[11px] leading-6 text-green-700">
                {statusMessage}
              </p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-start gap-3 border border-red-700/20 bg-red-50 p-4">
            <Icon
              icon="solar:danger-circle-linear"
              width="20"
              height="20"
              className="mt-0.5 shrink-0 text-red-700"
            />

            <div>
              <p className="text-[12px] font-semibold text-red-800">
                Unable to send enquiry
              </p>

              <p className="mt-1 text-[11px] leading-6 text-red-700">
                {statusMessage}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SUBMIT BUTTON */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex min-w-47.5 items-center justify-center gap-4 bg-brown px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-dark-brown disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting
            ? "Sending..."
            : "Send Enquiry"}

          <Icon
            icon={
              isSubmitting
                ? "solar:refresh-linear"
                : "solar:arrow-right-up-linear"
            }
            width="18"
            height="18"
            className={
              isSubmitting
                ? "animate-spin"
                : "transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            }
          />
        </button>
      </div>
    </form>
  );
}