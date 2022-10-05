import "../style/TestCss.scss";

export default function TestCss() {
  return (
    <div className="component-root">
      <h1> h1태그입니다.</h1>
      <span>스펜 태그입니다!</span>
    </div>
  );
}

// const divStyle = {
//   backgroundColor: "orange",
// };
// const headingStyle = {
//   color: "blue",
// };
// const spanStyle = {
//   backgroundColor: "pink",
//   fontWeight: "700",
// };

// export default function TestCss() {
//   return (
//     <div className="component-root" style={divStyle}>
//       <h1 style={headingStyle}>인라인 방법으로 CSS 적용하기</h1>
//       <span style={spanStyle}>스펜 태그입니다!</span>
//     </div>
//   );
// }
