// //테츠님이 구현한거
// import { useState } from "react";

// export default function ChangeObj(props) {
//   const [index, changeIndex] = useState(0);
//   let obj = props.objArr[index];
//   const onChange = () => {
//     if (index === props.objArr.length - 1) {
//       changeIndex(0);
//     } else {
//       changeIndex(index + 1);
//     }
//     obj = props.objArr[index];
//   };

//   return (
//     <div>
//       <h1>이름: {obj.name}</h1>
//       <h1>나이: {obj.age}</h1>
//       <h1>별명: {obj.nickName}</h1>
//       <button onClick={onChange}>체인지</button>
//     </div>
//   );
// }

//내가 구현한거
import { useState } from "react";

export default function ChangeObj(props) {
  const [change, setChange] = useState(0);
  const ChangeClick = () => {
    if (change === props.pororoObj.length - 1) {
      setChange(0);
    } else {
      setChange(change + 1);
    }
  };
  return (
    <div>
      <div>{props.pororoObj[change].name}</div>
      <div>{props.pororoObj[change].age}</div>
      <div>{props.pororoObj[change].nickName}</div>

      <button onClick={ChangeClick}>변경하기</button>
    </div>
  );
}
