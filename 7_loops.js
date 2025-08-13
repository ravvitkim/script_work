//for loop 문법
//자바와 동일
//#
//##
//###
let i;
for(i=1; i<6; i++){
  let star =''
 for(let j=1; j<=i; j++){
  star = star + '#'
 }
 console.log(star)
}

// for~in 구문 : 인덱스 기준
// for~of 구문 : java의 advanced for 랑 같음


const ahn = {
  name : '안유진',
  year : 2003,
  group : 'ive',
}

//for~in
for(let x in ahn){
  console.log(ahn[x])
}
console.log("==============================")
console.log('for ~ of : 배열, 리스트에서 사용 가능')
let ive = ['장원영','안유진','이서']
for(let x of ive){
  console.log(x)
}

console.log('for ~ of')
for(let x in ive){
   console.log(ive[x])
}

//break : 현재의 블럭을 탈출
//continue : 현재 아래 실행않고 블럭 계속 진행
//return : 함수를 빠져나가는 것
//do ~ while or while
// 1~10까지 회전하면서, 5면 탈출
number = 1
do{
  console.log(number)
  number++
  if(number == 5) break
}while(number<10)