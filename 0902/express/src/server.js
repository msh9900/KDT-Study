// @ts-check
const express = require('express');
const app = express();
const userRouter = express.Router();
const PORT = 4000;

const USER = {
  1: {
    id: 'mos',
    name: '모승환',
  },
};
userRouter.get('/', (req, res) => {
  res.send(USER);
});

userRouter.get('/:id', (req, res) => {
  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.end('ID not found');
  }
});

userRouter.post('/', (req, res) => {
  res.end('회원 등록');
});

app.use('/users', userRouter);
app.use('/', (req, res) => {
  res.end('Hello, express world!');
});

app.listen(PORT, () => {
  console.log(`The express server is running at port: ${PORT}`);
});

// const express = require('express');
// const app = express();
// const PORT = 4000;
// app.get('/', (req, res) => {
//   res.send('GET request');
// });
// app.post('/', (req, res) => {
//   res.send('POST request');
// });
// app.put('/', (req, res) => {
//   res.send('PUT request');
// });
// app.delete('/', (req, res) => {
//   res.send('DELETE request');
// });

// app.listen(PORT, () => {
//   console.log(`The express server is running at port: ${PORT}`);
// });

// const express = require('express');

// const fs = require('fs');

// const app = express();
// const PORT = 4000;

// app.get('/:email/:id/:pw/:gender', (req, res) => {
//   console.log(req.params);
//   res.send(req.params);
// });

// app.get('/', (req, res) => {
//   if (req.query.email && req.query.pw && req.query.name && req.query.gender) {
//     res.send(req.query);
//   } else {
//     res.send('값 없음');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`The express server is running at port: ${PORT}`);
// });
