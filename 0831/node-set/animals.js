// @ts-check
// ES6 문법
export default class Animal {
  constructor() {
    this.animals = ['dog', 'cat'];
  }
  showAnimals() {
    this.animals.map((el) => console.log(el));
  }
}

// export const animals = ['dog', 'cat'];
// export function showAnimals() {
//   animals.map((el) => console.log(el));
// }

// Commonjs 문법
// const animals = ['dog', 'cat'];
// exports.animals = animals;

// exports.showAnimals = function showAnimals() {
//   animals.map((el) => console.log(el));
// };

// const animals = ['dog', 'cat'];

// function showAnimals() {
//   animals.map((el) => console.log(el));
// }

// module.exports = {
//   animals,
//   showAnimals,
// };
