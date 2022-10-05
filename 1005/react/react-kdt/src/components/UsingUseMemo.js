import { useEffect, useState } from "react";
export default function UsingUseMemo() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);
  const location = isKorea ? "한국" : "외국";
  useEffect(() => {
    console.log("✨ useEffect 호출!");
  }, [location]);
  return (
    <>
      <h1>숫자 증감</h1>{" "}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br /> <h1>Where are you?</h1> <h2>위치: {location}</h2>{" "}
      <button onClick={() => setIsKorea(!isKorea)}>나라 변경</button>{" "}
    </>
  );
}
