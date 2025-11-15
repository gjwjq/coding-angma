// splice(n, m) : 배열의 특정 요소를 지움
// n은 시작, m은 개수

let arr = [1,2,3,4,5]
arr.splice(0,2) // [3,4,5]
arr.splice(1,3) // [1,5] 

arr.splice(1,3,100,200) // n, m 제외한 뒤에 있는 값은 지운 요소들 자리에 차례대로 추가됨
// [1,100,200,5]

let newArr = ["내", "이름", "철수"]
newArr.splice(1,0,"엄청나고","대단한") // m이 0이면 그냥 1번부터 뒤의 요소들 추가함
// 내 엄청나고 대단한 이름 철수 (배열임)

let newArr2 = [1,2,3,4,5]
let result = newArr2.splice(0,2) // 이러면 3,4,5라는 배열이 담기냐? X
// 삭제된 요소가 반환되어 result에는 1,2 라는 배열이 담김

// slice : n부터 m까지 반환

let sliceArr = [1,2,3,4,5]
sliceArr.slice(1,4) // 1번 인덱스부터 4번 바로 앞 인덱스까지 반환
// 2,3,4 라는 배열 반환됨
//slice안에 아무값도 안담으면 똑같은 배열 복사됨

// concat : 인자로 주어진 배열이나 값을 기존 배열에 합쳐 새 배열을 반환함

let conArr = [1,2]

let newConArr = conArr.concat([3,4]) // 1,2,3,4 라는 새로운 배열로 반환됨

let newConArr2 = conArr.concat([3,4],[5,6],7,8, "안녕") // 이래도? 1,2,3,4,5,6,7,8,"안녕" 이라는 배열로 반환됨 => 굳이 배열로 안쓰고 걍 값만 입력해도 된다 ㅇㅇ

//let forEachArr = [1,2,3]
//forEach = 배열반복
//forEach(e, i, n) : e = 해당요소, i = index번호, n = 현재배열
// e = 1 or 2 or 3 / i =  0 or 1 or 2 / n = forEachArr

//실전활용

let forEachArr = ["Mike", "Tom", "Jane"]

forEachArr.forEach((name, index, n) =>{
  // console.log(`${index + 1}번. ${name}`); // 이러면 1번. Mike \n 2번. Tom \n 3번. Jane 이라고 출력됨
})

//indexOf / lastIndexOf 

let indexArr = [1,2,3,4,5,1,2,3]

indexArr.indexOf(3) // 가장 먼저 찾은 3의 인덱스 번호를 보여줌 : 2 반환됨
indexArr.indexOf(3,3) // 3을 찾는데 뒤에있는 3은 순서임. 결국 인덱스 3번째부터 3을 찾는 코드고 결국 맨 뒤에있는 3을 찾아 7 반환됨
indexArr.lastIndexOf(3) // 끝에서 부터 시작, 끝에서 가장 먼저 만나는 3이 찾아지면서 그 3의 인덱스번호인 7이 반환됨.

// includes : 찾는요소 있으면 true, 없으면 false

indexArr.includes(3) // true
indexArr.includes(8) // false

// find / findIndex : 조건에 맞는 요소를 찾고 가장 먼저 찾은 값만 반환함 (findIndex는 그 인덱스 번호를 알려줌)
// 예제 1 : 짝수찾기

let findArr = [1,2,3,4,5]

const findResult = findArr.find((e)=>{
  return e % 2 === 0 
}) // 짝수를 찾는 조건이라 가장 먼저 있는 짝수인 2를 찾고 끝남

// 예제 2 : 미성년자 찾기

let userList = [
  { name : "Mike", age : 30},
  { name : "Jane", age : 27},
  { name : "Tom", age : 17}
]

const userResult = userList.find((e) =>{
  if (e.age < 20) {
    return true
  } else {
    return false
  }
}) // 미성년자인 tom 반환하고 끝남 = { name: 'Tom', age: 17 }

// filter : find는 1개찾고 끝이라면 얘는 전부 다 찾아줌

