// console.log('hello nodejs package');

// 패키지를 불러올 때는 정확한 경로를 쓸 필요가 없다. 패키지 이름만 쓰면 된다.
const ramdomcolor = require('randomcolor');

let color1 = ramdomcolor();
let color2 = ramdomcolor();
let color3 = ramdomcolor();


console.log(ramdomcolor());
console.log(color1,color2,color3);

