import { useEffect, useRef, useState } from "react";

//테츠님 코드
export default function PracitceTimer() {
  const [render, setRender] = useState(0);
  const time = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      time.current = time.current + 1;
      console.log(time.current);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머 종료");
    };
  }, []);

  const showTime = () => {
    setRender(render + 1);
  };

  return (
    <>
      <h1>{time.current}</h1>
      <button onClick={showTime}>시간</button>
    </>
  );
}

//내 코드
// import { useEffect, useRef, useState } from "react";
// export default function PracitceTimer() {
//   const timeValue = useRef(0);
//   const [time, setTime] = useState(0);

//   const timeCheck = () => {
//     setTime(timeValue.current);
//   };
//   useEffect(() => {
//     const timer = setInterval(() => {
//       timeValue.current = timeValue.current + 1;
//       console.log(`타이머 실행중 ${timeValue.current}`);
//     }, 1000);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
//   return (
//     <>
//       <h1>{time}</h1>
//       <button onClick={timeCheck}>시간</button>
//     </>
//   );
// }
