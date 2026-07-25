"use client";

import * as React from "react";
import { Send } from "lucide-react";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const ROLES = ["Parent", "Student", "Teacher", "Other"];

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [role, setRole] = React.useState("Parent");

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const phone = data.get("phone") || "";
    const subject = data.get("subject") || "";
    const message = data.get("message") || "";

    const body = [
      `Name: ${name}`,
      `Role: ${role}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject || `Enquiry from ${name} (${role})`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="mb-2 block text-sm font-semibold" htmlFor="role">
          I am a
        </label>
        <div className="flex flex-wrap gap-2">
          {ROLES.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              aria-pressed={role === r}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                role === r
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/80 hover:border-primary/40"
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold" htmlFor="phone">
            Phone{" "}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+965 …"
            className={fieldClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            placeholder="Year 11 Physics"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us the year group, school, subject and board, and what you would like help with."
          className={cn(fieldClass, "resize-y")}
        />
      </div>

      <button
        type="submit"
        className={cn(buttonVariants({ size: "lg" }), "h-11 self-start px-6")}
      >
        <Send className="size-4" />
        Send message
      </button>
    </form>
  );
}
