// let num = 1;
// let str = "이효석";
// let bool = true;
// let undef = undefined;
// let nul = null;
// let arr = [1, 2, 3];
// let obj = {
//      num: 1,
//      str: "String"
// }
// console.log(typeof num + " isn't " + typeof str + " data type ");
// console.log("typeof " + typeof bool + "이나 "+ typeof null + "에 사용하면, "+typeof obj +" 결과를 얻을 수 있습니다.");

// let mathScore = "77";
// let engScore = "88";
// mathScore =Number(mathScore);
// engScore =Number(engScore);
// let avgScore = (mathScore + engScore) / 2;

// console.log(avgScore);

// let nameArr = ["강유림", "강지훈", "강한솔","김윤비"];
// let i = 0;
// for(i; i<nameArr.length; i++){
//     console.log(`${i+1} 번째 이름은 ${nameArr[i]} 입니다`);
//     console.log(i);
// }
// let name = "뽀로로";
// let age = 16;
// let isAdult = age >19;

// if(isAdult){
//     console.log("통과!");
// }
// else{
//     console.log("돌아가!")
// }
// 여성이고, 이름이 Jane 이거나 성인이면 통과
// let gender = "M";
// let name = "Tom";
// let isAdult = true;
// if(gender === "F" && name === "Jane" || isAdult === true) {
//  console.log("통과");
// } else {
//  console.log("돌아가");
// }
// let a = prompt("숫자를 입력 하시오!");
// a = Number(a);
// for(a; a<10001; a++)
// {
//     if(a % 13=== 0)
//     {
//         if(a % 2 === 1){
//             console.log("홀수")
//             break;
//         }
//         else{
//             console.log("짝수")
//             break;
//         }
//     }
//     else{
//         console.log("13의 배수가 아님");
//         break;
//     }
// }

// 구구단 while 버전
// let result = 0;
// for(let i=1; i<=1000;i++){
//     if(i % 2 ===0){
//         result += i;
//         continue;
//     }
// }
// console.log(result);
// function square(number1,number2){
//     return (number1 * number2) /2
// }
// function circle(number1){
//     return Math.PI * number1**2
// }
// function ptg(number1,number2){
//     return number1**2 + number2**2
// }
// sayHello();
// heyHello();

// function sayHello() {
//     console.log("Say Hello");
// }

// let heyHello = function() {
//     console.log("Hey Hello");

// }
//  let square = (number1,number2) =>{
//     return ((number1 * number2)/2);
// }
//  let circle=function (number1){
//     return Math.PI * number1**2
// }
// let ptg= (number1,number2) =>{
//     return number1**2 + number2**2;
// }

let kdt = ["지현","민정","승수","유림","원","수지","준우","영은","진형","지훈","윤비","한솔","해성","종익"]

// kdt.push("승환");
// kdt.pop();
// kdt.unshift("승환");
// for(let i =0; i <kdt.length; i++){
//     console.log("KDT"+ (i+1) +"번째 참여자의 성함은"+kdt[i]+"입니다");
// }

// const superMan = {
//     name: "clark",
//     age: 33,
//     height:187,
//     weight:77
// }
// console.log(superMan);
// console.log(superMan["age"]);

// superMan.hairColor = "blone";
// superMan["job"]="기자";

// console.log(superMan);

// delete superMan.weight;

// console.log(superMan);

// const pororo = {
//     name: "뽀로로",
//     age: 7
// }
// console.log(pororo["name"]);
// console.log(pororo["age"]);

// pororo.gender ="성별";

// console.log(pororo);

// pororo.height ="키";

// console.log(pororo);

// delete pororo.gender;

// console.log(pororo);

let superman = {
     name: "Clark",
     age: 33,
     height: 187,
     weight: 77,
    }
    for(key in superman) {
     console.log(key);
     console.log(superman[key]);
    }

