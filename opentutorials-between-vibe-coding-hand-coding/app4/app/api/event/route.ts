import { createGateway, streamText } from "ai";

// NEXT_PUBLIC_ 접두사가 붙은 변수는 클라이언트 번들에 인라인되므로 사용하지 않는다.
const gateway = createGateway({ apiKey: process.env.AI_GATEWAY_API_KEY });

export async function POST(req: Request) {
  if (!process.env.AI_GATEWAY_API_KEY) {
    console.error("AI_GATEWAY_API_KEY가 설정되지 않았습니다.");
    return Response.json(
      { error: "AI Gateway API Key가 설정되지 않았습니다." },
      { status: 500 },
    );
  }

  try {
    const { year } = await req.json();
    const result = streamText({
      model: gateway("openai/gpt-4o-mini"),
      prompt: `${year}년에 있었던 중요한 사건`,
    });
    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Error in /api/event:", error);
    return Response.json(
      { error: "Failed to generate event stream" },
      { status: 500 },
    );
  }
}
