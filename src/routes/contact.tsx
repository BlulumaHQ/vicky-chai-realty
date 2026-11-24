import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vicky Chai | Richmond Real Estate" },
      {
        name: "description",
        content:
          "Connect with Richmond Realtor Vicky Chai for trusted bilingual real estate guidance across Greater Vancouver.",
      },
      { property: "og:title", content: "Contact Vicky Chai | Richmond Real Estate" },
      {
        property: "og:description",
        content:
          "Connect with Richmond Realtor Vicky Chai for trusted bilingual real estate guidance across Greater Vancouver.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [interest, setInterest] = useState<"buying" | "selling" | "valuation" | "investing">("buying");
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="container-luxe py-16 md:py-24 grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5">
          <div className="eyebrow mb-4">Contact</div>
          <h1 className="display text-4xl md:text-6xl">Let's start a conversation.</h1>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Share a few details and I'll personally get back to you within one
            business day. No pressure, no obligation.
          </p>

          <div className="mt-12 space-y-6">
            <div>
              <div className="eyebrow mb-1">Phone</div>
              <a href="tel:6047266802" className="link-underline text-lg">604.726.6802</a>
            </div>
            <div>
              <div className="eyebrow mb-1">Email</div>
              <a href="mailto:VickyChai@remax.net" className="link-underline text-lg">VickyChai@remax.net</a>
            </div>
            <div>
              <div className="eyebrow mb-1">Office</div>
              <p>RE/MAX Westcoast<br />110 – 6086 Russ Baker Way<br />Richmond, BC V7B 1B4</p>
            </div>
            <div>
              <div className="eyebrow mb-1">Languages</div>
              <p>English · 中文 (Mandarin)</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          {submitted ? (
            <div className="bg-secondary p-10 md:p-14 text-center">
              <div className="eyebrow mb-4">Thank You</div>
              <h2 className="display text-3xl">Message received.</h2>
              <p className="mt-5 text-muted-foreground">
                Vicky will personally reach out within one business day.
              </p>
            </div>
          ) : (
            <form
              className="bg-secondary p-8 md:p-12 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div>
                <label className="eyebrow block mb-3">I'm interested in</label>
                <div className="grid grid-cols-2 gap-2">
                  {(["buying", "selling", "valuation", "investing"] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setInterest(opt)}
                      className={`text-[0.78rem] uppercase tracking-[0.18em] py-3 border transition-colors ${
                        interest === opt
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border bg-transparent hover:border-primary"
                      }`}
                    >
                      {opt === "valuation" ? "Home Value" : opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="First name" name="first" required />
                <Field label="Last name" name="last" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Address (if requesting a valuation)" name="address" />
              <div>
                <label className="eyebrow block mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button type="submit" className="btn-luxe w-full">
                Send Message
              </button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to be contacted by Vicky Chai regarding
                your real estate inquiry.
              </p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow block mb-2">
        {label}
        {required && <span className="ml-1 text-destructive">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
