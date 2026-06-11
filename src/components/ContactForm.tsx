import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(10, "Tell me a bit more (10+ chars)").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const WA_NUMBER = "917353680966";

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(values);
    if (!res.success) {
      const errs: Errors = {};
      res.error.issues.forEach((i) => {
        const k = i.path[0] as keyof Errors;
        if (!errs[k]) errs[k] = i.message;
      });
      setErrors(errs);
      setStatus("err");
      toast.error("Please fix the highlighted fields");
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const text = `Hi Kusha, I saw your project on your portfolio. I'm ${res.data.name} (${res.data.email}).\n\n${res.data.message}`;
      const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("ok");
      toast.success("Opening WhatsApp — your message is ready to send.");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("err");
      toast.error("Something went wrong. Please email Kushnr192@gmail.com");
    }
  };

  const field = (k: keyof typeof values) => ({
    value: values[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [k]: e.target.value }));
      if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
    },
    "aria-invalid": !!errors[k],
    "aria-describedby": errors[k] ? `${k}-err` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 text-left max-w-xl mx-auto mt-10">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-xs uppercase tracking-[0.18em] text-muted-ink">Name</label>
          <input id="name" type="text" autoComplete="name" required maxLength={80}
            {...field("name")}
            className="mt-2 w-full px-4 py-3 rounded-xl bg-surface border border-hairline text-foreground placeholder:text-muted-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue transition"
            placeholder="Your name" />
          {errors.name && <p id="name-err" className="text-xs text-destructive mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-xs uppercase tracking-[0.18em] text-muted-ink">Email</label>
          <input id="email" type="email" autoComplete="email" required maxLength={160}
            {...field("email")}
            className="mt-2 w-full px-4 py-3 rounded-xl bg-surface border border-hairline text-foreground placeholder:text-muted-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue transition"
            placeholder="you@company.com" />
          {errors.email && <p id="email-err" className="text-xs text-destructive mt-1">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-[0.18em] text-muted-ink">Message</label>
        <textarea id="message" required maxLength={1000} rows={5}
          value={values.message}
          onChange={(e) => { setValues((v) => ({ ...v, message: e.target.value })); if (errors.message) setErrors((er) => ({ ...er, message: undefined })); }}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-err" : undefined}
          className="mt-2 w-full px-4 py-3 rounded-xl bg-surface border border-hairline text-foreground placeholder:text-muted-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue transition resize-none"
          placeholder="What are you building?" />
        {errors.message && <p id="message-err" className="text-xs text-destructive mt-1">{errors.message}</p>}
      </div>
      <button type="submit" disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent-blue text-primary-foreground text-sm font-medium hover:opacity-90 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue disabled:opacity-60 transition">
        {status === "sending" ? <><Loader2 className="size-4 animate-spin" />Sending…</> : <><Send className="size-4" />Send message</>}
      </button>
      <p role="status" aria-live="polite" className="text-xs text-muted-ink text-center min-h-4">
        {status === "ok" && "Thanks — WhatsApp opened with your message pre-filled."}
      </p>
    </form>
  );
}
