"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      {/* 아래 버튼을 클릭했을 때 count가 1씩 증가한다. */}
      <input 
        type="button" 
        value="+" 
        onClick={() => {
          setCount(count + 1);
        }}
      />
      {/* count 데이터가 아래의 숫자 자리에 표시된다. */}
      {count}
    </div>
  );
}
