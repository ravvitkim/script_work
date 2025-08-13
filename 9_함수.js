// 1) 단일함수의 사용
console.log('1) 단일함수의 사용')
function calculate(number){
  console.log(number * 100)
  return true
}
// 함수를 호출
calculate(3)
console.log(calculate(4))

// 2) 여러개 파라미터 사용
console.log('2) 여러개 파라미터 사용')
// add 라는 함수를 선언하고
// 두 수 x , y를 받아서 두 수를 더해서
// 결과를 리턴하는 함수를 작성하시오.

// function add(x,y){
//   console.log(x +y)
// }
// add(3,4)

function add(x,y){
  return x+y
}

let result = add(3,4)
console.log(result)

// 3) default 파라미터
console.log()
function minus(x, y=1){
  return x-y
}
console.log(minus(3))
console.log(minus(3,2))

// 4)화살표 함수(Arrow Function)
console.log('4)화살표 함수(Arrow Function)')

const multiply = function(x,y){
  return x * y
}
console.log(multiply(3,4))

console.log('4-1) 함수의 간편 표기법')
const divide1 = function(x,y){
  return x / y
}

const divide2 = (x , y) => x / y;
console.log(divide2(6,2))

console.log('4-2) 인자가 1개 일 때')
// 제곱을 하는 함수
const power = x => x*x;
console.log(power(9))

console.log('5) 즉시 실행함수');
// 어떤 기능을 수행하는데 함수를 정의함과
// 동시에 실행해야하는 경우
// 나머지를 구하는 함수
// console.log(x % y);
// (function(x, y) {
//   console.log(x % y);
// })(7, 3)

// console.log('6) 함수연습');

const myFunction = (x,y) => {
  if(x>y){
    let temp = x;
    x=y;
    y=temp;
  }
  // // 구조분해 할당
  // if(x>y) [x,y] = [y,x]; --temp 대신 씀
  // for loop 돌리면서 짝수만계산
  let sum = 0;
  for(let i = x; i<=y; i++){
    if(i%2 == 0)
    sum +=i;
  }
  return sum;
}
console.log(myFunction(7,3))

// 구조분해 할당
if(x>y) [x,y] = [y,x];