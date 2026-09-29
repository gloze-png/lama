"use client";

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import { Icon } from "@iconify/react";

type FormDataState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

const initialFormData: FormDataState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const inputClasses =
  "block w-full border-b border-white/15 bg-transparent px-0 py-3.5 text-[13px] text-white outline-none transition-colors duration-300 placeholder:text-white/35 focus:border-light-brown";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] =
    useState<FormDataState>(initialFormData);

  const [status, setStatus] =
    useState<Status>("idle");

  const [message, setMessage] = useState("");

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open]);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (
      status === "error" ||
      status === "success"
    ) {
      setStatus("idle");
      setMessage("");
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (status === "sending") return;

    const accessKey =
      process.env
        .NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setMessage(
        "The chat service is not configured correctly."
      );
      return;
    }

    setStatus("sending");
    setMessage("");

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
        "message",
        formData.message.trim()
      );

      submission.append(
        "subject",
        "New Website Chat Enquiry"
      );

      submission.append(
        "from_name",
        "Zanan Legal Website"
      );

      submission.append("botcheck", "");

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
          data.message || "Unable to send message."
        );
      }

      setStatus("success");

      setMessage(
        "Thank you. Your message has been sent successfully."
      );

      setFormData(initialFormData);
    } catch (error) {
      console.error(
        "Chat submission error:",
        error
      );

      setStatus("error");

      setMessage(
        "We couldn't send your message. Please try again."
      );
    }
  };

  const handleOpen = () => {
    setOpen(true);

    if (status === "success") {
      setStatus("idle");
      setMessage("");
    }
  };

  return (
    <>
      {/* =========================
          FLOATING BUTTON
      ========================== */}
      <div className="fixed bottom-6 right-6 z-90 sm:bottom-8 sm:right-8">
        <button
          type="button"
          onClick={
            open
              ? () => setOpen(false)
              : handleOpen
          }
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label={
            open
              ? "Close contact chat"
              : "Open contact chat"
          }
          className="group relative flex h-14 w-14 items-center justify-center bg-brown text-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-dark-brown sm:h-16 sm:w-16"
        >
          {/* Pulse */}
          {!open && (
            <span
              className="absolute inset-0 animate-ping bg-brown/20"
              aria-hidden="true"
            />
          )}

          <Icon
            icon={
              open
                ? "solar:close-circle-linear"
                : "solar:chat-round-dots-linear"
            }
            width="25"
            height="25"
            className="relative z-10 transition-transform duration-300 group-hover:scale-110"
          />

          {/* Notification dot */}
          {!open && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
          )}
        </button>
      </div>

      {/* =========================
          CHAT WINDOW
      ========================== */}
      <div
        ref={popupRef}
        role="dialog"
        aria-modal="false"
        aria-label="Contact Zanan Legal Practitioners"
        aria-hidden={!open}
        className={`fixed bottom-24 right-4 z-89 w-[calc(100vw-32px)] max-w-97.5 overflow-hidden bg-black shadow-[0_25px_80px_rgba(0,0,0,0.28)] transition-all duration-500 sm:bottom-28 sm:right-8 ${
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "pointer-events-none invisible translate-y-5 scale-[0.97] opacity-0"
        }`}
      >
        {/* =========================
            HEADER
        ========================== */}
        <div className="relative overflow-hidden border-b border-white/10 px-6 pb-6 pt-7">
          {/* Decoration */}
          <div
            className="pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full border border-white/6"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-4 -top-5 h-20 w-20 rounded-full border border-brown/30"
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-start justify-between gap-5">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-6 bg-brown" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-light-brown">
                  Zanan Legal Practitioners
                </span>
              </div>

              <h2 className="text-[23px] font-medium tracking-tight text-white">
                How can we help?
              </h2>

              <div className="mt-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />

                <span className="text-[10px] text-white/40">
                  Send us an enquiry
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 text-white/60 transition-all duration-300 hover:border-brown hover:bg-brown hover:text-white"
            >
              <Icon
                icon="solar:close-circle-linear"
                width="19"
                height="19"
              />
            </button>
          </div>
        </div>

        {/* =========================
            CONTENT
        ========================== */}
        <div className="max-h-[65vh] overflow-y-auto px-6 py-6">
          {status === "success" ? (
            /* SUCCESS */
            <div className="py-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center border border-brown bg-brown/10 text-light-brown">
                <Icon
                  icon="solar:check-circle-linear"
                  width="27"
                  height="27"
                />
              </div>

              <h3 className="mt-6 text-[21px] font-medium text-white">
                Message received.
              </h3>

              <p className="mx-auto mt-3 max-w-67.5 text-[12px] leading-6 text-white/50">
                {message}
              </p>

              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setMessage("");
                }}
                className="mt-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-light-brown transition-colors hover:text-white"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <p className="mb-7 text-[12px] leading-6 text-white/50">
                Leave us a message and provide
                enough information for our team
                to understand your enquiry.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div>
                  <label
                    htmlFor="chat-name"
                    className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40"
                  >
                    Your Name
                  </label>

                  <input
                    id="chat-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    autoComplete="name"
                    className={inputClasses}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="chat-email"
                    className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40"
                  >
                    Email Address
                  </label>

                  <input
                    id="chat-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                    className={inputClasses}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="chat-phone"
                    className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40"
                  >
                    Phone Number
                  </label>

                  <input
                    id="chat-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234"
                    autoComplete="tel"
                    className={inputClasses}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="chat-message"
                    className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="chat-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we assist you?"
                    required
                    minLength={10}
                    rows={4}
                    className={`${inputClasses} min-h-27.5 resize-none`}
                  />
                </div>

                {/* Legal notice */}
                <p className="text-[9px] leading-5 text-white/30">
                  Please avoid sending highly
                  confidential information until
                  the firm confirms that it can
                  assist with your matter.
                </p>

                {/* Error */}
                {status === "error" && (
                  <div
                    aria-live="polite"
                    className="flex items-start gap-2 border border-red-400/20 bg-red-400/5 p-3"
                  >
                    <Icon
                      icon="solar:danger-circle-linear"
                      width="17"
                      height="17"
                      className="mt-0.5 shrink-0 text-red-400"
                    />

                    <p className="text-[10px] leading-5 text-red-300">
                      {message}
                    </p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex w-full items-center justify-center gap-3 bg-brown px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-dark-brown disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending"
                    ? "Sending..."
                    : "Send Message"}

                  <Icon
                    icon={
                      status === "sending"
                        ? "solar:refresh-linear"
                        : "solar:arrow-right-up-linear"
                    }
                    width="17"
                    height="17"
                    className={
                      status === "sending"
                        ? "animate-spin"
                        : "transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    }
                  />
                </button>
              </form>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 px-6 py-4">
          <p className="text-center text-[9px] uppercase tracking-[0.14em] text-white/25">
            Zanan Legal Practitioners
          </p>
        </div>
      </div>
    </>
  );
}