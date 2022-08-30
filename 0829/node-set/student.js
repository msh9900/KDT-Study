const student = ['세호', '재석'];
exports.student = student;

exports.showStudent = function showStudent() {
  student.map((el) => console.log(el));
};
