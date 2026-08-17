"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { createGateway, streamText } from "ai";

const AI_GATEWAY_API_KEY =
  process.env.NEXT_PUBLIC_AI_GATEWAY_API_KEY || "";

const gateway = createGateway({ apiKey: AI_GATEWAY_API_KEY });

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [yearEvent, setYearEvent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchEvent = async (year: number) => {
    if (!AI_GATEWAY_API_KEY) {
      setYearEvent("AI Gateway API Key가 설정되지 않았습니다 (.env.local의 NEXT_PUBLIC_AI_GATEWAY_API_KEY 확인).");
      return;
    }
    setYearEvent("");
    setIsLoading(true);
    try {
      const { textStream } = streamText({
        model: gateway("openai/gpt-4o-mini"),
        prompt: `${year}년에 있었던 중요한 사건`,
      });

      for await (const chunk of textStream) {
        setYearEvent((prev) => prev + chunk);
      }
    } catch (error) {
      console.error("Error streaming event:", error);
      setYearEvent("사건을 불러오는 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function fetchCounter() {
      const { data, error } = await supabase
        .from("counter")
        .select("value")
        .eq("id", 1)
        .maybeSingle();

      if (error) {
        console.error("Error fetching counter:", error);
      } else if (data) {
        setCount(data.value);
        fetchEvent(data.value);
      }
    }

    fetchCounter();
  }, []);

  const handleIncrement = async () => {
    const nextCount = count + 1;
    setCount(nextCount);
    fetchEvent(nextCount);

    const { error } = await supabase
      .from("counter")
      .update({ value: nextCount })
      .eq("id", 1);

    if (error) {
      console.error("Error updating counter:", error);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Counter</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <button
          onClick={handleIncrement}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1.25rem",
            cursor: "pointer",
          }}
        >
          +
        </button>
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{count}년</span>
      </div>

      <div style={{ borderTop: "1px solid #ccc", paddingTop: "1rem" }}>
        <h2>{count}년의 주요 역사적 사건</h2>
        {isLoading && !yearEvent && <p>불러오는 중...</p>}
        <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>{yearEvent}</p>
      </div>
    </div>
  );
}

