// 명시적 형변환
let age = 22
let strAge = age.toString()
console.log(typeof age)
console.log(typeof strAge)

//암묵적(묵시적) 형변환
console.log(typeof +strAge)

// 문자를 숫자로 명시적 형변환
console.log('========================')
let strNumber = '99'
console.log(typeof strNumber)
let number = parseInt(strNumber)
console.log(typeof number)