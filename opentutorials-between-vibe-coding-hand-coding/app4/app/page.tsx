"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [yearEvent, setYearEvent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchEvent = async (year: number) => {
    setYearEvent("");
    setIsLoading(true);
    try {
      const res = await fetch("/api/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ year }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        setYearEvent((prev) => prev + decoder.decode(value));
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


