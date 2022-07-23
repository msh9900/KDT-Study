// let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
// let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];
// let same =[];
// let diff = [];

// same = fruits1.filter((item) => fruits2.includes(item));
// diff = fruits1.filter((item) => !fruits2.includes(item));

// console.log(same);
// console.log(diff);
// const userName = {
//       id: 1,
//       name: "tetz",
//     };
//     const userEmail = {
//       id: 1,
//       email: "xenosign@naver.com",
//     };
//     const assignedObj = Object.assign(userName, userEmail);
//     console.log(assignedObj);
//     console.log(userName);
//     console.log(assignedObj === userName);
//     const a = { po: "뽀로로" };
//     const b = { po: "뽀로로" };
//     console.log(a === b);
// const user = {
//       id: 1,
//       name: "tetz",
//       email: "xenosign@naver.com",
//     };
//     const keys = Object.keys(user);
//     console.log(keys);
//     // ["id", "name", "email"]
//     const values = keys.map((key) => user[key]);
//     console.log(values);
// const user = {
//       id: 1,
//       name: "tetz",
//       email: "xenosign@naver.com",
//     };
//     const { id, name, email, address } = user;
//     // 기본값 설정 const { id, name, email, address = "KOREA"} = user;
//     // 특정 변수에 넣기 const { id, name: tetz, email, address = "KOREA"} = user;
//     console.log(id);
//     console.log(name);
//     console.log(email);
//     console.log(address);
//     const fruits = ["사과", "딸기", "망고", "수박"];
//     const [a, b, c, d] = fruits;
//     console.log(a, b, c, d);
const fruits = ["사과", "바나나", "수박"];
console.log(fruits);
console.log(...fruits);
// console.log("사과", "바나나", "수박");
function conLog(a, b, c) {
  console.log(a, b, c);
}
conLog(fruits[0], fruits[1], fruits[2]);
conLog(...fruits);