let filterArr = [1,2,3,4,5,6]

const filterResult = findArr.filter((e)=>{
  return e % 2 === 0 
}) // 이런식이면 filter는 하나만 찾아주는게 아니라 전부 찾고 새로운 배열에 넣어주기 때문에
// [2,4,6]이 반환됨.

// reverse : 배열을 역순으로 재정렬해줌

let reverseArr = [1,2,3]
reverseArr.reverse() // [3,2,1]이라는 배열로 재정렬해줌

// map : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환해줌 // 중요함

let mapList = [
  { name : "Mike", age : 30},
  { name : "Jane", age : 27},
  { name : "Tom", age : 17}
]
let newMapList = mapList.map((e, i) =>{
  return Object.assign({}, e, {
    isAdult: e.age > 19,
  })
})
// { name: 'Mike', age: 30, isAdult: true },
// { name: 'Jane', age: 27, isAdult: true },
// { name: 'Tom', age: 17, isAdult: false }
// 이런식의 새로운 배열을 생성해줌

// join : 배열을 합쳐서 문자열로 만듦

let joinArr = ["안녕", "난", "권제이"]
 
let joinResult = joinArr.join() // "안녕,난,권제이" 라는 문자열로 반환됨, join안의 인수부분에 아무것도 안적으면 문자 사이에 쉼표가 들어감
//join(" ") 이런식으로 바꾼다면 "안녕 난 권제이" 라는 문자열이됨

// split : 문자열을 합쳐서 배열로 만듦

let splitArr = joinResult.split(",") // 이러면 위의 문자열들에서 쉼표(",")를 기준으로 하나의 밸류로 배열안에 들어감.

// Array.isArray

let isArr = {
  name : "mike", age : 123
}

let  isArr2 = ["mike", 123]

// console.log(typeof isArr2); // 분명 배열이지만 typeof쓰면 object라고 나옴
// console.log(Array.isArray(isArr2)); // 이러면 배열이 맞아서 true라고 나옴

// sort : 배열을 재정렬해줌, 배열자체가 재변경됨

let sortArr = [1,5,3,4,2]

sortArr.sort() // 이러면 [1,2,3,4,5] 라는 새로운 배열로 정렬된 뒤 변경됨, a,b,c,d 같은 알파벳도 정렬 가능
// 하지만 sort는 숫자또한 문자로 받아오기 때문에
let sortArr2 = [4,3,12]
// sortArr2.sort() // 이러면 [12,3,4] 로 정렬됨. 왜냐? 문자열이라서 맨 앞에있는 숫자만 보고 정렬해주기 때문임 (12는 앞에가 1이라서 젤 앞에와요)
// 그래서 sort뒤에 인자부분에 함수를 넣어줘야함.

function fn(a, b) {
  return a - b
}
sortArr2.sort(fn) // 이러면 2가지의 값을 받고 계속 순서대로 비교해서 결국 3,4,12순서가 됨

// reduce : 배열을 돌면서 원하는 작업을 하고 최종값을 반환함

let reduceArr = [1,2,3,4,5]

const reduceResult = reduceArr.reduce((acc, cur)=>{
  return acc + cur
}, 0) // 이러면 모든 배열을 차례차례 돌면서 더해줌. 한번돌때는 acc(누적값) 0, cur(현재값) 1,
// 두번 돌때는 누적값에 원래 현재값이던 1을 넣고 현재값에는 다음 현재값인 2를 넣어줌. 이걸 반복하면 결국 다 더해져서 15가됨

let reduceList = [
  {name : "Mike", age : 30},
  {name : "Jane", age : 10},
  {name : "Tom", age : 27},
]

let reduceListResult = reduceList.reduce((acc,cur) => {
  if (cur.name.includes("e")) {
    acc.push(cur.name)
  } 
  return acc
},[]) // 이름에 e가 포함된 사람만 찾아서 새로운 새로운 기본값인 텅 빈 배열에 담아줌