import React, { useState } from "react";

const FONT_LINK_ID = "outbox-fonts";
if (typeof document !== "undefined" && !document.getElementById(FONT_LINK_ID)) {
  const link = document.createElement("link");
  link.id = FONT_LINK_ID;
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap";
  document.head.appendChild(link);
}

const COLORS = {
  ink: "#1B2A4A",
  paper: "#F7F4EC",
  stamp: "#E8542E",
  green: "#4A7862",
  charcoal: "#232323",
  hairline: "#C9CBB8",
};

function PostmarkStamp({ size = 150 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: `3px solid ${COLORS.stamp}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: "rotate(-9deg)",
        color: COLORS.stamp,
        fontFamily: "'IBM Plex Mono', monospace",
        textAlign: "center",
        flexShrink: 0,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 8,
          borderRadius: "50%",
          border: `1px solid ${COLORS.stamp}`,
        }}
      />
      <div style={{ fontSize: size * 0.11, letterSpacing: 2, fontWeight: 500 }}>
        OUTBOX
      </div>
      <div
        style={{
          fontSize: size * 0.2,
          fontWeight: 600,
          margin: "2px 0",
          fontFamily: "'Fraunces', serif",
        }}
      >
        SENT
      </div>
      <div style={{ fontSize: size * 0.09, letterSpacing: 1 }}>NO. 001</div>
    </div>
  );
}

function LandingPage({ onLaunch }) {
  return (
    <div
      style={{
        background: COLORS.paper,
        color: COLORS.charcoal,
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 40px",
          borderBottom: `1px solid ${COLORS.hairline}`,
        }}
      >
        <div
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 700,
            fontSize: 22,
            color: COLORS.ink,
          }}
        >
          Outbox<span style={{ color: COLORS.stamp }}>.ai</span>
        </div>
        <button
          onClick={onLaunch}
          style={{
            background: COLORS.ink,
            color: COLORS.paper,
            border: "none",
            padding: "10px 20px",
            borderRadius: 4,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Open the app
        </button>
<a
  href="https://buy.stripe.com/3cI28r1DO30Q1dIfANgfu00"
  style={{
    background: COLORS.stamp,
    color: "#fff",
    textDecoration: "none",
    border: "none",
    padding: "10px 20px",
    borderRadius: 4,
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: 14,
    marginLeft: 12,
  }}
>
  Upgrade to Pro — $7/mo
</a>
      </nav>

      {/* Hero */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 40px",
          maxWidth: 1200,
          margin: "0 auto",
          gap: 48,
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: 560, flex: "1 1 400px" }}>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 13,
              letterSpacing: 1.5,
              color: COLORS.green,
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            Cold outreach, warmed up
          </div>
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.08,
              fontWeight: 700,
              color: COLORS.ink,
              margin: 0,
            }}
          >
            Emails that get opened, not archived.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "#4A4A44",
              marginTop: 24,
              maxWidth: 480,
            }}
          >
            Outbox.ai writes personalized cold emails from a single prospect
            detail and your offer. No templates that sound like everyone
            else's templates.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 32 }}>
            <button
              onClick={onLaunch}
              style={{
                background: COLORS.stamp,
                color: "#fff",
                border: "none",
                padding: "14px 28px",
                borderRadius: 4,
                fontWeight: 600,
                fontSize: 16,
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Write my first email →
            </button>
          </div>
          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 40,
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            {[
              ["3s", "avg. generation"],
              ["$7","per month,cancel anytime"],
              ["0", "templates reused"],
            ].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: 22, color: COLORS.ink, fontWeight: 500 }}>
                  {n}
                </div>
                <div style={{ fontSize: 12, color: "#7A7A70" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            maxWidth: 260,
          }}
        >
          <PostmarkStamp size={220} />
        </div>
      </section>

      {/* How it works */}
      <section
        style={{
          background: COLORS.ink,
          color: COLORS.paper,
          padding: "64px 40px",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 28,
              fontWeight: 600,
              marginBottom: 40,
            }}
          >
            How a letter gets written
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 32,
            }}
          >
            {[
              [
                "Tell it who you're writing to",
                "Their name, role, and company — whatever you know.",
              ],
              [
                "Tell it what you're offering",
                "Your product, in a sentence or two, plain language.",
              ],
              [
                "Pick a register",
                "Direct, warm, or matter-of-fact. Your call.",
              ],
              [
                "Get a draft, not a mystery",
                "Read it, edit it, send it. It's yours.",
              ],
            ].map(([title, body], i) => (
              <div key={title}>
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: COLORS.stamp,
                    fontSize: 13,
                    marginBottom: 8,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ fontWeight: 600, marginBottom: 6 }}>{title}</div>
                <div style={{ fontSize: 14, color: "#C7CEDD", lineHeight: 1.5 }}>
                  {body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: "32px 40px",
          fontSize: 13,
          color: "#8A8A80",
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        Outbox.ai — currently free while we learn what's worth paying for.
      </footer>
    </div>
  );
}

function AppView({ onBack }) {
  const [recipient, setRecipient] = useState("");
  const [offer, setOffer] = useState("");
  const [tone, setTone] = useState("direct");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    if (!recipient.trim() || !offer.trim()) {
      setError("Fill in who you're writing to and what you're offering.");
      return;
    }
    setError("");
    setLoading(true);
    setEmail("");
    try {
      const prompt = `Write a cold outreach email.

Recipient details: ${recipient}
What's being offered: ${offer}
Tone: ${tone}

Rules:
- Under 120 words.
- No generic openers like "I hope this finds you well."
- One clear, low-friction call to action.
- Plain language, specific to the recipient details given.
- Output only the email body text (no subject line, no explanation, no markdown).`;

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recipient, offer, tone }),
      });
      const data = await response.json();
      if (!data.email) throw new Error("empty");
      setEmail(data.email);
    } catch (e) {
      setError("Couldn't generate that one — try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 4,
    border: `1px solid ${COLORS.hairline}`,
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    background: "#fff",
    color: COLORS.charcoal,
    boxSizing: "border-box",
  };

  const labelStyle = {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 12,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: COLORS.green,
    display: "block",
    marginBottom: 6,
  };

  return (
    <div
      style={{
        background: COLORS.paper,
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        color: COLORS.charcoal,
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: `1px solid ${COLORS.hairline}`,
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: "none",
            border: "none",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 13,
            color: COLORS.ink,
            cursor: "pointer",
            padding: 0,
          }}
        >
          ← Outbox.ai
        </button>
        <div style={{ fontSize: 13, color: "#8A8A80", fontFamily: "'IBM Plex Mono', monospace" }}>
          beta — free
        </div>
      </nav>

      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "48px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
        }}
      >
        {/* Form */}
        <div>
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 26,
              color: COLORS.ink,
              marginTop: 0,
              marginBottom: 24,
            }}
          >
            Draft a letter
          </h1>

          <div style={{ marginBottom: 18 }}>
            <label style={labelStyle}>Who you're writing to</label>
            <textarea
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="e.g. Sam, Head of Growth at a Series A fintech startup"
              rows={2}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          <div style={{ marginBottom: 18 }}>
            <label style={labelStyle}>What you're offering</label>
            <textarea
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
              placeholder="e.g. An AI tool that writes cold emails from a one-line prospect description"
              rows={3}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Tone</label>
            <div style={{ display: "flex", gap: 8 }}>
              {["direct", "warm", "matter-of-fact"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 4,
                    border: `1px solid ${tone === t ? COLORS.ink : COLORS.hairline}`,
                    background: tone === t ? COLORS.ink : "#fff",
                    color: tone === t ? "#fff" : COLORS.charcoal,
                    fontSize: 13,
                    cursor: "pointer",
                    fontFamily: "'Inter', sans-serif",
                    textTransform: "capitalize",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div style={{ color: COLORS.stamp, fontSize: 13, marginBottom: 14 }}>
              {error}
            </div>
          )}

          <button
            onClick={generate}
            disabled={loading}
            style={{
              background: COLORS.stamp,
              color: "#fff",
              border: "none",
              padding: "13px 24px",
              borderRadius: 4,
              fontWeight: 600,
              fontSize: 15,
              cursor: loading ? "default" : "pointer",
              opacity: loading ? 0.7 : 1,
              width: "100%",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {loading ? "Writing…" : "Generate email"}
          </button>
        </div>

        {/* Output "letter" */}
        <div>
          <label style={labelStyle}>Your draft</label>
          <div
            style={{
              background: "#fff",
              border: `1px solid ${COLORS.hairline}`,
              borderRadius: 4,
              padding: 28,
              minHeight: 280,
              position: "relative",
              boxShadow: "0 2px 0 rgba(0,0,0,0.03)",
            }}
          >
            {!email && !loading && (
              <div style={{ color: "#B0B0A5", fontSize: 14, fontStyle: "italic" }}>
                Your generated email will appear here.
              </div>
            )}
            {loading && (
              <div style={{ color: "#B0B0A5", fontSize: 14 }}>
                Drafting your email…
              </div>
            )}
            {email && (
              <>
                <div
                  style={{
                    whiteSpace: "pre-wrap",
                    fontSize: 14.5,
                    lineHeight: 1.7,
                    color: COLORS.charcoal,
                  }}
                >
                  {email}
                </div>
                <button
                  onClick={copy}
                  style={{
                    marginTop: 20,
                    background: "none",
                    border: `1px solid ${COLORS.green}`,
                    color: COLORS.green,
                    padding: "8px 16px",
                    borderRadius: 4,
                    fontSize: 13,
                    cursor: "pointer",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {copied ? "Copied ✓" : "Copy email"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OutboxAI() {
  const [view, setView] = useState("landing");
  return view === "landing" ? (
    <LandingPage onLaunch={() => setView("app")} />
  ) : (
    <AppView onBack={() => setView("landing")} />
  );
}


