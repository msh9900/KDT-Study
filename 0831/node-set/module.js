// @ts-check
// ES6 문법
import Animal from './animals.js';
const ani = new Animal();
console.log(ani.animals);
ani.showAnimals();

// import { animals, showAnimals } from './animals.js';
// console.log(animals);
// showAnimals();

// CommonJS 문법
// const { animals, showAnimals } = require('./animals');
// console.log(animals);
// showAnimals();

// const animals = require('./animals');

// console.log(animals.animals);
// animals.showAnimals();
