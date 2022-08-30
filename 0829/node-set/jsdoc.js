// @ts-check


/**
 * 
 * @param {string} name 이름
 * @param {number} age 나이
 * @returns 문자열,숫자를 받아서 문자열로 출력
 */
function hello(name, age){
    return `내이름은 ${name} 이고 나이는 ${age} 입니다`
}
console.log(hello('mos',27));

/**
 * @typedef Post
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post} */
const post = {
    id: 1,
    title: '제목',
    content: '내용',

}
