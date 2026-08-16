"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // DB에서 counter 테이블의 모든 행의 value 합계 조회
  const fetchCount = async () => {
    try {
      const { data, error } = await supabase.from("counter").select("value");

      if (error) {
        console.error("Failed to fetch count:", error.message);
        return;
      }

      if (data) {
        const totalSum = data.reduce((acc, row) => acc + (row.value || 0), 0);
        setCount(totalSum);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  const handleIncrement = async () => {
    try {
      const { error } = await supabase.from("counter").insert([{ value: 1 }]);

      if (error) {
        console.error("Failed to update db:", error.message);
        return;
      }

      setCount((prev) => prev + 1);
    } catch (err) {
      console.error("Unexpected error on increment:", err);
    }
  };

  return (
    <main className="counter-card">
      <h1>Counter</h1>
      {/* count 데이터가 아래의 숫자 자리에 표시된다. */}
      <p className="counter-value" aria-live="polite">
        {isLoading ? "..." : count}
      </p>
      <p className="counter-label">Total Clicks</p>
      {/* 아래 버튼을 클릭했을 때 count가 1씩 증가한다. */}
      <input
        type="button"
        className="counter-button"
        value="+"
        aria-label="카운트 1 증가"
        onClick={handleIncrement}
        disabled={isLoading}
      />
    </main>
  );
}
