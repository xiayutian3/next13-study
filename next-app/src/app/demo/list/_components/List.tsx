"use client";
import { type } from "os";
import React, { useEffect, useState } from "react";

type Item = {
  id: number;
  name: string;
}

export default function List() {
  const [data, setData] = useState<Item[]>([]);
  useEffect(() => {
    //请求数据 fetch
    fetch("/api/goods")
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [])

  return (
    <ul>
      {data.map((item: Item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
