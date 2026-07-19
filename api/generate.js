export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { recipient, offer, tone } = req.body || {};

  if (!recipient || !offer) {
    return res.status(400).json({ error: "Missing recipient or offer" });
  }

  const prompt = `Write a cold outreach email.

Recipient details: ${recipient}
What's being offered: ${offer}
Tone: ${tone || "direct"}

Rules:
- Under 120 words.
- No generic openers like "I hope this finds you well."
- One clear, low-friction call to action.
- Plain language, specific to the recipient details given.
- Output only the email body text (no subject line, no explanation, no markdown).`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", errText);
      return res.status(500).json({ error: "Failed to generate email" });
    }

    const data = await response.json();
    const text = (data.content || [])
      .map((b) => b.text || "")
      .join("\n")
      .trim();

    return res.status(200).json({ email: text });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
