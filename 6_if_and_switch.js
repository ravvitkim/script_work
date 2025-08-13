let number =5
//넘버가 짝수면 '짝수입니다'출력
if(number %2 == 0){
console.log('짝수')
}else{
  console.log('홀수')
}

//number값이 2,3,4,5,의 배수 인지 확인하고 출력
//그렇지않으면 

if(number %5 == 0 ){
  console.log('5의 배수')
}else if(number %4 == 0){
console.log('4의 배수')
}else if(number %3 == 0){
console.log('3의 배수')
}else if(number %2 == 0){
console.log('2의 배수')
}else{
console.log('2,3,4,5의 배수')
}

//switch 구문
//gender의 값이 1이면 남자 출력

let gender =2
switch(gender){
  case 1:
    console.log('남자')
    break
  case 2:
    console.log('여자')
    break
  case 3:
    console.log('혼성')
    break
  default :
    console.log('모름')
    break
}

