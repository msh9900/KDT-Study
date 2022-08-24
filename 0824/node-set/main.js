// @ts-check

let userId = '';
const promise = new Promise((resolve, reject) => {
  console.log('Promise의 기능을 바로 수행합니다');
  setTimeout(() => {
    userId = 'mos';
    if (userId === 'mos') {
      resolve(userId);
    } else {
      reject(new Error('서버 기능이 정상적으로 작동하지 않았습니다.'));
    }
  }, 2000);
});
promise
  .then((value) => {
    console.log(`userID 는 ${value} 입니다`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('Promise 시퀀스 종료');
  });

// let id = prompt('아이디를 입력하세요');
// let userId = '';
// console.log('로그인 시도');
// // 서버 통신 부분!
// setTimeout(function cb1() {
//   userId = 'tetz';
//   console.log('아이디 정보 획득 완료!');
//   if (id === userId) {
//     console.log('로그인 성공');
//   } else {
//     console.log('로그인 실패');
//   }
// }, 2000);

// console.log('1');
// setTimeout(() => {
//   console.log('callback');
// }, 1000);
// console.log('2');

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.end('Hello');
// });
// const PORT = 4000;
// server.listen(PORT, () => {
//   console.log(`The server is listening at port: ${PORT}`);
// });
