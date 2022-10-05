// import React from "react";
// function MainHeader(props) {
//   const { userID, text, href } = props;
//   return (
//     <div>
//       <h1>{userID} 님 반값습니다.</h1> <a href={href}>{text}</a>{" "}
//     </div>
//   );
// }
// export default MainHeader;
import React, { Component } from "react";
class MainHeader extends Component {
  render() {
    const { name, age, nickName } = this.props;
    return (
      <div>
        <h1>이름: {name}</h1> <h2>나이: {age}</h2> <h2>별명: {nickName}</h2>{" "}
      </div>
    );
  }
}
export default MainHeader;
