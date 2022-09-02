// @ts-check

const fs = require('fs').promises;
async function main() {
  let data = await fs.readFile('./readme.txt');
  console.log('1번', data.toString());
  data = await fs.readFile('./readme.txt');
  console.log('2번', data.toString());
  data = await fs.readFile('./readme.txt');
  console.log('3번', data.toString());
  data = await fs.readFile('./readme.txt');
  console.log('4번', data.toString());
}
main();

// const fs = require('fs').promises;
// fs.readFile('./readme.txt')
//   .then((data) => {
//     console.log('1번', data.toString());
//     return fs.readFile('./readme.txt');
//   })
//   .then((data) => {
//     console.log('2번', data.toString());
//     return fs.readFile('./readme.txt');
//   })
//   .then((data) => {
//     console.log('3번', data.toString());
//     return fs.readFile('./readme.txt');
//   })
//   .then((data) => {
//     console.log('4번', data.toString());
//   })
//   .catch((err) => {
//     throw err;
//   });

// const promise = new Promise(function (resolve, reject) {
//   const tetz = 'old';
//   if (tetz === 'old') {
//     setTimeout(() => {
//       resolve('tetz is old');
//     }, 3000);
//   } else {
//     reject('tetz is getting old');
//   }
// });
// promise
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (data) {
//     console.log(data);
//   });

// const fs = require('fs');

// let data = fs.readFileSync('./readme.txt');
// console.log('1번', data.toString());
// data = fs.readFileSync('./readme.txt');
// console.log('2번', data.toString());
// data = fs.readFileSync('./readme.txt');
// console.log('3번', data.toString());
// data = fs.readFileSync('./readme.txt');
// console.log('4번', data.toString());

// const fs = require('fs');

// fs.readFile('./readme.txt', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('1번', data.toString());
//   fs.readFile('./readme.txt', (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log('2번', data.toString());
//     fs.readFile('./readme.txt', (err, data) => {
//       if (err) {
//         throw err;
//       }
//       console.log('3번', data.toString());
//       fs.readFile('./readme.txt', (err, data) => {
//         if (err) {
//           throw err;
//         }
//         console.log('4번', data.toString());
//       });
//     });
//   });
// });

// const fs = require('fs');

// fs.readFile('readme.txt', 'utf-8', (err, result) => {
//   if (err) {
//     throw err;
//   }
//   console.log('1번 일꾼', result.toString);
// });
// fs.readFile('readme.txt', 'utf-8', (err, result) => {
//   if (err) {
//     throw err;
//   }
//   console.log('2번 일꾼', result.toString);
// });
// fs.readFile('readme.txt', 'utf-8', (err, result) => {
//   if (err) {
//     throw err;
//   }
//   console.log('3번 일꾼', result.toString);
// });
// fs.readFile('readme.txt', 'utf-8', (err, result) => {
//   if (err) {
//     throw err;
//   }
//   console.log('4번 일꾼', result.toString);
// });

// const str = '파일 쓰기가 수행되면 들어감';

// fs.writeFile('readme.txt', str, 'utf-8', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('파일쓰기 성공');
//   }
// });
// fs.readFile('readme.txt', 'utf-8', function(err, result){
//     if(err) {
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// })

// fs.readFile('readme.txt', 'utf-8', (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });
