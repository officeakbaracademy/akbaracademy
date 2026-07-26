"use client";

import * as React from "react";
import { Send, Loader2, Check, X } from "lucide-react";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const ROLES = ["Parent", "Student", "Teacher", "Other"];

// Underline inputs read as crafted/editorial rather than the generic filled pill.
const fieldClass =
  "w-full border-0 border-b border-border bg-transparent px-0.5 py-2 text-[15px] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

const textareaClass =
  "w-full rounded-md border border-border bg-transparent px-3.5 py-3 text-[15px] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary resize-y";

export function ContactForm() {
  const [role, setRole] = React.useState("Parent");
  const [sending, setSending] = React.useState(false);
  const [toast, setToast] = React.useState(null); // { ok, msg }
  const timerRef = React.useRef(null);

  // Show a toast and auto-dismiss it after a while.
  const showToast = React.useCallback((t) => {
    setToast(t);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToast(null), 6000);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    const key = site.web3formsKey;
    if (!key || key.startsWith("YOUR_")) {
      showToast({
        ok: false,
        msg: "The form isn't connected yet. Please message us on WhatsApp.",
      });
      return;
    }

    setSending(true);
    const data = new FormData(form);
    data.append("role", role);
    data.append("replyto", data.get("email"));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        showToast({ ok: true, msg: "Message sent. We will get back to you soon." });
        form.reset();
        setRole("Parent");
      } else {
        showToast({
          ok: false,
          msg: "Something went wrong. Please try WhatsApp or email.",
        });
      }
    } catch {
      showToast({ ok: false, msg: "Network error. Please try again." });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Web3Forms metadata */}
        <input type="hidden" name="from_name" value="Akbar Academy website" />
        <input
          type="hidden"
          name="subject"
          value="New enquiry from the Akbar Academy contact form"
        />
        {/* Simple honeypot to cut spam */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label className="mb-2 block text-sm font-semibold">I am a</label>
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
              <span className="font-normal text-muted-foreground">
                (optional)
              </span>
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
            <label className="mb-2 block text-sm font-semibold" htmlFor="topic">
              Subject
            </label>
            <input
              id="topic"
              name="topic"
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
            className={textareaClass}
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 self-start px-6",
            sending && "opacity-70"
          )}
        >
          {sending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="size-4" />
              Send message
            </>
          )}
        </button>
      </form>

      {/* Toast */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-[60] flex max-w-xs items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-lg shadow-black/10"
        >
          <span
            className={cn(
              "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
              toast.ok
                ? "bg-primary/15 text-primary"
                : "bg-red-500/15 text-red-500"
            )}
          >
            {toast.ok ? (
              <Check className="size-3.5" />
            ) : (
              <X className="size-3.5" />
            )}
          </span>
          <p className="text-sm text-foreground">{toast.msg}</p>
        </div>
      )}
    </>
  );
}
