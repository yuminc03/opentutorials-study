import { createGateway, streamText } from "ai";

const gateway = createGateway({
  apiKey:
    process.env.AI_GATEWAY_API_KEY ||
    process.env.NEXT_PUBLIC_AI_GATEWAY_API_KEY,
});


export async function POST(req: Request) {
  try {
    const { year } = await req.json();
    const result = streamText({
      model: gateway("openai/gpt-4o-mini"),
      prompt: `${year}년에 있었던 중요한 사건`,
    });
    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Error in /api/event:", error);
    return new Response(JSON.stringify({ error: "Failed to generate event stream" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
