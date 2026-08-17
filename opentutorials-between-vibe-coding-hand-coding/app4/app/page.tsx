"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [count, setCount] = useState<number>(0);

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
      }
    }

    fetchCounter();
  }, []);

  const handleIncrement = async () => {
    const nextCount = count + 1;
    setCount(nextCount);

    const { error } = await supabase
      .from("counter")
      .update({ value: nextCount })
      .eq("id", 1);

    if (error) {
      console.error("Error updating counter:", error);
    }
  };

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={handleIncrement}>+</button> {count}
    </div>
  );
}
