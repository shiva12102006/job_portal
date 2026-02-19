export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await fetch("https://openrouter.Ai/ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Job Portal AI",
      },
      body: JSON.stringify({
        model: "openchat/openchat-7b",
        messages: [
          { role: "user", content: message }
        ],
      }),
    });

    const textResponse = await response.text();
    console.log("RAW RESPONSE:", response);
    // const data = JSON.parse(textResponse);
    if (!response.ok) {
      return Response.json({ error: textResponse }, { status: 500 });
    }

    const data = JSON.parse(textResponse);

    return Response.json({
      reply: data.choices[0].message.content,
    });

  } catch (error) {
    console.error("OpenRouter Error:", error);
    return Response.json({ error: "AI failed" }, { status: 500 });
  }
}
