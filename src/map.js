import { useState } from "react";

export default function Map1() {
  const initialproducts = [
    { id: 1, name: "iphone15promax", count: 0 },
    { id: 2, name: "HUAWEIMate60", count: 0 },
    { id: 3, name: "SamsungGalaxyS22", count: 0 },
    { id: 4, name: "OnePlus9Pro", count: 0 },
    { id: 5, name: "Xiaomi14Pro", count: 0 },
  ];
  const [map1, setMap1] = useState(initialproducts);
  function clickAdd(index) {
    const num = map1.map((c, i) => {
      if (i === index) {
        return { ...c, count: c.count + 1 };
      } else {
        return c;
      }
    });
    setMap1(num);
  }
  function clickSub(index) {
    const num = map1.map((c, i) => {
      if (i === index) {
        return { ...c, count: c.count - 1 };
      } else {
        return c;
      }
    });
    num = num.filter((c) => c.count > 0);
    setMap1(num);
  }
  return (
    <url>
      {map1.map((c, i) => (
        <li key={i}>
          {c.id}. {c.name} {c.count}
          <button onClick={() => clickAdd(i)}>编辑</button>
          <button onClick={() => clickAdd(i)}>+</button>
          <button onClick={() => clickSub(i)}>-</button>
        </li>
      ))}
    </url>
  );
}
