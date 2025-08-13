let k_group = [
  {
    group : 'ive',
    name : ['장원영','안유진','이서'],
    count : 5,
  },
  {
    group : '에스파',
    name : ['카리나','원터','지젤','닝닝'],
    count : 4,
  },
  {
    group : '케플러',
    name : ['최유진','마시로','샤오팅'],
    count : 9,
  }

]
//팀원 출력
console.log(k_group[1].name)
//인원수 출력
console.log(k_group[1].count)


console.log('====================================')

for(let x in k_group){
  let group = k_group[x].group;
  let member = ''
  console.log(`${+x +1}. 그룹명 : ${group}`)
  for(let y of k_group[x].name){
    member = member + y + ' '
  }
  console.log(`${group} 멤버 : ${member}`)
}