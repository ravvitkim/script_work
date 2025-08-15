

const k_group = [
  {
    group: 'ive',
    name: ['장원영', '안유진', '이서'],
    count: 5
  },
  {
    group: '에스파',
    name: ['카리나', '윈터', '지젤', '닝닝'],
    count: 4
  },
  {
    group: '케플러',
    name: ['최유진', '샤오팅', '마시로'],
    count: 9
  },
]

// 위 내용을 group_copy 라는 이름으로 깊은 복사해서 
// 1-1. 데이터 추가 (group : 브레이브걸스, name : 유나, 유정, 민영, count : 3)
// 1-2. 데이터를 맨 앞에 추가 (group : 블랙핑크, name : 제니, 리사, 로제, 지수 count : 4)
// 2-1) 데이터 삭제: 블랙핑크 삭제
// 2-2. 데이터 삭제 : 케플러 삭제
// 3. 데이터 수정 : group ive의 name 중 이서를 가을로 수정
// 4. group으로 오름차순 정렬
// 5. group으로 내림차순 정렬
// 6. 각 group name의 오름차순 정렬
// 7. name으로 검색 : 카리나를 변수로
// - group : 에스파, 멤버수 : 4
// 출력
// 8. 에스파의 name 정보를
// - 에스파 카리나
// - 에스파 윈터
// - 에스파 지젤
// - 에스파 닝잉
// =============================================

// 각 스크립트의 결과 출력 시 콘솔 내용

// 0) 깊은 복사
console.log('0) 깊은 복사')
let group_copy = [...k_group]
console.log(group_copy.join('/'))

/* 1-1) 데이터 추가: 브레이브걸스 */
console.log('1-1) 데이터 추가: 브레이브걸스');
group_copy.push({
  group: '브레이브걸스',
  name: ['유나', '유정', '민영'],
  count: 3
});
console.log(group_copy);

/* 1-2) 데이터를 맨 앞에 추가: 블랙핑크 */
console.log('1-2) 데이터 맨 앞 추가: 블랙핑크')
group_copy.unshift({
  group: '블랙핑크',
  name: ['제니', '리사', '로제', '지수'],
  count: 4
});
console.log(group_copy);

/* 2-1) 데이터 삭제: 블랙핑크 삭제 */
console.log('2-1) 데이터 삭제: 블랙핑크 삭제')
group_copy.shift()
console.log(group_copy);

/* 2-2) 데이터 삭제: 케플러 삭제 */
console.log('2) 데이터 삭제: 케플러 삭제')
group_copy.splice([2],3)
console.log(group_copy);


/* 3) 데이터 수정: ive의 "이서" -> "가을" */
console.log('3) 데이터 수정: ive의 "이서" -> "가을"')
group_copy[0].name.splice(2,1,'가을')
console.log(group_copy)



/* 4) group 오름차순 정렬 (단순 문자 비교) */
console.log('4) group 오름차순');
group_copy.sort((a,b) => {
  return a.group > b.group ? 1 : -1;
})
console.log(group_copy)

/* 5) group 내림차순 정렬 (단순 문자 비교) */
console.log('5) group 내림차순');
group_copy.sort( (a,b)=> {
  return a.group < b.group? 1 : -1;
})
console.log(group_copy)

/* 6) 각 group의 name 오름차순 정렬 (단순 문자 비교) */
console.log('6) 각 group name 오름차순 정렬 반영된 group_copy');
group_copy.sort( (a,b) => {
  return a.name > b.name? 1 : -1
})
console.log(group_copy)

/* 7) name으로 검색: "카리나" */
console.log('7) name으로 검색')
console.log(group_copy[1].name[0])


/* 8) 에스파의 name 정보를 줄마다 "에스파 XXX" 형태로 출력 */
console.log('8) 에스파의 name 정보를 줄마다 "에스파 XXX" 형태로 출력');
console.log(group_copy[1].name.map(x => `에스파 : ${x}`))
