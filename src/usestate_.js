import { useState } from "react";

export default function APP_UseState() {
  const news = [
    { title: "標題1", content: "內容1" },
    { title: "標題2", content: "內容2" },
    { title: "標題3", content: "內容3" },
  ];
  const [index, setindex] = useState(0);
  const [isShow, setisShow] = useState(false);
  const hasNext = index < news.length - 1;
  function click() {
    console.log(hasNext);
    if (hasNext) {
      setindex(index + 1);
    } else {
      setindex(0);
    }
  }

  function hidden() {
    setisShow(!isShow);
  }
  return (
    <>
      {console.log(index)}
      <button onClick={click}>下一則</button>
      <h2>{news[index].title}</h2>
      <h3>
        {index + 1}/{news.length}
      </h3>
      <button onClick={hidden}>{isShow ? "隱藏" : "顯示"}内容</button>
      <h2>{isShow && news[index].content}</h2>
      <APP_UseState2 />
    </>
  );
}

function APP_UseState2() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");
  function click(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`you said ${message} to ${to}`);
    }, 5000);
  }
  return (
    <form onSubmit={click}>
      <label>
        To:{" "}
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit">Send</button>
    </form>
  );
}
