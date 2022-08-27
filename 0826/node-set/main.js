// @ts-check
const http = require('http');

const posts = [
  {
    id: 1,
    title: '첫번째 블로그 글',
    content: '첫번째 내용입니다',
  },
  {
    id: 2,
    title: '두번째 블로그 글',
    content: '두번째 내용입니다',
  },
];

const server = http.createServer((req, res) => {
  console.log('@@@@', req.url);
  const urlArr = req.url ? req.url.split('/') : [];
  console.log(urlArr);
  let id = 'not';
  if (urlArr.length > 2) {
    id = urlArr[2];
  }

  /**
   * 블로그용 서버 API 구성
   *
   * GET /posts          목록 가져오기
   * GET /posts/:id      글 내용 가져오기
   * POST /posts         새로운 글 올리기
   * PUT /posts/:id      기존 글 수정하기
   * DELETE /posts/:id   기존 글 삭제하기
   */

  if (req.url === '/posts' && req.method === 'GET') {
    const result = {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
      })),
      totalCount: posts.length,
    };

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(JSON.stringify(result));

    console.log('블로그의 글 목록을 보여줄 API 입니다');
  } else if (urlArr[1] === 'posts' && req.method === 'GET') {
    res.statusCode = 200;
    console.log('블로그의 특정 글 내용을 보여줄 API 입니다');
  } else if (req.url === '/posts' && req.method === 'POST') {
    res.statusCode = 200;
    console.log('블로그의 글을 올릴 때 호출할 API 입니다');
  } else if (urlArr[1] === 'posts' && req.method === 'PUT') {
    res.statusCode = 200;
    console.log('블로그의 글을 수정 때 호출할 API 입니다');
  } else if (urlArr[1] === 'posts' && req.method === 'DELETE') {
    res.statusCode = 200;
    console.log('블로그의 글을 삭제 때 호출할 API 입니다');
  } else {
    res.statusCode = 400;
    res.end('Not Found');
    console.log('해당 API를 찾을 수 없습니다.');
  }
});
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`해당 서버는 ${PORT}에서 작동 중입니다.`);
});

// // 실습1
// class Shape {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     let shapedata = this.width * this.height;
//     console.log(shapedata);
//   }
// }
// class Rectangle extends Shape {
//   constructor(width, height) {
//     super(width, height);
//   }
//   getArea() {
//     let rectangleData = this.width * this.height * 2;
//     console.log(rectangleData);
//   }
// }
// class Triangle extends Shape {
//   constructor(width, height) {
//     super(width, height);
//   }
//   getArea() {
//     let triangleData = (this.width * this.height) / 2;
//     console.log(triangleData);
//   }
// }
// class Circle extends Shape {
//   constructor(width, height, radius) {
//     super(width, height);
//     this.radius = radius;
//   }
//   getArea() {
//     let pi = Math.PI;
//     let circleData = (pi * this.radius) ** 2;
//     console.log(circleData);
//   }
// }
// const shape = new Shape(3, 4);
// const rectangle = new Rectangle(3, 4);
// const triangle = new Triangle(1, 3);
// const circle = new Circle(2, 3, 4);
// shape.getArea();
// circle.getArea();

// const hyundai = new Car('hyundai', 'white');
// const tesla = new ElecCar('tesla', 'red', 'electricity');
// console.log(hyundai instanceof Car);
// console.log(tesla instanceof Car);

// class Car {
//   // 생성자 전달
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   } // 메소드 선언
//   drive() {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`);
//   }
// } // 상속 선언
// class ElecCar extends Car {
//   constructor(brand, color, fuel) {
//     super(brand, color);
//     this.fuel = fuel;
//   }
//   drive() {
//     console.log(
//       `${this.brand}의 ${this.color}색 자동차가 ${this.fuel}의 힘으로 주행 중입니다`
//     );
//   }
// }
// const hyundai = new Car('hyundai', 'white');
// hyundai.drive();
// const tesla = new ElecCar('tesla', 'red', 'electricity');
// tesla.drive();

// // Class 선언
// class Car {
//   // 생성자 전달
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   } // 메소드 선언
//   drive() {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`);
//   }
// } // 상속 선언
// class ElecCar extends Car {
//   constructor(brand, color, fuel) {
//     super(brand, color);
//     this.fuel = fuel;
//   }
//   showFuel() {
//     console.log(`해당 자동차는 ${this.fuel}의 힘으로 움직입니다!`);
//   }
// }
// const tesla = new ElecCar('tesla', 'red', 'electricity');
// tesla.drive();
// tesla.showFuel();

// function Car(brand, color) {
//   this.brand = brand;
//   this.color = color;
//   this.drive = function () {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`);
//   };
// }
// const hyundai = new Car('hyundai', 'blue');
// const porsche = new Car('porsche', 'black');
// const toyota = new Car('toyota', 'white');
// console.log(hyundai.brand);
// porsche.drive();
// toyota.drive();

// Class 선언
// class Car {
//   // 생성자 전달
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   } // 메소드 선언
//   drive() {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`);
//   }
// }
// const hyundai = new Car('hyundai', 'blue');
// const porsche = new Car('porsche', 'black');
// const toyota = new Car('toyota', 'silver');

// console.log(hyundai.brand);
// porsche.drive();
// toyota.drive();

// let userId = '';
// const promise = new Promise((resolve, reject) => {
//   console.log('Promise의 기능을 바로 수행합니다');
//   setTimeout(() => {
//     userId = 'mos';
//     if (userId === 'mos') {
//       resolve(userId);
//     } else {
//       reject(new Error('서버 기능이 정상적으로 작동하지 않았습니다.'));
//     }
//   }, 2000);
// });
// promise
//   .then((value) => {
//     console.log(`userID 는 ${value} 입니다`);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('Promise 시퀀스 종료');
//   });

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
