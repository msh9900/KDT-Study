// @ts-check
const http = require('http');
/**
 * @typedef Post
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
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
  {
    id: 3,
    title: '세번째 블로그 글',
    content: '세번째 내용입니다',
  },
];

const server = http.createServer((req, res) => {
  console.log('REQ URL', req.url);
  const urlArr = req.url ? req.url.split('/') : [];
  let id = -1;
  if (urlArr.length > 2) {
    id = parseInt(urlArr[2], 10);
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
        content: post.content,
      })),
      totalCount: posts.length,
    };

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(JSON.stringify(result));

    console.log('블로그의 글 목록을 보여줄 API 입니다');
  } else if (id !== -1 && req.method === 'GET') {
    const result = posts.find((post) => post.id === id);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    if (result) {
      res.statusCode = 200;
      res.end(JSON.stringify(result));
      console.log('블로그의 특정 글 내용을 보여줄 API  입니다');
      console.log(`Post ID 값은 ${id} 입니다`);
    } else {
      res.statusCode = 404;
      res.end('포스트를 찾을 수 없습니다.');
      console.log('포스트를 찾을 수 없습니다.');
    }
  } else if (req.url === '/posts' && req.method === 'POST') {
    req.setEncoding('utf-8');
    req.on('data', (data) => {
      const newPost = JSON.parse(data);
      posts.push({
        id: posts[posts.length - 1].id + 1,
        title: newPost.title,
        content: newPost.content,
      });
    });
    res.statusCode = 200;
    res.end('새로운 글 등록!');
    console.log('블로그의 글을 올릴 때 호출할 API 입니다');
  } else if (id !== -1 && req.method === 'PUT') {
    req.setEncoding('utf-8');
    req.on('data', (data) => {
      const newPost = JSON.parse(data);
      posts[id - 1] = {
        id: id,
        title: newPost.title,
        content: newPost.content,
      };
    });
    res.statusCode = 200;
    res.end('새로운 글 수정!');
    console.log('블로그의 글을 수정 때 호출할 API 입니다');
  } else if (id !== -1 && req.method === 'DELETE') {
    posts.splice(id - 1, 1);

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(`id 번호가 ${id}인 포스트를 삭제 하였습니다.`);

    console.log('블로그의 글을 삭제 때 호출할 API 입니다');
  } else {
    res.statusCode = 404;
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
