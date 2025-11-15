// toUpperCase, toLowerCase

let text = 'hello world'

text.toUpperCase() //대문자
text.toLowerCase() //소문자

// indexOf

let desc = "Hi guys. Nice to meet you."

desc.indexOf('to') // to가 desc의 14번째에 있다고 알려줌 (물론 0부터 시작)
desc.indexOf('hello') // 존재하지 않기 때문에 -1로 반환됨

if (desc.indexOf('Hi') > -1) { // Hi가 index번호 0번째라 if문이 false로 반환되기 때문에 꼭 조건을 -1보다 큰가? 로 작성해야함
  console.log('Hi가 포함된 문장입니다.');
} 

// slice

let abcDesc = "abcdefg"

abcDesc.slice(2) // 인덱스번호 2부터 시작 = cdefg
abcDesc.slice(2, 5) // 인덱스번호 2부터 시작, 인덱스번호 5앞 (즉 4까지) 출력 cde 
abcDesc.slice(0, -4) // 인덱스 0부터 끝에서 2번째 까지 반환 abcde

// substring 

abcDesc.substring(3,6); // 인덱스번호 3번에서 6번 사이를 출력 = def
abcDesc.substring(6,3); // 자동으로 작은 숫자를 시작 인덱스로 큰 숫자를 끝 인덱스로 바꿔서 처리 = def 
// substring()은 음수사용불가능

// substr
// abcDesc.substr(2, 4)  // 사라진듯ㅇㅇ 쓰지마셈

// trim

let trimText = " hello             "

trimText.trim() // 그냥 공백 제거 = hello

// repeat 

let repeatText = "Hello!"
repeatText.repeat(3) // 3번 반복함 // Hello!Hello!Hello!

// 실전 활용

let list = [
  "01. 들어가며",
  "02. JS의 역사",
  "03. 자료형",
  "04. 함수",
  "05. 배열",
]

let newList = []

list.forEach((e) =>{
  newList.push(e.slice(4))
})

console.log(newList); // 이러면 앞에 숫자부터 공백까지 다 자르고 문자만 남은 뒤 그 값을 newList안에 넣음

// 실전 활용 2
// 금칙어 : 콜라

// function hasCola(str) {
//   if (str.indexOf('콜라') > -1){
//     console.log('금칙어가 있음');
//   } else {
//     console.log('통과');
//   }
// }

// indexOf를 사용할바에 그냥 includes써서 편하게 답 구함

// function hasCola(str) {
//   if (str.includes('콜라')){
//     console.log('금칙어가 있음');
//   } else {
//     console.log('통과');
//   }
// }

// 근데if문 보기 안좋으니까 삼항연산자 사용

function hasCola(e) {e.includes('콜라') ? console.log('금칙어가 있음(콜라)') : console.log('통과')}

hasCola('사이다')
hasCola('콜라')
hasCola('콜라사이다')

let cola = '콜라 안녕'
let cider = '사이다 안녕'

hasCola(cola)
hasCola(cider)