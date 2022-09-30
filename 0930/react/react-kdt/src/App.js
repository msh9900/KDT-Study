// import ReactFragment from "./components/ReactFragment";
// import TableColumn from "./components/TableColumn";
// import Comparing from "./components/Comparing";
// import Timer from "./components/Timer";
// import TestUseEffect from "./components/TestUseEffect";
import TestUseMemo from "./components/TestUseMemo";
import PracitceTimer from "./components/PracticeTimer";
import { useEffect, useState, useRef } from "react";

function App() {
  const [show, setShow] = useState(false);
  const changeFocus = useRef();

  useEffect(() => {
    changeFocus.current.focus();
  }, []);
  // const [show2, setShow2] = useState(false);
  // const [text, setText] = useState("보이기");
  // const bottonChange = () => {
  //   if (show2 === false) {
  //     setShow2(true);
  //     setText("숨기기");
  //   } else {
  //     setShow2(false);
  //     setText("보이기");
  //   }
  // };
  return (
    <div className="App">
      {/* {show && <Timer />} <button onClick={() => setShow(!show)}>버튼</button> */}
      {show && <PracitceTimer />}
      <button ref={changeFocus} onClick={() => setShow(!show)}>
        {show ? "숨기기" : "보이기"}
      </button>
      <TestUseMemo />
      {/* {show2 && <PracitceTimer />}{" "}
      <button onClick={bottonChange}>{text}</button>{" "} */}
    </div>
  );
}

export default App;

//조건부 렌더링 실습
// import { useState } from "react";
// import PracticeOne from "./components/PracticeOne";
// import PracticeTwo from "./components/PracticeTwo";

// function App() {
//   const [condition, setCondition] = useState(1);
//   const onChange = () => {
//     if (condition === 1) {
//       setCondition(2);
//     } else {
//       setCondition(1);
//     }
//   };

//   return (
//     <div className="App">
//       {condition === 1 ? (
//         <PracticeOne result={condition} />
//       ) : (
//         <PracticeTwo result={condition} />
//       )}

//       <button onClick={onChange}>{condition}</button>
//     </div>
//   );
// }
// export default App;

// 조건부 렌더링
// import { useState } from "react";
// import ConditionalRender from "./components/ConditionalRender";

// function App() {
//   const [condition, setCondition] = useState("보이기");
//   const onChange = () => {
//     condition === "보이기" ? setCondition("감추기") : setCondition("보이기");
//   };

//   return (
//     <div className="App">
//       {condition === "감추기" && <ConditionalRender />}
//       <button onClick={onChange}>{condition}</button>
//     </div>
//   );
// }
// export default App;

//styled-components 사용
// import styled, { keyframes } from "styled-components";
// import logo from "./logo.svg";

// function App() {
//   const logoAnimation = keyframes`
//   from {
//     transform: rotate(0deg);
//    }
//    to {
//     transform: rotate(360deg);
//    }
// `;
//   const RootDiv = styled.div`
//     text-align: center;
//   `;
//   const AppHeader = styled.header`
//     background-color: #282c34;
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-size: calc(10px + 2vmin);
//     color: white;
//   `;
//   const AppLogo = styled.img`
//     height: 40vmin;
//     pointer-events: none;
//     animation: ${logoAnimation} infinite 20s linear; ;
//   `;
//   const MyA = styled.a`
//     color: #61dafb;
//   `;

//   return (
//     <RootDiv>
//       {" "}
//       <AppHeader>
//         <AppLogo src={logo} alt="app" />{" "}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.{" "}
//         </p>{" "}
//         <MyA
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React{" "}
//         </MyA>{" "}
//       </AppHeader>{" "}
//     </RootDiv>
//   );
// }
// export default App;
